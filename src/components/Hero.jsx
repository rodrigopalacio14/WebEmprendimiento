import { Bot, CalendarCheck, ChevronRight, MessageCircle, MonitorSmartphone } from 'lucide-react'
import { backgrounds } from '../data/backgrounds'
import { useLanguage } from '../context/LanguageContext'
import { BackgroundSection } from './BackgroundSection'

export function Hero({ onNavigate }) {
  const { t } = useLanguage()

  const go = href => event => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <BackgroundSection
      id="inicio"
      backgroundImage={backgrounds.main}
      overlay="linear-gradient(120deg, rgba(255,255,255,0.88), rgba(239,246,255,0.68) 48%, rgba(15,23,42,0.42))"
      height="100vh"
      className="hero-section"
    >
      <div className="section-container hero-grid">
        <div className="hero-copy-block">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="primary-button" href="/#planes" onClick={go('/#planes')}>
              {t.hero.primaryButton}
              <ChevronRight size={18} />
            </a>
            <a className="secondary-button" href="/#demos" onClick={go('/#demos')}>
              {t.hero.secondaryButton}
              <MonitorSmartphone size={18} />
            </a>
          </div>
        </div>

        <div className="hero-mockup" aria-label={t.hero.mockupTitle}>
          <div className="mockup-window">
            <div className="mockup-top">
              <span />
              <span />
              <span />
            </div>
            <div className="mockup-body">
              <div className="mockup-site">
                <MonitorSmartphone size={28} />
                <strong>{t.hero.mockupTitle}</strong>
                <p>{t.hero.mockupPanel}</p>
              </div>
              <div className="mockup-chat">
                <div>
                  <MessageCircle size={18} />
                  <span>{t.hero.mockupMessage}</span>
                </div>
                <div>
                  <Bot size={18} />
                  <span>{t.hero.mockupBot}</span>
                </div>
              </div>
              <div className="mockup-panel">
                <CalendarCheck size={22} />
                <span>{t.hero.mockupPanel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  )
}
