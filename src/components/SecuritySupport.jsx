import { RefreshCw, Server, ShieldCheck, Wrench } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { SectionIntro } from './SectionIntro'

const icons = [Server, RefreshCw, Wrench, ShieldCheck, RefreshCw, Wrench]

export function SecuritySupport() {
  const { t } = useLanguage()

  return (
    <section className="support-band">
      <div className="section-container page-section">
        <SectionIntro eyebrow={t.support.eyebrow} title={t.support.title} />
        <div className="support-grid">
          {t.support.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <article className="support-card" key={item}>
                <Icon size={22} />
                <h3>{item}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
