export const languages = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'da', label: 'Dansk', flag: '🇩🇰' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' }
]

const sharedPlans = {
  es: [
    {
      name: 'Plan Básico',
      badge: 'Web Profesional',
      price: 'Desde 500 EUR',
      description: 'Para negocios que necesitan presencia online clara, moderna y confiable.',
      includes: [
        'Sitio web personalizado',
        'Diseño responsive',
        'Botón de WhatsApp integrado',
        'Formulario de contacto',
        'Google Maps y redes sociales',
        'Catálogo básico de productos o servicios',
        'SEO básico'
      ]
    },
    {
      name: 'Plan Completo',
      badge: 'Web + Chatbot',
      price: 'Desde 900 EUR',
      description: 'Incluye todo lo del Plan Básico y suma atención automática para responder consultas repetidas.',
      includes: [
        'Todo lo del Plan Base',
        'Chatbot con menú de opciones',
        'Respuestas frecuentes',
        'Derivación a WhatsApp',
        'Captura de datos de potenciales clientes',
        'Atención automática 24/7',
        'Consulta de servicios, precios o disponibilidad básica'
      ]
    },
    {
      name: 'Plan Premium',
      badge: 'Web + Gestión',
      price: 'Desde 1.800 EUR',
      description: 'Incluye todo lo del Plan Completo y suma gestión de reservas, pedidos o consultas desde un panel simple.',
      includes: [
        'Todo lo del Plan Intermedio',
        'Panel de gestión',
        'Gestión de turnos, pedidos o consultas',
        'Estados de solicitudes',
        'Base de clientes',
        'Notificaciones por email o WhatsApp',
        'Reportes básicos'
      ]
    }
  ],
  en: [
    {
      name: 'Base Plan',
      badge: 'Professional Website',
      price: 'From 500 EUR',
      description: 'For businesses that need a clear, modern and trustworthy online presence.',
      includes: [
        'Custom website',
        'Responsive design',
        'Integrated WhatsApp button',
        'Contact form',
        'Google Maps and social links',
        'Basic product or service catalog',
        'Basic SEO'
      ]
    },
    {
      name: 'Complete Plan',
      badge: 'Website + Chatbot',
      price: 'From 900 EUR',
      description: 'Includes everything in the Base Plan and adds automatic attention for repeated inquiries.',
      includes: [
        'Everything in the Base Plan',
        'Chatbot with option menu',
        'Frequently asked answers',
        'WhatsApp handoff',
        'Potential customer data capture',
        'Automatic 24/7 attention',
        'Service, price or basic availability inquiries'
      ]
    },
    {
      name: 'Premium Plan',
      badge: 'Website + Management',
      price: 'From 1,800 EUR',
      description: 'Includes everything in the Complete Plan and adds booking, order or inquiry management from a simple panel.',
      includes: [
        'Everything in the Intermediate Plan',
        'Management panel',
        'Booking, order or inquiry management',
        'Request statuses',
        'Customer database',
        'Email or WhatsApp notifications',
        'Basic reports'
      ]
    }
  ],
  da: [
    {
      name: 'Basepakke',
      badge: 'Professionel hjemmeside',
      price: 'Fra 500 EUR',
      description: 'Til virksomheder, der har brug for en klar, moderne og troværdig online tilstedeværelse.',
      includes: [
        'Tilpasset hjemmeside',
        'Responsivt design',
        'Integreret WhatsApp-knap',
        'Kontaktformular',
        'Google Maps og sociale medier',
        'Basis katalog med produkter eller services',
        'Basis SEO'
      ]
    },
    {
      name: 'Komplet pakke',
      badge: 'Hjemmeside + chatbot',
      price: 'Fra 900 EUR',
      description: 'Indeholder alt fra Basepakken og tilføjer automatisk svar på gentagne henvendelser.',
      includes: [
        'Alt fra Basepakken',
        'Chatbot med valgmenu',
        'Svar på ofte stillede spørgsmål',
        'Videresendelse til WhatsApp',
        'Indsamling af data fra potentielle kunder',
        'Automatisk betjening 24/7',
        'Forespørgsler om services, priser eller basis tilgængelighed'
      ]
    },
    {
      name: 'Premiumpakke',
      badge: 'Hjemmeside + styring',
      price: 'Fra 1.800 EUR',
      description: 'Indeholder alt fra den Komplette pakke og tilføjer styring af bookinger, ordrer eller henvendelser fra et enkelt panel.',
      includes: [
        'Alt fra den Komplette pakke',
        'Administrationspanel',
        'Styring af bookinger, ordrer eller henvendelser',
        'Status på forespørgsler',
        'Kundedatabase',
        'Notifikationer via email eller WhatsApp',
        'Basis rapporter'
      ]
    }
  ],
  it: [
    {
      name: 'Piano Base',
      badge: 'Sito Professionale',
      price: 'Da 500 EUR',
      description: 'Per attività che hanno bisogno di una presenza online chiara, moderna e affidabile.',
      includes: [
        'Sito web personalizzato',
        'Design responsive',
        'Pulsante WhatsApp integrato',
        'Modulo di contatto',
        'Google Maps e social network',
        'Catalogo base di prodotti o servizi',
        'SEO base'
      ]
    },
    {
      name: 'Piano Completo',
      badge: 'Sito + Chatbot',
      price: 'Da 900 EUR',
      description: 'Include tutto il Piano Base e aggiunge assistenza automatica per richieste ripetute.',
      includes: [
        'Tutto il Piano Base',
        'Chatbot con menu di opzioni',
        'Risposte frequenti',
        'Passaggio a WhatsApp',
        'Raccolta dati di potenziali clienti',
        'Assistenza automatica 24/7',
        'Consultazione di servizi, prezzi o disponibilità base'
      ]
    },
    {
      name: 'Piano Premium',
      badge: 'Sito + Gestione',
      price: 'Da 1.800 EUR',
      description: 'Include tutto il Piano Completo e aggiunge gestione di prenotazioni, ordini o richieste da un pannello semplice.',
      includes: [
        'Tutto il Piano Completo',
        'Pannello di gestione',
        'Gestione di prenotazioni, ordini o richieste',
        'Stati delle richieste',
        'Database clienti',
        'Notifiche via email o WhatsApp',
        'Report base'
      ]
    }
  ]
}

export const translations = {
  es: {
    meta: { title: 'WebFlex Studio | Servicios digitales para pequeños negocios' },
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      demos: 'Demos',
      plans: 'Planes',
      process: 'Cómo trabajamos',
      contact: 'Contacto',
      proposal: 'Solicitar propuesta',
      backHome: 'Volver al inicio'
    },
    hero: {
      eyebrow: 'Estudio digital para pequeños negocios',
      title: 'Creamos sitios web que ayudan a tu negocio a vender, responder consultas y gestionar reservas',
      subtitle:
        'Diseñamos sitios web profesionales para comercios, inmobiliarias, estéticas y servicios. Integramos WhatsApp, chatbots automáticos y sistemas simples de turnos, pedidos o consultas.',
      primaryButton: 'Ver planes',
      secondaryButton: 'Ver demos',
      mockupTitle: 'Web + WhatsApp + gestión',
      mockupMessage: 'Hola, quiero consultar disponibilidad',
      mockupBot: 'Elegí una opción: precios, turnos o hablar con una persona.',
      mockupPanel: 'Panel: 12 consultas nuevas'
    },
    problem: {
      eyebrow: 'Problema',
      title: 'Tu negocio puede perder clientes por no responder a tiempo',
      text:
        'Muchos negocios todavía gestionan consultas, reservas y pedidos de forma manual. Eso genera demoras, mensajes repetidos y oportunidades perdidas.',
      close: 'Convertimos esos procesos en una experiencia digital simple, clara y profesional.',
      items: [
        'Consultas repetidas por WhatsApp',
        'Reservas o pedidos desordenados',
        'Falta de presencia profesional online',
        'Clientes que abandonan por falta de respuesta'
      ]
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Soluciones prácticas para vender, responder y organizar',
      text:
        'No armamos una web decorativa. Construimos una herramienta simple para recibir más consultas, ordenar mensajes y llevar pedidos o reservas sin perder tiempo.',
      items: [
        { title: 'Web profesional', text: 'Sitio claro, responsive y preparado para explicar servicios, mostrar productos y enviar clientes a WhatsApp.' },
        { title: 'Chatbot automático', text: 'Menú de opciones para responder preguntas frecuentes, filtrar consultas y derivar a una persona cuando hace falta.' },
        { title: 'Gestión simple', text: 'Panel para turnos, pedidos o consultas con estados, datos del cliente y seguimiento básico.' }
      ]
    },
    plans: {
      eyebrow: 'Planes',
      title: 'Elegí el nivel de solución que necesita tu negocio',
      note: 'Los planes se arman por alcance: básico, completo y premium. Para definir el precio final, pedí una cotización según tu rubro, funcionalidades e integraciones necesarias.',
      cta: 'Pedir una cotización',
      items: sharedPlans.es
    },
    demos: {
      eyebrow: 'Demos por rubro',
      title: 'Explorá nuestras demos por rubro',
      text: 'Cada demo muestra cómo se adapta la solución a problemas concretos: pedidos, visitas, turnos o consultas.',
      button: 'Ver demo',
      cards: {
        comercio: { title: 'Comercios', text: 'Catálogo, WhatsApp, chatbot de consultas y gestión de pedidos.' },
        inmobiliaria: { title: 'Inmobiliarias', text: 'Propiedades, filtros, visitas, tasaciones y seguimiento de oportunidades.' },
        estetica: { title: 'Estéticas', text: 'Tratamientos, precios, horarios, WhatsApp y gestión de turnos.' },
        clinica: { title: 'Clínicas / Profesionales', text: 'Servicios, horarios, consultas frecuentes y turnos sin datos médicos sensibles.' }
      }
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'Un proceso claro para salir rápido y con menos vueltas',
      steps: [
        'Relevamos tu negocio',
        'Definimos la solución',
        'Diseñamos la web y automatizaciones',
        'Probamos y ajustamos',
        'Publicamos y damos soporte'
      ]
    },
    support: {
      eyebrow: 'Seguridad y soporte',
      title: 'Tu web queda cuidada después de publicarla',
      items: ['Hosting seguro', 'Backups', 'Mantenimiento mensual', 'Protección básica contra bots/spam', 'Actualizaciones', 'Soporte técnico']
    },
    cta: {
      title: '¿Querés digitalizar tu negocio sin complicarte?',
      text:
        'Creamos una solución adaptada a tu rubro, lista para usar y pensada para ayudarte a recibir más consultas, reservas o pedidos.',
      button: 'Solicitar propuesta por WhatsApp'
    },
    footer: {
      text: 'Soluciones digitales concretas para pequeños negocios: web profesional, WhatsApp, chatbot y gestión simple.',
      rights: 'Todos los derechos reservados.'
    },
    demoPage: {
      problemLabel: 'Problema del rubro',
      versionsTitle: 'Tres versiones para este rubro',
      featuresTitle: 'Funcionalidades',
      contactButton: 'Solicitar propuesta por WhatsApp',
      mockupLabel: 'Mockup funcional'
    },
    demoDetails: {
      comercio: {
        title: 'Demo para comercios',
        hero: 'Vendé productos con catálogo, WhatsApp y gestión de pedidos',
        problem: 'Muchos comercios responden talles, stock, precios y envíos a mano. Eso consume tiempo y hace que algunos pedidos se pierdan.',
        mockup: ['Catálogo con productos destacados', 'Chatbot: precios, stock, envíos', 'Panel con estados de pedidos'],
        versions: [
          { title: 'Versión Base', features: ['Web con catálogo', 'WhatsApp', 'Productos destacados', 'Contacto'] },
          { title: 'Versión Intermedia', features: ['Todo lo anterior', 'Chatbot con opciones', 'Consultas frecuentes', 'Derivación a WhatsApp'] },
          { title: 'Versión Premium', features: ['Todo lo anterior', 'Gestión de pedidos', 'Panel administrativo', 'Estados de pedidos', 'Base de clientes'] }
        ]
      },
      inmobiliaria: {
        title: 'Demo para inmobiliarias',
        hero: 'Publicá propiedades y convertí consultas en visitas organizadas',
        problem: 'Las consultas por compra, alquiler y tasación llegan mezcladas. Sin filtros ni seguimiento, se pierden oportunidades.',
        mockup: ['Listado de propiedades con filtros', 'Chatbot: compra, alquiler, tasación', 'Panel de visitas y oportunidades'],
        versions: [
          { title: 'Versión Base', features: ['Listado de propiedades', 'Filtros básicos', 'WhatsApp', 'Contacto'] },
          { title: 'Versión Intermedia', features: ['Chatbot inmobiliario', 'Consultas por compra/alquiler', 'Tasación de propiedad', 'Derivación a asesor'] },
          { title: 'Versión Premium', features: ['Panel de consultas', 'Agenda de visitas', 'Estados de oportunidad', 'Base de clientes'] }
        ]
      },
      estetica: {
        title: 'Demo para estéticas',
        hero: 'Mostrá tratamientos, respondé precios y organizá turnos',
        problem: 'Los centros de estética reciben preguntas repetidas sobre precios, promociones y horarios. La agenda se vuelve difícil de ordenar.',
        mockup: ['Tratamientos con precio y duración', 'Chatbot: precios, promos, horarios', 'Calendario de turnos y recordatorios'],
        versions: [
          { title: 'Versión Base', features: ['Tratamientos', 'Servicios', 'WhatsApp', 'Contacto'] },
          { title: 'Versión Intermedia', features: ['Chatbot con preguntas frecuentes', 'Precios/promociones', 'Horarios', 'Derivación a WhatsApp'] },
          { title: 'Versión Premium', features: ['Gestión de turnos', 'Calendario', 'Recordatorios', 'Historial de clientes'] }
        ]
      },
      clinica: {
        title: 'Demo para clínicas / profesionales',
        hero: 'Presentá servicios y ordená consultas sin manejar datos médicos sensibles',
        problem: 'Profesionales y clínicas pequeñas necesitan explicar servicios, horarios y turnos sin depender de respuestas manuales todo el día.',
        mockup: ['Página profesional de servicios', 'Chatbot de horarios y consultas', 'Agenda sin información médica sensible'],
        versions: [
          { title: 'Versión Base', features: ['Presentación profesional', 'Servicios', 'WhatsApp', 'Contacto'] },
          { title: 'Versión Intermedia', features: ['Chatbot de consultas frecuentes', 'Horarios', 'Información de servicios', 'Derivación'] },
          { title: 'Versión Premium', features: ['Turnos online', 'Agenda', 'Recordatorios', 'Panel de pacientes/clientes sin información médica sensible'] }
        ]
      }
    }
  }
}

translations.en = {
  meta: { title: 'WebFlex Studio | Digital services for small businesses' },
  nav: { home: 'Home', services: 'Services', demos: 'Demos', plans: 'Plans', process: 'How we work', contact: 'Contact', proposal: 'Request proposal', backHome: 'Back home' },
  hero: {
    eyebrow: 'Digital studio for small businesses',
    title: 'We create websites that help your business sell, answer inquiries and manage bookings',
    subtitle: 'We design professional websites for shops, real estate businesses, beauty centers and service providers. We integrate WhatsApp, automated chatbots and simple booking, order or inquiry management systems.',
    primaryButton: 'View plans',
    secondaryButton: 'View demos',
    mockupTitle: 'Website + WhatsApp + management',
    mockupMessage: 'Hi, I want to check availability',
    mockupBot: 'Choose an option: prices, bookings or talk to a person.',
    mockupPanel: 'Panel: 12 new inquiries'
  },
  problem: {
    eyebrow: 'Problem',
    title: 'Your business can lose customers by not answering in time',
    text: 'Many businesses still manage inquiries, bookings and orders manually. That creates delays, repeated messages and missed opportunities.',
    close: 'We turn those processes into a simple, clear and professional digital experience.',
    items: ['Repeated WhatsApp inquiries', 'Disorganized bookings or orders', 'No professional online presence', 'Customers leaving due to slow replies']
  },
  services: {
    eyebrow: 'Services',
    title: 'Practical solutions to sell, answer and organize',
    text: 'We do not build decorative websites. We build a simple tool to receive more inquiries, organize messages and manage orders or bookings without wasting time.',
    items: [
      { title: 'Professional website', text: 'A clear, responsive site to explain services, show products and send customers to WhatsApp.' },
      { title: 'Automated chatbot', text: 'Option menu to answer frequent questions, filter inquiries and hand off to a person when needed.' },
      { title: 'Simple management', text: 'Panel for bookings, orders or inquiries with statuses, customer data and basic follow-up.' }
    ]
  },
  plans: { eyebrow: 'Plans', title: 'Choose the solution level your business needs', note: 'Plans are structured by scope: base, complete and premium. Request a quote to define the final price according to your sector, features and integrations.', cta: 'Request a quote', items: sharedPlans.en },
  demos: {
    eyebrow: 'Sector demos',
    title: 'Explore our demos by sector',
    text: 'Each demo shows how the solution adapts to concrete problems: orders, visits, bookings or inquiries.',
    button: 'View demo',
    cards: {
      comercio: { title: 'Shops', text: 'Catalog, WhatsApp, inquiry chatbot and order management.' },
      inmobiliaria: { title: 'Real estate', text: 'Properties, filters, visits, valuations and opportunity follow-up.' },
      estetica: { title: 'Beauty centers', text: 'Treatments, prices, schedules, WhatsApp and booking management.' },
      clinica: { title: 'Clinics / Professionals', text: 'Services, schedules, FAQs and bookings without sensitive medical data.' }
    }
  },
  process: { eyebrow: 'How we work', title: 'A clear process to launch quickly with fewer loops', steps: ['We review your business', 'We define the solution', 'We design the website and automations', 'We test and adjust', 'We publish and support'] },
  support: { eyebrow: 'Security and support', title: 'Your website stays cared for after launch', items: ['Secure hosting', 'Backups', 'Monthly maintenance', 'Basic bot/spam protection', 'Updates', 'Technical support'] },
  cta: { title: 'Want to digitize your business without making it complicated?', text: 'We create a solution adapted to your sector, ready to use and designed to help you receive more inquiries, bookings or orders.', button: 'Request proposal on WhatsApp' },
  footer: { text: 'Concrete digital solutions for small businesses: professional website, WhatsApp, chatbot and simple management.', rights: 'All rights reserved.' },
  demoPage: { problemLabel: 'Sector problem', versionsTitle: 'Three versions for this sector', featuresTitle: 'Features', contactButton: 'Request proposal on WhatsApp', mockupLabel: 'Functional mockup' },
  demoDetails: {
    comercio: { title: 'Shop demo', hero: 'Sell products with catalog, WhatsApp and order management', problem: 'Many shops answer sizes, stock, prices and shipping manually. That takes time and some orders get lost.', mockup: ['Catalog with featured products', 'Chatbot: prices, stock, shipping', 'Panel with order statuses'], versions: [{ title: 'Base Version', features: ['Website with catalog', 'WhatsApp', 'Featured products', 'Contact'] }, { title: 'Intermediate Version', features: ['Everything above', 'Chatbot with options', 'Frequent inquiries', 'WhatsApp handoff'] }, { title: 'Premium Version', features: ['Everything above', 'Order management', 'Admin panel', 'Order statuses', 'Customer database'] }] },
    inmobiliaria: { title: 'Real estate demo', hero: 'Publish properties and turn inquiries into organized visits', problem: 'Purchase, rental and valuation inquiries arrive mixed together. Without filters or follow-up, opportunities are lost.', mockup: ['Property list with filters', 'Chatbot: buy, rent, valuation', 'Visit and opportunity panel'], versions: [{ title: 'Base Version', features: ['Property list', 'Basic filters', 'WhatsApp', 'Contact'] }, { title: 'Intermediate Version', features: ['Real estate chatbot', 'Buy/rent inquiries', 'Property valuation', 'Agent handoff'] }, { title: 'Premium Version', features: ['Inquiry panel', 'Visit schedule', 'Opportunity statuses', 'Customer database'] }] },
    estetica: { title: 'Beauty center demo', hero: 'Show treatments, answer prices and organize bookings', problem: 'Beauty centers receive repeated questions about prices, promotions and schedules. The agenda becomes hard to organize.', mockup: ['Treatments with price and duration', 'Chatbot: prices, promos, schedules', 'Booking calendar and reminders'], versions: [{ title: 'Base Version', features: ['Treatments', 'Services', 'WhatsApp', 'Contact'] }, { title: 'Intermediate Version', features: ['FAQ chatbot', 'Prices/promotions', 'Schedules', 'WhatsApp handoff'] }, { title: 'Premium Version', features: ['Booking management', 'Calendar', 'Reminders', 'Customer history'] }] },
    clinica: { title: 'Clinic / professional demo', hero: 'Present services and organize inquiries without handling sensitive medical data', problem: 'Small clinics and professionals need to explain services, schedules and bookings without relying on manual replies all day.', mockup: ['Professional services page', 'Schedule and FAQ chatbot', 'Agenda without sensitive medical data'], versions: [{ title: 'Base Version', features: ['Professional presentation', 'Services', 'WhatsApp', 'Contact'] }, { title: 'Intermediate Version', features: ['FAQ chatbot', 'Schedules', 'Service information', 'Handoff'] }, { title: 'Premium Version', features: ['Online bookings', 'Agenda', 'Reminders', 'Patient/client panel without sensitive medical data'] }] }
  }
}

translations.da = {
  ...translations.en,
  meta: { title: 'WebFlex Studio | Digitale services til små virksomheder' },
  nav: { home: 'Forside', services: 'Services', demos: 'Demoer', plans: 'Pakker', process: 'Sådan arbejder vi', contact: 'Kontakt', proposal: 'Anmod om tilbud', backHome: 'Til forsiden' },
  hero: {
    eyebrow: 'Digitalt studie for små virksomheder',
    title: 'Vi skaber hjemmesider, der hjælper din virksomhed med at sælge, besvare henvendelser og håndtere bookinger',
    subtitle: 'Vi designer professionelle hjemmesider til butikker, ejendomsmæglere, skønhedsklinikker og servicevirksomheder. Vi integrerer WhatsApp, automatiske chatbots og enkle systemer til bookinger, ordrer eller henvendelser.',
    primaryButton: 'Se pakker',
    secondaryButton: 'Se demoer',
    mockupTitle: 'Hjemmeside + WhatsApp + styring',
    mockupMessage: 'Hej, jeg vil gerne spørge om tilgængelighed',
    mockupBot: 'Vælg en mulighed: priser, bookinger eller tal med en person.',
    mockupPanel: 'Panel: 12 nye henvendelser'
  },
  problem: { eyebrow: 'Problem', title: 'Din virksomhed kan miste kunder ved ikke at svare i tide', text: 'Mange virksomheder håndterer stadig henvendelser, bookinger og ordrer manuelt. Det giver forsinkelser, gentagne beskeder og tabte muligheder.', close: 'Vi gør de processer til en enkel, klar og professionel digital oplevelse.', items: ['Gentagne WhatsApp-spørgsmål', 'Uorganiserede bookinger eller ordrer', 'Manglende professionel online tilstedeværelse', 'Kunder der falder fra på grund af langsomme svar'] },
  services: { eyebrow: 'Services', title: 'Praktiske løsninger til at sælge, svare og organisere', text: 'Vi bygger ikke dekorative hjemmesider. Vi bygger et enkelt værktøj til flere henvendelser, bedre beskeder og styring af ordrer eller bookinger uden spildtid.', items: [{ title: 'Professionel hjemmeside', text: 'Et klart, responsivt site til services, produkter og WhatsApp-kontakt.' }, { title: 'Automatisk chatbot', text: 'Valgmenu til ofte stillede spørgsmål, filtrering af henvendelser og videresendelse til en person.' }, { title: 'Enkel styring', text: 'Panel til bookinger, ordrer eller henvendelser med status, kundedata og basis opfølgning.' }] },
  plans: { eyebrow: 'Pakker', title: 'Vælg det løsningsniveau din virksomhed har brug for', note: 'Pakkerne er opdelt efter omfang: base, komplet og premium. Anmod om et tilbud for at definere den endelige pris efter branche, funktioner og integrationer.', cta: 'Anmod om tilbud', items: sharedPlans.da },
  demos: { eyebrow: 'Demoer efter branche', title: 'Udforsk vores demoer efter branche', text: 'Hver demo viser, hvordan løsningen passer til konkrete problemer: ordrer, fremvisninger, bookinger eller henvendelser.', button: 'Se demo', cards: { comercio: { title: 'Butikker', text: 'Katalog, WhatsApp, chatbot og ordrestyring.' }, inmobiliaria: { title: 'Ejendomsmæglere', text: 'Ejendomme, filtre, fremvisninger, vurderinger og opfølgning.' }, estetica: { title: 'Skønhedsklinikker', text: 'Behandlinger, priser, tider, WhatsApp og bookingstyring.' }, clinica: { title: 'Klinikker / fagfolk', text: 'Services, åbningstider, FAQ og bookinger uden følsomme sundhedsdata.' } } },
  process: { eyebrow: 'Sådan arbejder vi', title: 'En klar proces til hurtig lancering', steps: ['Vi gennemgår din virksomhed', 'Vi definerer løsningen', 'Vi designer hjemmeside og automatiseringer', 'Vi tester og justerer', 'Vi publicerer og yder support'] },
  support: { eyebrow: 'Sikkerhed og support', title: 'Din hjemmeside bliver passet efter lancering', items: ['Sikker hosting', 'Backups', 'Månedlig vedligeholdelse', 'Basis beskyttelse mod bots/spam', 'Opdateringer', 'Teknisk support'] },
  cta: { title: 'Vil du digitalisere din virksomhed uden besvær?', text: 'Vi skaber en løsning til din branche, klar til brug og designet til flere henvendelser, bookinger eller ordrer.', button: 'Anmod om tilbud på WhatsApp' },
  footer: { text: 'Konkrete digitale løsninger til små virksomheder: professionel hjemmeside, WhatsApp, chatbot og enkel styring.', rights: 'Alle rettigheder forbeholdes.' },
  demoPage: { problemLabel: 'Branchens problem', versionsTitle: 'Tre versioner til denne branche', featuresTitle: 'Funktioner', contactButton: 'Anmod om tilbud på WhatsApp', mockupLabel: 'Funktionel mockup' },
  demoDetails: {
    comercio: { title: 'Demo til butikker', hero: 'Sælg produkter med katalog, WhatsApp og ordrestyring', problem: 'Mange butikker svarer manuelt på størrelser, lager, priser og levering. Det tager tid, og nogle ordrer går tabt.', mockup: ['Katalog med udvalgte produkter', 'Chatbot: priser, lager, levering', 'Panel med ordrestatus'], versions: [{ title: 'Basisversion', features: ['Hjemmeside med katalog', 'WhatsApp', 'Udvalgte produkter', 'Kontakt'] }, { title: 'Mellemversion', features: ['Alt det tidligere', 'Chatbot med muligheder', 'Ofte stillede spørgsmål', 'Videresendelse til WhatsApp'] }, { title: 'Premiumversion', features: ['Alt det tidligere', 'Ordrestyring', 'Administrationspanel', 'Ordrestatus', 'Kundedatabase'] }] },
    inmobiliaria: { title: 'Demo til ejendomsmæglere', hero: 'Publicér ejendomme og gør henvendelser til organiserede fremvisninger', problem: 'Henvendelser om køb, leje og vurdering kommer blandet sammen. Uden filtre og opfølgning mistes muligheder.', mockup: ['Ejendomsliste med filtre', 'Chatbot: køb, leje, vurdering', 'Panel til fremvisninger og muligheder'], versions: [{ title: 'Basisversion', features: ['Ejendomsliste', 'Basis filtre', 'WhatsApp', 'Kontakt'] }, { title: 'Mellemversion', features: ['Ejendomschatbot', 'Henvendelser om køb/leje', 'Ejendomsvurdering', 'Videresendelse til rådgiver'] }, { title: 'Premiumversion', features: ['Henvendelsespanel', 'Agenda for fremvisninger', 'Status på muligheder', 'Kundedatabase'] }] },
    estetica: { title: 'Demo til skønhedsklinikker', hero: 'Vis behandlinger, svar på priser og organiser bookinger', problem: 'Skønhedsklinikker får gentagne spørgsmål om priser, kampagner og tider. Kalenderen bliver svær at holde styr på.', mockup: ['Behandlinger med pris og varighed', 'Chatbot: priser, tilbud, tider', 'Bookingkalender og påmindelser'], versions: [{ title: 'Basisversion', features: ['Behandlinger', 'Services', 'WhatsApp', 'Kontakt'] }, { title: 'Mellemversion', features: ['Chatbot med ofte stillede spørgsmål', 'Priser/tilbud', 'Tider', 'Videresendelse til WhatsApp'] }, { title: 'Premiumversion', features: ['Bookingstyring', 'Kalender', 'Påmindelser', 'Kundehistorik'] }] },
    clinica: { title: 'Demo til klinikker / fagfolk', hero: 'Præsenter services og organiser henvendelser uden følsomme sundhedsdata', problem: 'Små klinikker og fagfolk skal forklare services, tider og bookinger uden at svare manuelt hele dagen.', mockup: ['Professionel serviceside', 'Chatbot til tider og spørgsmål', 'Agenda uden følsomme sundhedsdata'], versions: [{ title: 'Basisversion', features: ['Professionel præsentation', 'Services', 'WhatsApp', 'Kontakt'] }, { title: 'Mellemversion', features: ['Chatbot med ofte stillede spørgsmål', 'Tider', 'Serviceinformation', 'Videresendelse'] }, { title: 'Premiumversion', features: ['Online bookinger', 'Agenda', 'Påmindelser', 'Patient-/kundepanel uden følsomme sundhedsdata'] }] }
  }
}

translations.it = {
  ...translations.en,
  meta: { title: 'WebFlex Studio | Servizi digitali per piccole attività' },
  nav: { home: 'Home', services: 'Servizi', demos: 'Demo', plans: 'Piani', process: 'Come lavoriamo', contact: 'Contatto', proposal: 'Richiedi proposta', backHome: 'Torna alla home' },
  hero: { eyebrow: 'Studio digitale per piccole attività', title: 'Creiamo siti web che aiutano la tua attività a vendere, rispondere alle richieste e gestire prenotazioni', subtitle: 'Progettiamo siti web professionali per negozi, agenzie immobiliari, centri estetici e servizi. Integriamo WhatsApp, chatbot automatici e sistemi semplici per prenotazioni, ordini o richieste.', primaryButton: 'Vedi piani', secondaryButton: 'Vedi demo', mockupTitle: 'Sito + WhatsApp + gestione', mockupMessage: 'Ciao, vorrei verificare la disponibilità', mockupBot: 'Scegli un’opzione: prezzi, prenotazioni o parlare con una persona.', mockupPanel: 'Pannello: 12 nuove richieste' },
  problem: { eyebrow: 'Problema', title: 'La tua attività può perdere clienti se non risponde in tempo', text: 'Molte attività gestiscono ancora richieste, prenotazioni e ordini manualmente. Questo crea ritardi, messaggi ripetuti e opportunità perse.', close: 'Trasformiamo questi processi in un’esperienza digitale semplice, chiara e professionale.', items: ['Richieste ripetute su WhatsApp', 'Prenotazioni o ordini disordinati', 'Mancanza di presenza online professionale', 'Clienti che abbandonano per mancanza di risposta'] },
  services: { eyebrow: 'Servizi', title: 'Soluzioni pratiche per vendere, rispondere e organizzare', text: 'Non creiamo siti decorativi. Costruiamo uno strumento semplice per ricevere più richieste, ordinare messaggi e gestire ordini o prenotazioni senza perdere tempo.', items: [{ title: 'Sito professionale', text: 'Un sito chiaro e responsive per spiegare servizi, mostrare prodotti e portare clienti su WhatsApp.' }, { title: 'Chatbot automatico', text: 'Menu di opzioni per rispondere a domande frequenti, filtrare richieste e passare a una persona quando serve.' }, { title: 'Gestione semplice', text: 'Pannello per prenotazioni, ordini o richieste con stati, dati cliente e follow-up base.' }] },
  plans: { eyebrow: 'Piani', title: 'Scegli il livello di soluzione che serve alla tua attività', note: 'I piani sono organizzati per portata: base, completo e premium. Richiedi un preventivo per definire il prezzo finale in base a settore, funzionalità e integrazioni.', cta: 'Richiedi preventivo', items: sharedPlans.it },
  demos: { eyebrow: 'Demo per settore', title: 'Esplora le nostre demo per settore', text: 'Ogni demo mostra come la soluzione si adatta a problemi concreti: ordini, visite, prenotazioni o richieste.', button: 'Vedi demo', cards: { comercio: { title: 'Negozi', text: 'Catalogo, WhatsApp, chatbot per richieste e gestione ordini.' }, inmobiliaria: { title: 'Immobiliari', text: 'Immobili, filtri, visite, valutazioni e follow-up opportunità.' }, estetica: { title: 'Centri estetici', text: 'Trattamenti, prezzi, orari, WhatsApp e gestione prenotazioni.' }, clinica: { title: 'Cliniche / Professionisti', text: 'Servizi, orari, FAQ e prenotazioni senza dati medici sensibili.' } } },
  process: { eyebrow: 'Come lavoriamo', title: 'Un processo chiaro per pubblicare velocemente', steps: ['Analizziamo la tua attività', 'Definiamo la soluzione', 'Disegniamo sito e automazioni', 'Testiamo e regoliamo', 'Pubblichiamo e offriamo supporto'] },
  support: { eyebrow: 'Sicurezza e supporto', title: 'Il tuo sito resta curato dopo la pubblicazione', items: ['Hosting sicuro', 'Backup', 'Manutenzione mensile', 'Protezione base contro bot/spam', 'Aggiornamenti', 'Supporto tecnico'] },
  cta: { title: 'Vuoi digitalizzare la tua attività senza complicarti?', text: 'Creiamo una soluzione adattata al tuo settore, pronta da usare e pensata per ricevere più richieste, prenotazioni o ordini.', button: 'Richiedi proposta su WhatsApp' },
  footer: { text: 'Soluzioni digitali concrete per piccole attività: sito professionale, WhatsApp, chatbot e gestione semplice.', rights: 'Tutti i diritti riservati.' },
  demoPage: { problemLabel: 'Problema del settore', versionsTitle: 'Tre versioni per questo settore', featuresTitle: 'Funzionalità', contactButton: 'Richiedi proposta su WhatsApp', mockupLabel: 'Mockup funzionale' },
  demoDetails: {
    comercio: { title: 'Demo per negozi', hero: 'Vendi prodotti con catalogo, WhatsApp e gestione ordini', problem: 'Molti negozi rispondono manualmente su taglie, stock, prezzi e spedizioni. Questo richiede tempo e alcuni ordini si perdono.', mockup: ['Catalogo con prodotti in evidenza', 'Chatbot: prezzi, stock, spedizioni', 'Pannello con stati degli ordini'], versions: [{ title: 'Versione Base', features: ['Sito con catalogo', 'WhatsApp', 'Prodotti in evidenza', 'Contatto'] }, { title: 'Versione Intermedia', features: ['Tutto quanto sopra', 'Chatbot con opzioni', 'Richieste frequenti', 'Passaggio a WhatsApp'] }, { title: 'Versione Premium', features: ['Tutto quanto sopra', 'Gestione ordini', 'Pannello amministrativo', 'Stati degli ordini', 'Database clienti'] }] },
    inmobiliaria: { title: 'Demo per immobiliari', hero: 'Pubblica immobili e trasforma richieste in visite organizzate', problem: 'Le richieste di acquisto, affitto e valutazione arrivano mescolate. Senza filtri e follow-up si perdono opportunità.', mockup: ['Lista immobili con filtri', 'Chatbot: acquisto, affitto, valutazione', 'Pannello visite e opportunità'], versions: [{ title: 'Versione Base', features: ['Lista immobili', 'Filtri base', 'WhatsApp', 'Contatto'] }, { title: 'Versione Intermedia', features: ['Chatbot immobiliare', 'Richieste acquisto/affitto', 'Valutazione immobile', 'Passaggio a consulente'] }, { title: 'Versione Premium', features: ['Pannello richieste', 'Agenda visite', 'Stati opportunità', 'Database clienti'] }] },
    estetica: { title: 'Demo per centri estetici', hero: 'Mostra trattamenti, rispondi sui prezzi e organizza prenotazioni', problem: 'I centri estetici ricevono domande ripetute su prezzi, promozioni e orari. L’agenda diventa difficile da organizzare.', mockup: ['Trattamenti con prezzo e durata', 'Chatbot: prezzi, promo, orari', 'Calendario prenotazioni e promemoria'], versions: [{ title: 'Versione Base', features: ['Trattamenti', 'Servizi', 'WhatsApp', 'Contatto'] }, { title: 'Versione Intermedia', features: ['Chatbot con FAQ', 'Prezzi/promozioni', 'Orari', 'Passaggio a WhatsApp'] }, { title: 'Versione Premium', features: ['Gestione prenotazioni', 'Calendario', 'Promemoria', 'Storico clienti'] }] },
    clinica: { title: 'Demo per cliniche / professionisti', hero: 'Presenta servizi e organizza richieste senza dati medici sensibili', problem: 'Cliniche piccole e professionisti devono spiegare servizi, orari e prenotazioni senza dipendere da risposte manuali tutto il giorno.', mockup: ['Pagina professionale dei servizi', 'Chatbot per orari e richieste', 'Agenda senza dati medici sensibili'], versions: [{ title: 'Versione Base', features: ['Presentazione professionale', 'Servizi', 'WhatsApp', 'Contatto'] }, { title: 'Versione Intermedia', features: ['Chatbot FAQ', 'Orari', 'Informazioni sui servizi', 'Passaggio'] }, { title: 'Versione Premium', features: ['Prenotazioni online', 'Agenda', 'Promemoria', 'Pannello pazienti/clienti senza dati medici sensibili'] }] }
  }
}
