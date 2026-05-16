import { ArrowRight, Check, ChevronRight, MessageCircle } from 'lucide-react'
import { SectionIntro } from '../components/Layout'
import { demoList, services } from '../data/siteContent'

export function HomePage({ onNavigate }) {
  const go = href => event => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <section id="inicio" className="home-hero">
        <div className="section-container home-grid">
          <div>
            <p className="eyebrow">WebFlex Studio</p>
            <h1>Paginas web para negocios que necesitan vender mejor online</h1>
            <p className="hero-copy">
              Desarrollo sitios claros, rapidos y pensados para convertir visitas en consultas:
              inmobiliarias, esteticas, comercios y servicios profesionales con contenido,
              imagenes, precios y botones de accion listos para usar.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="/#servicios" onClick={go('/#servicios')}>
                Ver servicios
                <ChevronRight size={18} />
              </a>
              <a className="secondary-button" href="/#demos" onClick={go('/#demos')}>
                Ver demos
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="home-showcase">
            {demoList.map(([key, demo]) => {
              const Icon = demo.icon
              return (
                <a key={key} href={demo.path} onClick={go(demo.path)} style={{ '--demo-color': demo.theme }}>
                  <img src={demo.image} alt={`Demo ${demo.label}`} />
                  <span>
                    <Icon size={18} />
                    {demo.label}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section id="servicios" className="section-container page-section">
        <SectionIntro
          eyebrow="Que incluye cada servicio"
          title="Una propuesta ordenada para salir a vender sin improvisar"
          text="Cada paquete puede adaptarse al rubro, pero mantiene una base clara: presencia profesional, contenido comercial y caminos simples para que el cliente consulte."
        />
        <div className="service-grid">
          {services.map(service => (
            <article className="service-card" key={service.title}>
              <div>
                <span>{service.price}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <ul>
                {service.items.map(item => (
                  <li key={item}>
                    <Check size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="demos" className="section-container page-section">
        <SectionIntro
          eyebrow="Demos por rubro"
          title="Tres paginas demo separadas"
          text="Cada boton redirige a una pagina independiente de demo, con su propia navegacion interna para recorrer productos, servicios y contacto."
        />
        <div className="demo-cards">
          {demoList.map(([key, demo]) => {
            const Icon = demo.icon
            return (
              <a className="demo-card" href={demo.path} onClick={go(demo.path)} key={key} style={{ '--demo-color': demo.theme }}>
                <img src={demo.image} alt={`Vista previa de ${demo.label}`} />
                <div>
                  <Icon size={22} />
                  <h3>{demo.label}</h3>
                  <p>{demo.intro}</p>
                  <span>
                    Abrir pagina demo
                    <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      <section id="contacto" className="section-container page-section">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Cotizacion</p>
            <h2>Contame el rubro, el objetivo y el contenido que tenes disponible.</h2>
            <p>
              Con eso se define si conviene empezar por una web profesional, un catalogo
              con reservas o una experiencia con panel y automatizaciones.
            </p>
          </div>
          <a className="contact-button" href="https://wa.me/5493517868252" target="_blank" rel="noreferrer">
            Consultar por WhatsApp
            <MessageCircle size={18} />
          </a>
        </div>
      </section>
    </>
  )
}
