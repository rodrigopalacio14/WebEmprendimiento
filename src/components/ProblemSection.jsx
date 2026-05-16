import { AlertCircle, Clock3, MessageCircle, UserX } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const icons = [MessageCircle, Clock3, AlertCircle, UserX]

export function ProblemSection() {
  const { t } = useLanguage()

  return (
    <section className="section-container page-section problem-section">
      <div className="problem-copy">
        <p className="eyebrow">{t.problem.eyebrow}</p>
        <h2>{t.problem.title}</h2>
        <p>{t.problem.text}</p>
      </div>
      <div className="problem-grid">
        {t.problem.items.map((item, index) => {
          const Icon = icons[index]
          return (
            <article className="problem-card" key={item}>
              <Icon size={24} />
              <h3>{item}</h3>
            </article>
          )
        })}
      </div>
      <div className="problem-close">{t.problem.close}</div>
    </section>
  )
}
