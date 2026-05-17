export const whatsappNumber = '5493517868252'

export const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

export const chatbotContent = {
  es: {
    title: 'Asesor Nispero',
    status: 'Respuesta guiada',
    launcher: 'Abrir asesor',
    close: 'Cerrar asesor',
    intro:
      'Hola, soy el asistente de Nispero Tech. Te ayudo a orientar qué solución conviene para tu negocio.',
    choose: 'Elegí una opción para empezar:',
    options: {
      website: 'Necesito una web profesional',
      chatbot: 'Quiero responder consultas automáticamente',
      management: 'Quiero organizar turnos, pedidos o consultas',
      demos: 'Ver demos por rubro',
      whatsapp: 'Hablar por WhatsApp',
      form: 'Enviar consulta'
    },
    replies: {
      website:
        'Para presencia online clara conviene empezar por una web profesional: servicios, catálogo, WhatsApp, formulario, mapa y redes.',
      chatbot:
        'Si recibís muchas preguntas repetidas, sumamos un chatbot con menú, respuestas frecuentes y derivación a WhatsApp.',
      management:
        'Si necesitás ordenar reservas, pedidos o consultas, conviene sumar un panel simple con estados, clientes y seguimiento.',
      demos:
        'Podés revisar demos de comercio, inmobiliaria, estética y clínica para ver cómo cambia la solución según el rubro.'
    },
    next: 'También puedo derivarte o tomar tu consulta:',
    whatsappText:
      'Hola Nispero Tech, quiero recibir asesoramiento para una web con WhatsApp, chatbot o gestión simple.',
    formTitle: 'Dejá tu consulta',
    fields: {
      name: 'Nombre',
      business: 'Negocio o rubro',
      email: 'Email',
      phone: 'WhatsApp',
      message: 'Contame qué necesitás'
    },
    submit: 'Enviar consulta',
    formMissing:
      'El formulario está listo. Falta configurar el endpoint de Formspree en VITE_FORMSPREE_ENDPOINT.',
    success: 'Consulta enviada. Te vamos a responder pronto.',
    error: 'No se pudo enviar. Podés escribirnos por WhatsApp.'
  },
  en: {
    title: 'Nispero Advisor',
    status: 'Guided answer',
    launcher: 'Open advisor',
    close: 'Close advisor',
    intro: 'Hi, I am the Nispero Tech assistant. I can help you choose the right solution for your business.',
    choose: 'Choose an option to start:',
    options: {
      website: 'I need a professional website',
      chatbot: 'I want automatic replies',
      management: 'I want to organize bookings, orders or inquiries',
      demos: 'View sector demos',
      whatsapp: 'Talk on WhatsApp',
      form: 'Send inquiry'
    },
    replies: {
      website:
        'For a clear online presence, start with a professional website: services, catalog, WhatsApp, form, map and social links.',
      chatbot:
        'If you receive repeated questions, we add a chatbot with menu, frequent answers and WhatsApp handoff.',
      management:
        'If you need to organize bookings, orders or inquiries, we add a simple panel with statuses, customers and follow-up.',
      demos:
        'You can review demos for shops, real estate, beauty centers and clinics to see how the solution changes by sector.'
    },
    next: 'I can also hand you off or take your inquiry:',
    whatsappText:
      'Hi Nispero Tech, I would like advice for a website with WhatsApp, chatbot or simple management.',
    formTitle: 'Leave your inquiry',
    fields: {
      name: 'Name',
      business: 'Business or sector',
      email: 'Email',
      phone: 'WhatsApp',
      message: 'Tell us what you need'
    },
    submit: 'Send inquiry',
    formMissing: 'The form is ready. Configure the Formspree endpoint in VITE_FORMSPREE_ENDPOINT.',
    success: 'Inquiry sent. We will reply soon.',
    error: 'Could not send it. You can contact us on WhatsApp.'
  },
  da: {
    title: 'Nispero rådgiver',
    status: 'Guidet svar',
    launcher: 'Åbn rådgiver',
    close: 'Luk rådgiver',
    intro: 'Hej, jeg er Nispero Tech assistenten. Jeg hjælper dig med at vælge den rigtige løsning.',
    choose: 'Vælg en mulighed:',
    options: {
      website: 'Jeg har brug for en professionel hjemmeside',
      chatbot: 'Jeg vil svare automatisk',
      management: 'Jeg vil organisere bookinger, ordrer eller henvendelser',
      demos: 'Se demoer',
      whatsapp: 'Tal på WhatsApp',
      form: 'Send henvendelse'
    },
    replies: {
      website:
        'Til en klar online tilstedeværelse starter vi med en professionel hjemmeside: services, katalog, WhatsApp, formular, kort og sociale links.',
      chatbot:
        'Hvis du får gentagne spørgsmål, tilføjer vi en chatbot med menu, faste svar og videresendelse til WhatsApp.',
      management:
        'Hvis du skal organisere bookinger, ordrer eller henvendelser, tilføjer vi et enkelt panel med status, kunder og opfølgning.',
      demos: 'Du kan se demoer for butikker, ejendom, skønhed og klinikker.'
    },
    next: 'Jeg kan også sende dig videre eller tage din henvendelse:',
    whatsappText:
      'Hej Nispero Tech, jeg vil gerne have rådgivning om en hjemmeside med WhatsApp, chatbot eller enkel styring.',
    formTitle: 'Send din henvendelse',
    fields: {
      name: 'Navn',
      business: 'Virksomhed eller branche',
      email: 'Email',
      phone: 'WhatsApp',
      message: 'Fortæl hvad du har brug for'
    },
    submit: 'Send henvendelse',
    formMissing: 'Formularen er klar. Konfigurer Formspree endpoint i VITE_FORMSPREE_ENDPOINT.',
    success: 'Henvendelse sendt. Vi svarer snart.',
    error: 'Kunne ikke sende. Du kan skrive på WhatsApp.'
  },
  it: {
    title: 'Consulente Nispero',
    status: 'Risposta guidata',
    launcher: 'Apri consulente',
    close: 'Chiudi consulente',
    intro: 'Ciao, sono l’assistente di Nispero Tech. Ti aiuto a scegliere la soluzione giusta.',
    choose: 'Scegli un’opzione:',
    options: {
      website: 'Ho bisogno di un sito professionale',
      chatbot: 'Voglio risposte automatiche',
      management: 'Voglio organizzare prenotazioni, ordini o richieste',
      demos: 'Vedi demo per settore',
      whatsapp: 'Parlare su WhatsApp',
      form: 'Inviare richiesta'
    },
    replies: {
      website:
        'Per una presenza online chiara conviene iniziare con un sito professionale: servizi, catalogo, WhatsApp, modulo, mappa e social.',
      chatbot:
        'Se ricevi domande ripetute, aggiungiamo un chatbot con menu, risposte frequenti e passaggio a WhatsApp.',
      management:
        'Se devi organizzare prenotazioni, ordini o richieste, aggiungiamo un pannello semplice con stati, clienti e follow-up.',
      demos: 'Puoi vedere demo per negozi, immobiliari, estetica e cliniche.'
    },
    next: 'Posso anche indirizzarti o raccogliere la tua richiesta:',
    whatsappText:
      'Ciao Nispero Tech, vorrei consulenza per un sito con WhatsApp, chatbot o gestione semplice.',
    formTitle: 'Lascia la tua richiesta',
    fields: {
      name: 'Nome',
      business: 'Attività o settore',
      email: 'Email',
      phone: 'WhatsApp',
      message: 'Raccontaci cosa ti serve'
    },
    submit: 'Invia richiesta',
    formMissing: 'Il modulo è pronto. Configura l’endpoint Formspree in VITE_FORMSPREE_ENDPOINT.',
    success: 'Richiesta inviata. Risponderemo presto.',
    error: 'Invio non riuscito. Puoi scriverci su WhatsApp.'
  }
}
