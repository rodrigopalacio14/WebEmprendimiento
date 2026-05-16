import { PanelLeft, Send } from 'lucide-react'
import { demoList } from '../data/siteContent'

export function Header({ onNavigate }) {
  const go = href => event => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <header className="main-header">
      <nav className="section-container header-nav">
        <a href="/" className="brand" onClick={go('/')}>
          <span className="brand-mark">
            <PanelLeft size={20} />
          </span>
          WebFlex Studio
        </a>
        <div className="main-links">
          <a href="/#servicios" onClick={go('/#servicios')}>Servicios</a>
          {demoList.map(([key, demo]) => (
            <a href={demo.path} key={key} onClick={go(demo.path)}>
              {demo.label}
            </a>
          ))}
        </div>
        <a className="header-action" href="/#contacto" onClick={go('/#contacto')}>
          Cotizar
          <Send size={16} />
        </a>
      </nav>
    </header>
  )
}

export function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
