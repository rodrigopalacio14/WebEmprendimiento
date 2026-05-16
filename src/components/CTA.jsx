import { MessageCircle } from 'lucide-react'
import { backgrounds } from '../data/backgrounds'
import { useLanguage } from '../context/LanguageContext'
import { BackgroundSection } from './BackgroundSection'

export function CTA() {
  const { t } = useLanguage()

  return (
    <BackgroundSection
      id="contacto"
      backgroundImage={backgrounds.cta}
      overlay="linear-gradient(135deg, rgba(15,23,42,0.82), rgba(23,37,84,0.7), rgba(15,118,110,0.58))"
      className="cta-background-section"
    >
      <div className="section-container page-section">
        <div className="contact-panel">
          <div>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
          </div>
          <a className="contact-button" href="https://wa.me/5493517868252" target="_blank" rel="noreferrer">
            {t.cta.button}
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </BackgroundSection>
  )
}
