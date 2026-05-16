import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { SectionIntro } from './SectionIntro'

export function WorkProcess() {
  const { t } = useLanguage()

  return (
    <section id="proceso" className="section-container page-section">
      <SectionIntro eyebrow={t.process.eyebrow} title={t.process.title} />
      <div className="process-grid">
        {t.process.steps.map((step, index) => (
          <article className="process-card" key={step}>
            <span>{index + 1}</span>
            <CheckCircle2 size={22} />
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
