import { House, Shirt, Sparkles } from 'lucide-react'

export const services = [
  {
    title: 'Sitio web profesional',
    price: 'Desde $450.000',
    text: 'Home comercial, secciones por servicio, galeria, mapa, WhatsApp y diseno responsive para celular, tablet y desktop.',
    items: ['Identidad visual aplicada', 'Textos comerciales iniciales', 'SEO tecnico basico', 'Publicacion lista para compartir']
  },
  {
    title: 'Catalogo o reservas',
    price: 'Desde $780.000',
    text: 'Modulo de productos, propiedades o turnos, con fichas detalladas, filtros simples, llamados a la accion y mensajes directos.',
    items: ['Carga inicial de contenido', 'Precios en pesos argentinos', 'Botones de consulta por item', 'Panel visual preparado para escalar']
  },
  {
    title: 'Panel y automatizaciones',
    price: 'Desde $1.250.000',
    text: 'Base para administrar consultas, agenda, clientes y seguimiento comercial con integraciones a medida segun el negocio.',
    items: ['Panel administrativo', 'Estados y prioridades', 'Recordatorios o chatbot', 'Metricas comerciales']
  }
]

export const demos = {
  inmobiliaria: {
    label: 'Inmobiliaria',
    path: '/inmobiliaria',
    icon: House,
    theme: '#0f766e',
    accent: '#2563eb',
    code: '1-A',
    hero: 'Propiedades claras, visitas agendadas y consultas ordenadas',
    intro:
      'Demo para inmobiliarias con propiedades destacadas, filtros comerciales, ficha de detalle y llamados directos para pedir visita o tasacion.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80',
    nav: [
      ['propiedades', 'Propiedades'],
      ['servicios', 'Servicios'],
      ['contacto', 'Consulta']
    ],
    metrics: ['18 propiedades activas', '12 visitas esta semana', '5 tasaciones pendientes'],
    features: [
      'Listado de venta y alquiler con precio, barrio, ambientes y metros.',
      'Ficha por propiedad con galeria, descripcion y boton de visita.',
      'Formulario de tasacion para captar propietarios.',
      'Organizacion de leads por interes: compra, alquiler o inversion.'
    ],
    productsTitle: 'Propiedades destacadas',
    products: [
      {
        title: 'Casa moderna en Funes',
        price: '$178.000.000',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        meta: ['3 dormitorios', '2 banos', '240 m2'],
        text: 'Lote amplio, galeria con parrilla, cocina integrada y cochera doble.'
      },
      {
        title: 'Departamento Nueva Cordoba',
        price: '$92.000.000',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
        meta: ['2 ambientes', '1 bano', '54 m2'],
        text: 'Unidad luminosa cerca de facultades, balcon al frente y amenities.'
      },
      {
        title: 'Local comercial centrico',
        price: '$650.000 / mes',
        image:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
        meta: ['120 m2', 'Vidriera', 'Deposito'],
        text: 'Espacio preparado para showroom, oficina comercial o atencion al publico.'
      }
    ],
    cta: 'Solicitar visita'
  },
  estetica: {
    label: 'Estetica',
    path: '/estetica',
    icon: Sparkles,
    theme: '#c43b70',
    accent: '#8b5cf6',
    code: '1-B',
    hero: 'Tratamientos visibles, agenda simple y reservas por WhatsApp',
    intro:
      'Demo para centros de estetica con servicios, precios, profesionales, turnos disponibles y una experiencia visual delicada.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80',
    nav: [
      ['tratamientos', 'Tratamientos'],
      ['servicios', 'Servicios'],
      ['contacto', 'Reservas']
    ],
    metrics: ['24 turnos disponibles', '+34% consultas', '8 tratamientos publicados'],
    features: [
      'Catalogo de tratamientos con duracion, precio y beneficios.',
      'Agenda de turnos con profesional, horario y confirmacion.',
      'Promociones visibles para campanas de Instagram.',
      'Consultas rapidas para dudas frecuentes antes de reservar.'
    ],
    productsTitle: 'Tratamientos destacados',
    products: [
      {
        title: 'Limpieza facial profunda',
        price: '$32.000',
        image:
          'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80',
        meta: ['75 min', 'Hidratacion', 'Piel luminosa'],
        text: 'Higiene, extraccion, mascara hidratante y rutina recomendada.'
      },
      {
        title: 'Depilacion laser piernas',
        price: '$45.000',
        image:
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
        meta: ['45 min', 'Sesion mensual', 'Apto consulta'],
        text: 'Ficha de preconsulta, recomendaciones previas y reserva de proxima sesion.'
      },
      {
        title: 'Masaje descontracturante',
        price: '$28.000',
        image:
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
        meta: ['50 min', 'Relajacion', 'Turnos online'],
        text: 'Presentacion del servicio, beneficios y horarios disponibles.'
      }
    ],
    cta: 'Reservar turno'
  },
  ropa: {
    label: 'Comercio de ropa',
    path: '/ropa',
    icon: Shirt,
    theme: '#1f2937',
    accent: '#c47a18',
    code: '1-C',
    hero: 'Catalogo de moda con productos, talles y consultas directas',
    intro:
      'Demo para locales de ropa con colecciones, precios en pesos, talles, destacados y botones de compra o consulta por WhatsApp.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80',
    nav: [
      ['productos', 'Productos'],
      ['servicios', 'Servicios'],
      ['contacto', 'Pedidos']
    ],
    metrics: ['36 productos publicados', '12 talles activos', 'Envios a todo el pais'],
    features: [
      'Catalogo por categoria, talle, color y precio.',
      'Ficha de producto con fotos, stock y boton de pedido.',
      'Seccion de ofertas para temporadas o liquidaciones.',
      'Consulta rapida por WhatsApp con producto precargado.'
    ],
    productsTitle: 'Productos destacados',
    products: [
      {
        title: 'Campera denim oversize',
        price: '$68.000',
        image:
          'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
        meta: ['Talles S al XL', 'Azul vintage', 'Stock 14'],
        text: 'Ficha con medidas, guia de talles y fotos de detalle.'
      },
      {
        title: 'Vestido lino natural',
        price: '$52.500',
        image:
          'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=80',
        meta: ['Talles 1 al 4', 'Beige y negro', 'Stock 9'],
        text: 'Producto ideal para campanas de temporada y combos.'
      },
      {
        title: 'Zapatillas urbanas',
        price: '$74.900',
        image:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
        meta: ['35 al 44', '3 colores', 'Stock 21'],
        text: 'Consulta de talle, medios de pago y retiro por sucursal.'
      }
    ],
    cta: 'Consultar producto'
  }
}

export const demoList = Object.entries(demos)
