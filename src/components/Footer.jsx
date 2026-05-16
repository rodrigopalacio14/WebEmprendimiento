import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="section-container footer-inner">
        <div>
          <span className="brand-mark">
            <img src="/assets/nispero-tech-logo.png" alt="" />
          </span>
          <strong>Nispero Tech</strong>
        </div>
        <p>{t.footer.text}</p>
        <small>© 2026 Nispero Tech. {t.footer.rights}</small>
      </div>
    </footer>
  )
}
