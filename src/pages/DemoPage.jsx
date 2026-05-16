import { ArrowLeft, Bot, Check, LayoutDashboard, MessageCircle, Send } from 'lucide-react'
import { Footer } from '../components/Footer'
import { PlanComparison } from '../components/PlanComparison'
import { useLanguage } from '../context/LanguageContext'

export function DemoPage({ route, onNavigate }) {
  const { t } = useLanguage()
  const details = t.demoDetails[route.key]
  const Icon = route.icon

  const go = href => event => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <section className="demo-page" style={{ '--demo-color': route.color, '--demo-accent': route.accent }}>
        <div className="section-container">
          <nav className="demo-nav">
            <a href="/" onClick={go('/')} className="demo-brand">
              <ArrowLeft size={18} />
              {t.nav.backHome}
            </a>
            <div>
              <a href={`${route.path}#versiones`} onClick={go(`${route.path}#versiones`)}>
                {t.demoPage.versionsTitle}
              </a>
              <a href={`${route.path}#contacto`} onClick={go(`${route.path}#contacto`)}>
                {t.nav.contact}
              </a>
            </div>
          </nav>

          <div className="demo-hero">
            <div>
              <p className="eyebrow">{details.title}</p>
              <h1>{details.hero}</h1>
              <p>{details.problem}</p>
              <a className="demo-whatsapp" href="https://wa.me/5493517868252" target="_blank" rel="noreferrer">
                {t.demoPage.contactButton}
                <MessageCircle size={18} />
              </a>
            </div>
            <div className="demo-visual">
              <img src={route.image} alt={details.title} />
              <div>
                <Icon size={22} />
                <strong>{t.demoPage.mockupLabel}</strong>
              </div>
            </div>
          </div>

          <div className="demo-problem">
            <p className="eyebrow">{t.demoPage.problemLabel}</p>
            <h2>{details.problem}</h2>
          </div>

          <div className="demo-mockup">
            {details.mockup.map((item, index) => {
              const icons = [MessageCircle, Bot, LayoutDashboard]
              const MockIcon = icons[index]
              return (
                <article key={item}>
                  <MockIcon size={22} />
                  <span>{item}</span>
                </article>
              )
            })}
          </div>

          <section id="versiones" className="demo-versions">
            <div className="section-intro">
              <p className="eyebrow">{t.demoPage.versionsTitle}</p>
              <h2>{details.hero}</h2>
            </div>
            <PlanComparison versions={details.versions} />
          </section>

          <section id="contacto" className="demo-contact-panel">
            <div>
              <h2>{t.cta.title}</h2>
              <p>{t.cta.text}</p>
            </div>
            <a href="https://wa.me/5493517868252" target="_blank" rel="noreferrer">
              {t.cta.button}
              <Send size={18} />
            </a>
          </section>
        </div>
      </section>
      <Footer />
    </>
  )
}
