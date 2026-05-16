import { Menu, Send } from 'lucide-react'
import { demoRoutes } from '../data/siteContent'
import { useLanguage } from '../context/LanguageContext'

export function Navbar({ onNavigate }) {
  const { language, setLanguage, languages, t } = useLanguage()

  const go = href => event => {
    event.preventDefault()
    onNavigate(href)
  }

  const navItems = [
    ['/#inicio', t.nav.home],
    ['/#servicios', t.nav.services],
    ['/#demos', t.nav.demos],
    ['/#planes', t.nav.plans],
    ['/#proceso', t.nav.process],
    ['/#contacto', t.nav.contact]
  ]

  return (
    <header className="main-header">
      <nav className="section-container header-nav">
        <a href="/" className="brand" onClick={go('/')}>
          <span className="brand-mark" aria-hidden="true">NT</span>
          Nispero Tech
        </a>

        <div className="main-links">
          {navItems.map(([href, label]) => (
            <a href={href} key={href} onClick={go(href)}>
              {label}
            </a>
          ))}
        </div>

        <div className="language-switcher" aria-label="Language selector">
          <div className="language-buttons">
            {languages.map(item => (
              <button
                className={language === item.code ? 'is-active' : ''}
                key={item.code}
                onClick={() => setLanguage(item.code)}
                type="button"
              >
                <span>{item.flag}</span>
                {item.label}
              </button>
            ))}
          </div>
          <select value={language} onChange={event => setLanguage(event.target.value)}>
            {languages.map(item => (
              <option key={item.code} value={item.code}>
                {item.flag} {item.label}
              </option>
            ))}
          </select>
        </div>

        <a className="header-action" href="/#contacto" onClick={go('/#contacto')}>
          {t.nav.proposal}
          <Send size={16} />
        </a>

        <details className="mobile-menu">
          <summary>
            <Menu size={22} />
          </summary>
          <div>
            {navItems.map(([href, label]) => (
              <a href={href} key={href} onClick={go(href)}>
                {label}
              </a>
            ))}
            {demoRoutes.map(route => (
              <a href={route.path} key={route.key} onClick={go(route.path)}>
                {t.demos.cards[route.key].title}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  )
}
