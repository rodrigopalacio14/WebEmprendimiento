import { Bot, ChevronRight, LayoutDashboard, MessageCircle, MonitorSmartphone } from 'lucide-react'
import { backgrounds } from '../data/backgrounds'
import { useLanguage } from '../context/LanguageContext'
import { BackgroundSection } from './BackgroundSection'

const detailIcons = [MonitorSmartphone, Bot, LayoutDashboard]

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
      overlay="linear-gradient(115deg, rgba(15,23,42,0.84), rgba(23,37,84,0.68) 44%, rgba(15,118,110,0.34))"
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

        <div className="hero-service-detail">
          {t.services.items.map((item, index) => {
            const Icon = detailIcons[index]
            return (
              <div key={item.title}>
                <Icon size={22} />
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            )
          })}
          <div className="hero-whatsapp-note">
            <MessageCircle size={20} />
            <span>{t.hero.mockupBot}</span>
          </div>
        </div>
      </div>
    </BackgroundSection>
  )
}
