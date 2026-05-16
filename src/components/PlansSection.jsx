import { Bot, Check, LayoutDashboard, MonitorSmartphone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { SectionIntro } from './SectionIntro'

const icons = [MonitorSmartphone, Bot, LayoutDashboard]

export function PlansSection() {
  const { t } = useLanguage()

  return (
    <section id="planes" className="section-container page-section">
      <SectionIntro eyebrow={t.plans.eyebrow} title={t.plans.title} text={t.plans.note} />
      <div className="plans-grid">
        {t.plans.items.map((plan, index) => {
          const Icon = icons[index]
          return (
            <article className={`plan-card ${index === 1 ? 'is-featured' : ''}`} key={plan.name}>
              <div className="plan-icon">
                <Icon size={24} />
              </div>
              <span>{plan.name}</span>
              <h3>{plan.badge}</h3>
              <p>{plan.description}</p>
              <ul>
                {plan.includes.map(item => (
                  <li key={item}>
                    <Check size={17} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/5493517868252" target="_blank" rel="noreferrer">
                {t.plans.cta}
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
