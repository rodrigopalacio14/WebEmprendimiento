import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Layout'
import { demos } from './data/siteContent'
import { DemoPage } from './pages/DemoPage'
import { HomePage } from './pages/HomePage'

function getRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const demoKey = Object.keys(demos).find(key => demos[key].path === path)

  return {
    demoKey,
    path,
    hash: window.location.hash
  }
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const demo = useMemo(() => demos[route.demoKey], [route.demoKey])

  const navigate = href => {
    const url = new URL(href, window.location.origin)
    window.history.pushState({}, '', `${url.pathname}${url.hash}`)
    setRoute(getRoute())
  }

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const id = route.hash.slice(1)
    window.requestAnimationFrame(() => {
      if (!id) {
        window.scrollTo({ top: 0 })
        return
      }

      const target = document.getElementById(id)
      if (!target) return
      const top = target.getBoundingClientRect().top + window.pageYOffset - 86
      window.scrollTo({ top, behavior: 'smooth' })
    })
  }, [route])

  return (
    <main className="site-shell">
      <Header onNavigate={navigate} />
      {demo ? <DemoPage demo={demo} /> : <HomePage onNavigate={navigate} />}
    </main>
  )
}

export default App
