import { SCALE, FAQ_PRICE, FAQ_TRANSCRIBE } from "./shared";
import type { LandingContent } from "./types";


/**
 * Todo el texto de /infoproductores. Público: infoproductor que ya factura y tiene equipo
 * (closers, setters, soporte, editor, media buyer). Cualifica en la primera línea, habla de
 * su embudo y de dinero, y repite el botón al final de cada bloque.
 */
export const infoproductores: LandingContent = {
  slug: "infoproductores",
  path: "/infoproductores",
  thanksPath: "/infoproductores/gracias",
  repeatCta: true,
  ctaLines: {
    herramientas: "¿Ya usas estas herramientas? Te enseñamos cómo quedaría todo conectado.",
    problema: "Así se ve con Fivo. En la llamada lo vemos con tu negocio.",
    "como-funciona": "Te lo enseñamos con un negocio como el tuyo en **30 minutos**.",
    pregunta: "¿Qué le preguntarías tú a tu negocio? Tráelo a la llamada y lo vemos.",
    "para-quien": "¿Te has visto reflejado? Hablemos.",
    prueba: "Mira si encaja con tu negocio.",
    faq: "¿Te queda alguna duda? Resuélvela en la llamada.",
  },

  hero: {
    label: "Para infoproductores con equipo de ventas",
    title: "Tu negocio ya no cabe en tu cabeza. Ponlo en un sitio al que puedas preguntarle",
    subtitle:
      "Fivo une las llamadas de tus closers, tus ventas, tus tareas y tu correo en un grafo de contexto, y lo conecta a Claude o ChatGPT. Deja de perseguir a tu equipo para saber cómo va todo.",
    videoLabel: "Vídeo de Fivo para infoproductores",
    videoEnd: { title: "¿Lo vemos con tu negocio?", replay: "Volver a ver" },
    trust: "Cumple RGPD. Datos alojados en la UE. Tú decides quién ve qué.",
  },

  tools: {
    ids: ["hubspot", "claude", "zoom", "meet", "teams", "slack", "notion", "drive", "zapier", "chatgpt"],
    title: "Se conecta a lo que ya usas, y a tu IA",
    srList: "Zoom, Google Meet, Microsoft Teams, Slack, Notion, Google Drive, HubSpot y Zapier, y Claude y ChatGPT vía MCP.",
    after: {
      main: "Seis herramientas separadas no son un sistema. Fivo las une sin que cambies ninguna.",
      small: "¿Usas algo que no está aquí? Zapier y webhooks conectan el resto.",
    },
  },

  problem: {
    title: { main: "¿Cuántas veces al día escribes “oye, ¿cómo va esto?”?" },
    pains: [
      { text: "Para saber cómo fue el lanzamiento abres seis pestañas y preguntas a cuatro personas.", group: "team" },
      { text: "No sabes por qué un closer cierra menos, porque no escuchas sus llamadas.", group: "sales" },
      { text: "Cada vez que usas la IA tienes que explicarle tu negocio desde cero.", group: "ia" },
    ],
    groups: [
      {
        id: "sales",
        label: "Ventas y llamadas",
        cx: 0.26,
        cy: 0.27,
        ring: [176, 156],
        labelTop: 84,
        nodes: [
          { f: "zoom.svg", dx: -38, dy: -22 },
          { f: "googlemeet.svg", dx: 18, dy: -38 },
          { f: "teams.svg", dx: -14, dy: 34 },
          { f: "hubspot.svg", dx: 42, dy: 10 },
        ],
      },
      {
        id: "ia",
        label: "Tu IA",
        cx: 0.76,
        cy: 0.2,
        ring: [124, 100],
        labelTop: 60,
        nodes: [
          { f: "claude.svg", dx: -26, dy: -4 },
          { f: "openai.svg", dx: 26, dy: 10 },
        ],
      },
      {
        id: "team",
        label: "Equipo y tareas",
        cx: 0.58,
        cy: 0.72,
        ring: [170, 150],
        labelTop: 82,
        nodes: [
          { f: "slack.svg", dx: -54, dy: -10 },
          { f: "notion.svg", dx: 4, dy: 18 },
          { f: "googledrive.svg", dx: 58, dy: -16 },
        ],
      },
    ],
    compare: true,
    rows: [
      { topic: "Saber cómo va algo", today: "Escribir a alguien del equipo y esperar", fivo: "Preguntarlo y tener la respuesta al momento" },
      { topic: "Revisar un lanzamiento", today: "Seis pestañas y cuatro personas", fivo: "Una pregunta" },
      { topic: "Usar Claude o ChatGPT", today: "Explicar tu negocio en cada conversación", fivo: "Tu IA ya conoce tu negocio" },
      { topic: "Tus herramientas", today: "Cada una con su parte de la información", fivo: "Las mismas, conectadas" },
    ],
  },

  how: {
    steps: [
      {
        title: "Conectas tus herramientas. No cambias ninguna.",
        desc: "Escena animada: los logotipos de Zoom, Google Meet, Microsoft Teams, HubSpot, Slack, Notion, Google Drive, Zapier, Claude y ChatGPT aparecen sueltos y se van conectando uno a uno con el nodo central de Fivo, hasta formar un grafo unido.",
      },
      {
        title: "Cada llamada, cada tarea y cada conversación entra en el grafo: qué se dijo, quién lo hizo y en qué quedó.",
        desc: "Escena animada de ejemplo: en una videollamada con cuatro participantes entra el asistente de Fivo. Lo que pasa se convierte en tres nodos, qué se dijo, quién lo hizo y en qué quedó, que se conectan entre sí y vuelan al grafo.",
      },
      {
        title: "Preguntas a Fivo, o a tu propia IA, y te responde con datos de tu negocio.",
        desc: "Escena animada de ejemplo: en el chat se escribe la pregunta «¿Qué objeción se repitió más en las llamadas del lanzamiento?». Se iluminan en el grafo las llamadas de donde sale la respuesta. La respuesta dice que la más repetida fue el precio, seguida de «no es el momento» y «lo hablo con mi pareja», y que el closer que más cerró respondió al precio preguntando cuánto le cuesta al cliente seguir igual. Cada referencia está enlazada con su llamada.",
      },
    ],
    scene: {
      callTitle: "Videollamada",
      initials: ["C", "M", "A", "L"],
      assistantCaption: "Asistente de Fivo",
      transcript: [
        { who: "Qué se dijo", text: "la objeción del precio del programa" },
        { who: "Quién lo hizo", text: "el closer, con una pregunta" },
        { who: "En qué quedó", text: "siguiente paso con fecha" },
      ],
      combineLabel: "Se conectan entre sí",
      question: "¿Qué objeción se repitió más en las llamadas del lanzamiento?",
      answer: [
        "La más repetida fue el precio. Después, «no es el momento» y «lo hablo con mi pareja».",
        "El closer que más cerró respondió al precio preguntando cuánto le cuesta al cliente seguir igual.",
      ],
      chips: [
        { text: "Llamada 1, cierra", tone: "win" },
        { text: "Llamada 2, pierde", tone: "lose" },
        { text: "Llamada 3, cierra", tone: "win" },
      ],
    },
  },

  ask: {
    title: "Pregúntale a tu negocio",
    placeholder: "Pregunta a tu negocio",
    searching: "Buscando en tu negocio",
    graphAria: "Grafo de tu negocio: se iluminan las fuentes de donde sale la respuesta.",
    cta: "Quiero ver esto con mi negocio",
    questions: [
      {
        id: "objeciones",
        q: "¿Qué objeción se repitió más en las llamadas de este lanzamiento?",
        title: "Las tres objeciones de este lanzamiento, de más a menos repetida.",
        used: [0, 2, 4],
        calls: [
          { title: "Llamada con objeción de precio", note: "Llamada 1, cierra", tone: "win" },
          { title: "Llamada con «no es el momento»", note: "Llamada 2, pierde", tone: "lose" },
          { title: "Llamada con «lo hablo con mi pareja»", note: "Llamada 3, cierra", tone: "win" },
        ],
        sr: "Las tres objeciones del lanzamiento, de más a menos repetida: el precio, que salió en la mayoría de las llamadas; «no es el momento», que salió en muchas; y «lo hablo con mi pareja», que salió en algunas. El closer que más cerró respondió al precio preguntando cuánto le cuesta al cliente seguir igual, a «no es el momento» fijando una fecha para decidir y a «lo hablo con mi pareja» proponiendo una segunda llamada con ella o con él. Ejemplo.",
        fallback:
          "El precio salió en la mayoría de las llamadas, «no es el momento» en muchas y «lo hablo con mi pareja» en algunas. El closer que más cerró respondió al precio preguntando cuánto le cuesta al cliente seguir igual. Ejemplo.",
        answer: {
          kind: "tags",
          rows: [
            { tag: "Precio", freq: "Salió en la mayoría de las llamadas", line: "El closer que más cerró preguntaba cuánto le cuesta al cliente seguir igual y volvía al valor." },
            { tag: "No es el momento", freq: "Salió en muchas llamadas", line: "Fijaba una fecha para decidir antes de colgar." },
            { tag: "Lo hablo con mi pareja", freq: "Salió en algunas llamadas", line: "Proponía una segunda llamada corta con las dos personas." },
          ],
        },
      },
      {
        id: "pagina",
        q: "¿En qué está atascada la nueva página de ventas y desde cuándo?",
        title: "La página de ventas lleva varios días parada.",
        used: [1, 3, 5],
        calls: [{ title: "Llamada de lanzamiento" }, { title: "Llamada con el editor" }, { title: "Llamada semanal del equipo" }],
        sr: "La página de ventas se creó en la reunión de lanzamiento, se asignó al editor unos días después y lleva varios días parada, a la espera del texto de la oferta. Ahora la tiene el editor. Ejemplo.",
        fallback:
          "Se creó en la reunión de lanzamiento, se asignó al editor y lleva varios días parada, a la espera del texto de la oferta. Ahora la tiene el editor. Ejemplo.",
        answer: {
          kind: "timeline",
          events: [
            { label: "Creada", detail: "En la reunión de lanzamiento" },
            { label: "Asignada", detail: "Al editor, unos días después" },
            { label: "Parada", detail: "A la espera del texto de la oferta, desde hace varios días" },
          ],
          nowLabel: "La tiene ahora",
          now: "El editor",
        },
      },
      {
        id: "closer",
        q: "¿Qué closer cerró más este mes y qué hace distinto?",
        title: "Laura es la closer que más cerró este mes. Esto cambia entre sus llamadas que cierra y las que pierde.",
        used: [0, 3, 5],
        calls: [
          { title: "Primera llamada de Laura que cierra", note: "Llamada 1, cierra", tone: "win" },
          { title: "Segunda llamada de Laura que cierra", note: "Llamada 2, cierra", tone: "win" },
          { title: "Llamada de Laura que no cierra", note: "Llamada 3, pierde", tone: "lose" },
        ],
        sr: "Laura es la closer que más cerró este mes. Cuando cierra, deja que el prospecto cuente su situación, resume el problema con sus palabras y acuerda el siguiente paso con fecha. Cuando pierde, presenta el programa antes de entender el problema, deja el cierre abierto y no fija fecha de decisión. Ejemplo.",
        fallback:
          "Laura es la closer que más cerró este mes. Cuando cierra, deja que el prospecto cuente su situación, resume el problema con sus palabras y acuerda el siguiente paso con fecha. Cuando pierde, presenta el programa antes de entender el problema y deja el cierre abierto. Ejemplo.",
        answer: {
          kind: "columns",
          columns: [
            {
              h: "Cuando cierra",
              tone: "win",
              items: ["Deja que el prospecto cuente su situación", "Resume el problema con sus palabras", "Acuerda el siguiente paso con fecha"],
            },
            {
              h: "Cuando pierde",
              tone: "lose",
              items: ["Presenta el programa antes de entender el problema", "Deja el cierre abierto", "No fija fecha de decisión"],
            },
          ],
        },
      },
    ],
  },

  who: {
    title: "Para quién es Fivo",
    yes: {
      label: "Es para ti si",
      items: [
        "Ya vendes y tienes equipo",
        "Tus ventas pasan por llamadas con closers",
        "Usas varias herramientas y la información está repartida",
        "Quieres que tu IA conozca tu negocio",
      ],
    },
    no: {
      label: "No es para ti si",
      items: ["Estás empezando y trabajas solo", "Buscas solo una herramienta para grabar llamadas"],
    },
  },

  proof: {
    title: "Fivo ya funciona a esta escala",
    scale: SCALE,
    logos: true,
    testimonials: [],
  },

  agenda: {
    title: "Qué pasa en los 30 minutos",
    segments: [
      { range: "0 a 10 min", text: "Repasamos qué herramientas usas y cuánta gente tienes." },
      { range: "10 a 25 min", text: "Te enseñamos Fivo con un negocio como el tuyo." },
      { range: "25 a 30 min", text: "Te decimos si te compensa o no." },
    ],
    srList: [
      "Repasamos qué herramientas usas y cuánta gente tienes.",
      "Te enseñamos Fivo con un negocio como el tuyo.",
      "Te decimos si te compensa o no.",
      "30 minutos, por videollamada, sin compromiso. No es para ti si trabajas solo y sin equipo.",
    ],
    askText: "¿Cómo va mi lanzamiento?",
    fork: ["Compensa", "No compensa"],
    facts: ["30 minutos", "Por videollamada", "Sin compromiso"],
    note: "No es para ti si trabajas solo y sin equipo.",
  },

  booking: {
    title: "Elige hora para tu llamada",
    freeTitle: "Gracias por tu interés",
    sub: "Te lleva **30 segundos**.",
    next: ["Eliges día y hora en el calendario.", "Ves la confirmación de tu cita.", "Hablamos **30 minutos** por videollamada."],
    free: {
      headline: "Esta llamada es para infoproductores que ya tienen equipo.",
      text: "Si trabajas solo, lo mejor es que empieces gratis por tu cuenta. Si tu equipo crece, aquí estaremos.",
      cta: "Empieza gratis",
    },
    form: {
      emailLabel: "Email",
      whatsappHelp: "Con prefijo si no es de España.\nPor si necesitamos cambiar la hora de la llamada.",
      choices: [
        {
          name: "equipo",
          label: "Personas en tu equipo",
          control: "cards",
          options: "equipo",
          layout: "2/4",
          help: "Esta llamada es para quien ya tiene equipo.",
          error: "Elige cuántas personas hay en tu equipo.",
          summary: "Equipo: {label}",
        },
        {
          name: "facturacion",
          label: "Facturación mensual",
          control: "cards",
          options: "facturacion",
          layout: "1/2",
          error: "Elige tu facturación mensual.",
          summary: "Facturación: {label}",
        },
        {
          name: "prioridad",
          label: "Qué quieres resolver primero",
          control: "cards",
          options: "prioridad",
          layout: "1/3=",
          error: "Elige qué quieres resolver primero.",
          summary: "{label}",
        },
      ],
      submitHint: "Al enviar, eliges día y hora en el calendario.",
      analytics: {
        submit: { team: "equipo", revenue: "facturacion", priority: "prioridad" },
        booked: { team: "equipo", revenue: "facturacion", priority: "prioridad" },
      },
    },
  },

  faq: {
    title: "Preguntas frecuentes",
    items: [
      FAQ_TRANSCRIBE,
      {
        q: "¿Tengo que cambiar de herramientas?",
        a: "No. Fivo se conecta a las que ya usas: Zoom, Google Meet, Microsoft Teams, Slack, Notion, Google Drive, HubSpot y Zapier. Si usas otra, Zapier y webhooks conectan el resto.",
      },
      {
        q: "¿Dónde se guardan mis datos y los de mis alumnos?",
        a: "Los datos se alojan en la UE y van cifrados en tránsito y en reposo. Tú decides quién ve qué, con control de acceso por usuario y equipo. Fivo cumple RGPD.",
      },
      {
        q: "¿Funciona con Claude y ChatGPT?",
        a: "Sí, vía MCP. La memoria de Fivo se conecta a Claude y ChatGPT, y también a Gemini, para que tu IA conozca tu negocio sin que se lo expliques cada vez.",
      },
      FAQ_PRICE,
    ],
  },

  closing: {
    title: "Deja de ser la única persona que sabe cómo va todo.",
    disclaimer: "Los resultados dependen de cada negocio y no están garantizados.",
  },

  thanks: {
    title: "Tu llamada está agendada",
    prepTitle: "Para aprovechar la llamada",
    prepIntro: "Ten a mano:",
    prep: ["Las herramientas que usáis", "Cuánta gente tienes", "Qué quieres resolver primero"],
    videoLabel: "Vídeo de 60 segundos antes de la llamada",
    ics: { prodid: "-//Fivo//Llamada infoproductores//ES" },
  },
};
