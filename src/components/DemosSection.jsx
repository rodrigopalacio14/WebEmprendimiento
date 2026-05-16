import { demoRoutes } from '../data/siteContent'
import { backgrounds } from '../data/backgrounds'
import { useLanguage } from '../context/LanguageContext'
import { BackgroundSection } from './BackgroundSection'
import { DemoCard } from './DemoCard'
import { SectionIntro } from './SectionIntro'

export function DemosSection({ onNavigate }) {
  const { t } = useLanguage()

  return (
    <BackgroundSection
      id="demos"
      backgroundImage={backgrounds.demos}
      overlay="linear-gradient(135deg, rgba(248,250,252,0.88), rgba(239,246,255,0.76), rgba(15,23,42,0.26))"
      className="demos-background-section"
    >
      <div className="section-container page-section">
        <SectionIntro eyebrow={t.demos.eyebrow} title={t.demos.title} text={t.demos.text} />
        <div className="demo-cards">
          {demoRoutes.map(route => (
            <DemoCard key={route.key} route={route} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </BackgroundSection>
  )
}
