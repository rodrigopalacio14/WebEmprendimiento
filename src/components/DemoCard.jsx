import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function DemoCard({ route, onNavigate }) {
  const { t } = useLanguage()
  const Icon = route.icon
  const card = t.demos.cards[route.key]

  const go = event => {
    event.preventDefault()
    onNavigate(route.path)
  }

  return (
    <a className="demo-card" href={route.path} onClick={go} style={{ '--demo-color': route.color }}>
      <img src={route.image} alt={card.title} />
      <div>
        <Icon size={24} />
        <h3>{card.title}</h3>
        <p>{card.text}</p>
        <span>
          {t.demos.button}
          <ArrowRight size={16} />
        </span>
      </div>
    </a>
  )
}
