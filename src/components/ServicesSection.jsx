import { Bot, LayoutDashboard, MonitorSmartphone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { SectionIntro } from './SectionIntro'

const icons = [MonitorSmartphone, Bot, LayoutDashboard]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="section-container page-section">
      <SectionIntro eyebrow={t.services.eyebrow} title={t.services.title} text={t.services.text} />
      <div className="service-grid">
        {t.services.items.map((item, index) => {
          const Icon = icons[index]
          return (
            <article className="service-card" key={item.title}>
              <Icon size={26} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
