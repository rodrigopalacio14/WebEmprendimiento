import { Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function PlanComparison({ versions }) {
  const { t } = useLanguage()

  return (
    <div className="version-grid">
      {versions.map(version => (
        <article className="version-card" key={version.title}>
          <h3>{version.title}</h3>
          <p>{t.demoPage.featuresTitle}</p>
          <ul>
            {version.features.map(feature => (
              <li key={feature}>
                <Check size={17} />
                {feature}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
