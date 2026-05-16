import { ArrowRight, Check, Send, UsersRound } from 'lucide-react'

export function DemoPage({ demo }) {
  const Icon = demo.icon

  return (
    <section
      className="demo-section demo-page"
      style={{ '--demo-color': demo.theme, '--demo-accent': demo.accent }}
    >
      <div className="section-container">
        <nav className="demo-nav" aria-label={`Navegacion demo ${demo.label}`}>
          <a href={demo.path} className="demo-brand">
            <Icon size={19} />
            Demo {demo.label}
          </a>
          <div>
            {demo.nav.map(([href, label]) => (
              <a key={href} href={`${demo.path}#${href}`}>
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="demo-hero">
          <div>
            <p className="eyebrow">{demo.code} {demo.label}</p>
            <h2>{demo.hero}</h2>
            <p>{demo.intro}</p>
            <div className="metric-row">
              {demo.metrics.map(metric => (
                <span key={metric}>
                  <Check size={16} />
                  {metric}
                </span>
              ))}
            </div>
          </div>
          <img src={demo.image} alt={`Portada de la demo ${demo.label}`} />
        </div>

        <div id={demo.nav[0][0]} className="demo-products">
          <div className="demo-heading">
            <h3>{demo.productsTitle}</h3>
            <a href={`${demo.path}#${demo.nav[2][0]}`}>
              {demo.cta}
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="product-grid">
            {demo.products.map(product => (
              <article className="market-card" key={product.title}>
                <img src={product.image} alt={product.title} />
                <div>
                  <strong>{product.price}</strong>
                  <h4>{product.title}</h4>
                  <p>{product.text}</p>
                  <div>
                    {product.meta.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div id={demo.nav[1][0]} className="included-panel">
          <div>
            <p className="eyebrow">Incluye para este rubro</p>
            <h3>Componentes pensados para operar y vender</h3>
          </div>
          <div className="included-list">
            {demo.features.map(feature => (
              <p key={feature}>
                <Check size={18} />
                {feature}
              </p>
            ))}
          </div>
        </div>

        <div id={demo.nav[2][0]} className="demo-contact">
          <div>
            <h3>Consulta lista para convertir</h3>
            <p>
              El boton puede abrir WhatsApp con mensaje precargado, formulario interno o
              una agenda de turnos segun el paquete elegido.
            </p>
          </div>
          <div className="contact-mock">
            <span>
              <UsersRound size={17} />
              Nuevo interesado
            </span>
            <strong>{demo.cta}</strong>
            <button type="button">
              Enviar consulta
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
