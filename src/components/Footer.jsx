import { PanelLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="section-container footer-inner">
        <div>
          <span className="brand-mark">
            <PanelLeft size={19} />
          </span>
          <strong>WebFlex Studio</strong>
        </div>
        <p>{t.footer.text}</p>
        <small>© 2026 WebFlex Studio. {t.footer.rights}</small>
      </div>
    </footer>
  )
}
