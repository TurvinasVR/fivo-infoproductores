// Parámetros de la calculadora: precios, supuestos y datos de la copia original (calculadora.fivo.info).
// Los números no se tocan: las fórmulas y los precios deben dar lo mismo que la original.
export const CFG = {
  priceMonthly: 39.99,
  priceAnnual: 29.99,
  months: 12,
  searchShare: 0.20,
  hoursWeek: 40,
  recDefault: 25,
  unknownShare: 0.20,
  consultantBoundsPct: [0.005, 0.015, 0.03],
  consultantMidPct: [0.0025, 0.01, 0.0225, 0.04],
  consultantRound: 500,
  consultantMin: 500,
  consultantFixedBounds: [2000, 6000, 15000],
  consultantFixedValues: [1000, 4000, 10500, 20000],
  consultantReplace: 0.5,
  auditRefPct: 0.01, auditRefRound: 500, auditRefMin: 1000, auditRefMax: 20000,
  upliftByReview: {no: 1.5, some: 1, yes: 0.5},
  upliftDefault: 1,
  leadEndpoint: "" as string,
  contactUrl: "https://fivo.ai/contact",
  callUrl: "https://calendly.com/joseba-fivo/llamada-con-fivo",
  callPrefill: true,
  registerUrl: "https://app.fivo.ai/{lang}/auth/register",
  showVideo: true,
  videoUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ",
  videoPoster: "",
  abTest: false,
  showTestimonials: true,
  testimonials: [
    {
      "name": "Javier Martínez",
      "place": "España",
      "sector": "Equipos comerciales",
      "text": "Fivo nos ayuda a tener una visión mucho más clara de lo que ocurre en nuestro equipo comercial. Tener las conversaciones y los datos organizados en un mismo sitio facilita muchísimo el seguimiento.",
      "stars": 5,
      "consent": true
    },
    {
      "name": "Laura Fernández",
      "place": "España",
      "sector": "Infoproductores",
      "text": "Lo que más me gusta es poder centralizar la información de las reuniones, tareas y herramientas de trabajo. Es mucho más fácil recuperar información importante sin perder tiempo buscando.",
      "stars": 5,
      "consent": true
    },
    {
      "name": "Alejandro Ruiz",
      "place": "España",
      "sector": "Empresas tecnológicas",
      "text": "La idea del grafo de memoria es especialmente interesante. Poder relacionar tareas, conversaciones y documentos permite entender mejor el contexto de lo que sucede en la empresa.",
      "stars": 5,
      "consent": true
    },
    {
      "name": "Marta Sánchez",
      "place": "España",
      "sector": "Gestión empresarial",
      "text": "Tener la información de diferentes herramientas conectada facilita el trabajo diario. Fivo tiene mucho potencial para reducir el tiempo que dedicamos a buscar datos y reconstruir conversaciones antiguas.",
      "stars": 5,
      "consent": true
    },
    {
      "name": "Daniel López",
      "place": "España",
      "sector": "Dirección comercial",
      "text": "La posibilidad de analizar reuniones comerciales y consultar información sobre el rendimiento del equipo es una de las funciones más interesantes de Fivo. Ayuda a tomar decisiones con más contexto.",
      "stars": 5,
      "consent": true
    },
    {
      "name": "Elena García",
      "place": "España",
      "sector": "Agencias y marketing",
      "text": "Me parece especialmente útil conectar herramientas como Notion, Drive y las aplicaciones de gestión de proyectos. Tener toda esa información relacionada abre muchas posibilidades para trabajar de forma más eficiente.",
      "stars": 5,
      "consent": true
    },
    {
      "name": "Pablo Romero",
      "place": "España",
      "sector": "SaaS y tecnología",
      "text": "La conexión con asistentes de IA mediante MCP es un punto diferencial. Poder consultar información de la empresa sin tener que explicar todo el contexto desde cero puede ahorrar muchísimo trabajo.",
      "stars": 5,
      "consent": true
    },
    {
      "name": "Michael Carter",
      "place": "Estados Unidos",
      "sector": "Productividad empresarial",
      "text": "Fivo aborda un problema importante: el conocimiento de la empresa está disperso en demasiadas herramientas. Conectar esa información facilita encontrar respuestas y entender el contexto detrás de las decisiones.",
      "stars": 5,
      "consent": true,
      "translated": true
    },
    {
      "name": "Emily Johnson",
      "place": "Estados Unidos",
      "sector": "Equipos comerciales",
      "text": "La combinación de resúmenes de reuniones, herramientas de trabajo conectadas y conocimiento de empresa consultable es convincente. Podría ayudar a los responsables comerciales a identificar patrones y a entrenar mejor a sus equipos.",
      "stars": 5,
      "consent": true,
      "translated": true
    },
    {
      "name": "Sebastián Rodríguez",
      "place": "Latinoamérica",
      "sector": "Infoproductos y formación online",
      "text": "Fivo me parece una propuesta muy interesante para empresas que necesitan conectar reuniones, tareas, clientes y documentación. Tener una memoria centralizada del negocio puede facilitar mucho la organización y el crecimiento.",
      "stars": 5,
      "consent": true
    }
  ],
  showExamples: false,
  examples: [
    {label:{es:"Agencia de marketing", en:"Marketing agency"}, sector:"agency",     comerciales:4, resto:8,  gastoAnual:480000,  ingresos:1500000, revisaLlamadas:"some", consultores:null, gastoApps:1000, gastoGrabacion:400},
    {label:{es:"Inmobiliaria",         en:"Real estate agency"}, sector:"realestate", comerciales:4, resto:2,  gastoAnual:210000,  ingresos:900000,  revisaLlamadas:"no",   consultores:null, gastoApps:500,  gastoGrabacion:200},
    {label:{es:"Consultora",           en:"Consulting firm"},  sector:"services",   comerciales:8, resto:22, gastoAnual:1500000, ingresos:4500000, revisaLlamadas:"yes",  consultores:1,    gastoApps:3000, gastoGrabacion:1200}
  ],
  callDuration: null,
  defaultLang: "es",
  customerLogos: [
    {name:"Catalana Occidente",    scale:1.5, url:"https://pub-3e391b23958e4e1b93d08a1ebeb9c70d.r2.dev/brain_resources/companies/Catalana_Occidente_Logo.png"},
    {name:"Embat",                 scale:1.9, url:"https://pub-3e391b23958e4e1b93d08a1ebeb9c70d.r2.dev/brain_resources/companies/Embat.png"},
    {name:"Eurofins Scientific",   scale:0.95, url:"https://pub-3e391b23958e4e1b93d08a1ebeb9c70d.r2.dev/brain_resources/companies/Eurofins_Scientific_logo.png"},
    {name:"Gameloft",              scale:0.9, url:"https://pub-3e391b23958e4e1b93d08a1ebeb9c70d.r2.dev/brain_resources/companies/Gameloft-logo-and-wordmark.png"},
    {name:"Construccions Rubau",   scale:0.9, url:"https://pub-3e391b23958e4e1b93d08a1ebeb9c70d.r2.dev/brain_resources/companies/Logo-CONSTRUCCIONS-RUBAU-ES1.png"},
    {name:"Mapei",                 scale:0.9, url:"https://pub-3e391b23958e4e1b93d08a1ebeb9c70d.r2.dev/brain_resources/companies/Mapei_logo.png"},
    {name:"Thinking Heads",        scale:1.7, url:"https://pub-3e391b23958e4e1b93d08a1ebeb9c70d.r2.dev/brain_resources/companies/TH1_logos_LOGO_completo_claim-negro-1.png"},
    {name:"Universidad de Navarra",scale:1.6, url:"https://pub-3e391b23958e4e1b93d08a1ebeb9c70d.r2.dev/brain_resources/companies/Logotipo_Universidad_de_Navarra_negro_sobre_blanco-SVG.png"}
  ]
};
