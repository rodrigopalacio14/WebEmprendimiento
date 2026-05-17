import { useEffect, useMemo, useState } from 'react'
//import { Chatbot } from './components/Chatbot'
import { Navbar } from './components/Navbar'
import { demoRouteMap } from './data/siteContent'
import { DemoPage } from './pages/DemoPage'
import { HomePage } from './pages/HomePage'

function normalizePath(pathname) {
  return pathname.replace(/\/$/, '') || '/'
}

function getRoute() {
  const path = normalizePath(window.location.pathname)
  return {
    path,
    hash: window.location.hash,
    demoRoute: demoRouteMap[path]
  }
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const demoRoute = useMemo(() => route.demoRoute, [route])

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
      const top = target.getBoundingClientRect().top + window.pageYOffset - 92
      window.scrollTo({ top, behavior: 'smooth' })
    })
  }, [route])

  return (
    <main className="site-shell">
      <Navbar onNavigate={navigate} />
      {demoRoute ? <DemoPage route={demoRoute} onNavigate={navigate} /> : <HomePage onNavigate={navigate} />}
      {/* <Chatbot onNavigate={navigate} /> */}
    </main>
  )
}

export default App
