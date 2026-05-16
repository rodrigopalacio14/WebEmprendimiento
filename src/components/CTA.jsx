import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function CTA() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="section-container page-section">
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
    </section>
  )
}
