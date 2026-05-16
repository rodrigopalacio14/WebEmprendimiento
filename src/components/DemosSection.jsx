import { demoRoutes } from '../data/siteContent'
import { useLanguage } from '../context/LanguageContext'
import { DemoCard } from './DemoCard'
import { SectionIntro } from './SectionIntro'

export function DemosSection({ onNavigate }) {
  const { t } = useLanguage()

  return (
    <section id="demos" className="section-container page-section">
      <SectionIntro eyebrow={t.demos.eyebrow} title={t.demos.title} text={t.demos.text} />
      <div className="demo-cards">
        {demoRoutes.map(route => (
          <DemoCard key={route.key} route={route} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  )
}
