export const SITE_CONFIG = {
  name: 'Edwar Tech',
  description: 'Servicio Técnico Especializado Apple en Lurín',
  url: 'https://edwartech.com',
  phone: '+51 902 663 983',
  phoneRaw: '51902663983',
  email: 'contacto@edwartech.com',
  address: {
    street: 'Mercado Bambú, Puestos C37 y D55',
    district: 'Lurín',
    city: 'Lima',
    country: 'Perú',
  },
  coordinates: {
    lat: -12.3286,
    lng: -76.8722,
  },
  hours: {
    days: 'Lunes a Domingo',
    hours: '8:00 am a 9:00 pm',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61584746890714&locale=es_LA',
    instagram: 'https://www.instagram.com/edwartech.pe/',
    tiktok: 'https://www.tiktok.com/@edwartech',
    youtube: 'https://youtube.com/@edwartech',
  },
  whatsappMessage: 'Hola Edwar Tech, necesito información sobre la reparación de...',
}

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Reparaciones', href: '/reparaciones' },
  { label: 'Condiciones', href: '/condiciones' },
  { label: 'Ubicación', href: '/ubicacion' },
]

export const HERO_STATS = [
  { value: '06+', label: 'Años de Experiencia' },
  { value: '5000+', label: 'Reparaciones Realizadas' },
  { value: '100%', label: 'Calidad' },
  { value: 'Todos los Días', label: 'Atención Continua' },
]

export const SERVICES_PREVIEW = [
  {
    title: 'iPhone',
    description: 'Reparación de batería, pantalla, Face ID y más desde iPhone 7 hasta el último modelo.',
    icon: 'smartphone',
    href: '/reparaciones#iphone',
  },
  {
    title: 'MacBook',
    description: 'Reparación electrónica, Flex Gate, cambio de teclado, batería y optimización.',
    icon: 'laptop',
    href: '/reparaciones#macbook',
  },
  {
    title: 'iPad',
    description: 'Reparación de cristal, display, Face ID, batería y mantenimiento general.',
    icon: 'tablet',
    href: '/reparaciones#ipad',
  },
  {
    title: 'Apple Watch',
    description: 'Reparación de pantalla, cambio de batería y reparación de corona digital.',
    icon: 'watch',
    href: '/reparaciones#applewatch',
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Repuestos Originales',
    description: 'Utilizamos repuestos originales y de alta calidad para garantizar el mejor rendimiento de tu equipo.',
    icon: 'shield',
  },
  {
    title: 'Garantía Certificada',
    description: 'Todos nuestros servicios cuentan con 3 meses de garantía en mano de obra y repuestos.',
    icon: 'award',
  },
  {
    title: 'Técnicos Certificados',
    description: 'Contamos con técnicos especializados y certificados en reparación de equipos Apple.',
    icon: 'certificate',
  },
  {
    title: 'Atención Todos los Días',
    description: 'Estamos disponibles de lunes a domingo de 8:00 am a 9:00 pm para atenderte.',
    icon: 'clock',
  },
]

export const REPAIR_SERVICES = {
  iphone: {
    title: 'iPhone',
    description: 'Nuestros servicios de reparación de iPhone están disponibles desde el iPhone 7 hasta el último modelo.',
    icon: 'smartphone',
    services: [
      'Reparación de batería',
      'Reparación de pantalla',
      'Reparación de Face ID',
      'Reparación cristal trasero',
      'Reparaciones electrónicas',
      'Aumento de memoria',
      'Reparación cristal cámara',
      'Reparación auricular',
      'Mantenimiento',
      'Otro tipo de fallas',
    ],
  },
  macbook: {
    title: 'MacBook',
    description: 'Reparación especializada para MacBook Air y MacBook Pro de todas las generaciones.',
    icon: 'laptop',
    services: [
      'Reparación electrónica',
      'Reparación Flex Gate',
      'Cambio de teclado',
      'Cambio de batería',
      'Optimización',
      'Reemplazo Touch Bar',
      'Reemplazo LCD',
      'Bisel de pantalla',
      'Otro tipo de fallas',
    ],
  },
  imac: {
    title: 'iMac',
    description: 'Servicio técnico para iMac de todas las generaciones con repuestos originales.',
    icon: 'monitor',
    services: [
      'Reparación electrónica',
      'Optimización y mantenimiento',
      'Cambio de pantalla',
      'Otro tipo de fallas',
    ],
  },
  ipad: {
    title: 'iPad',
    description: 'Reparación de iPads de todas las generaciones, incluyendo iPad Pro, Air y Mini.',
    icon: 'tablet',
    services: [
      'Reparación electrónica',
      'Reparación de cristal',
      'Cambio de cristal táctil',
      'Cambio de display',
      'Reparación de Face ID',
      'Alineación de BackCover',
      'Cambio de batería',
      'Otro tipo de fallas',
    ],
  },
  applewatch: {
    title: 'Apple Watch',
    description: 'Reparación profesional para Apple Watch Series 1 hasta el último modelo.',
    icon: 'watch',
    services: [
      'Reparación de pantalla',
      'Cambio de batería',
      'Reparación de corona digital',
      'Otro tipo de fallas',
    ],
  },
  cargadores: {
    title: 'Cargadores',
    description: 'Reparación de cargadores originales y genéricos de todas las generaciones.',
    icon: 'zap',
    services: [
      'Reparación de cargador',
    ],
  },
}

export const TERMS_SECTIONS = [
  { id: 'revision', label: 'Revisión y presupuesto' },
  { id: 'pago', label: 'Pago de reparación' },
  { id: 'abandonados', label: 'Equipos abandonados' },
  { id: 'reparacion', label: 'Reparación' },
  { id: 'garantia', label: 'Garantía' },
  { id: 'desbloqueo', label: 'Desbloqueo' },
  { id: 'calidad', label: 'Revisión de calidad' },
]

export const TERMS_CONTENT = {
  perdidaInformacion: {
    title: 'Pérdida de información',
    content: 'No nos hacemos responsables por la pérdida de información o datos almacenados en el equipo durante el proceso de reparación. Es responsabilidad del cliente realizar una copia de seguridad (backup) de toda su información antes de entregar el equipo para su reparación.',
  },
  riesgosTecnicos: {
    title: 'Riesgos técnicos y fallas internas',
    content: 'Los equipos electrónicos pueden presentar fallas adicionales durante el proceso de reparación debido a su estado interno. No garantizamos el funcionamiento completo de componentes que no están relacionados directamente con la reparación solicitada, especialmente en equipos con daños por líquidos o golpes.',
  },
  abandono: {
    title: 'Abandono del equipo',
    content: 'El cliente dispone de un máximo de 30 días calendario para retirar su equipo una vez completada la reparación. Pasado este período, el equipo será considerado como abandonado y Edwar Tech podrá disponer del mismo sin responsabilidad alguna.',
  },
  equiposReportados: {
    title: 'Equipos con alertas o reportes',
    content: 'Si el equipo presenta reporte de robo, alerta de seguridad o IMEI bloqueado, nos reservamos el derecho de retener el equipo y ponerlo a disposición de las autoridades competentes.',
  },
  baterias: {
    title: 'Disposición de baterías defectuosas',
    content: 'Las baterías defectuosas o en mal estado serán desechadas inmediatamente siguiendo los protocolos de seguridad y disposición de residuos electrónicos. No se entregarán baterías en mal estado al cliente por razones de seguridad.',
  },
  garantias: {
    title: 'Garantías',
    content: 'Otorgamos 3 meses de garantía en todas nuestras reparaciones. La garantía no cubre daños por mal uso, golpes, ingreso de líquidos, manipulaciones por terceros no autorizados, ni desgaste natural del equipo. La garantía se hace efectiva únicamente presentando el comprobante de reparación.',
  },
  sinGarantia: {
    title: 'Servicios sin garantía',
    content: 'Los siguientes servicios no cuentan con garantía: mantenimiento preventivo, limpieza interna, actualización de software, instalación de aplicaciones y servicios de diagnóstico.',
  },
  cristales: {
    title: 'Reemplazo de cristales o vidrios',
    content: 'El cliente debe revisar minuciosamente el equipo al momento de recibirlo. No se aceptan reclamos posteriores por rayas, polvo bajo el vidrio o burbujas una vez que el cliente ha recibido el equipo y ha salido del local.',
  },
  devoluciones: {
    title: 'Devoluciones y reembolsos',
    content: 'Si el cliente cancela el servicio antes de iniciar la reparación, se realizará una devolución del 70% del monto pagado. Si la reparación ya ha sido iniciada y el cliente decide cancelar, se devolverá el 30% restante del valor del servicio.',
  },
}

export const META_DEFAULTS = {
  title: 'Edwar Tech - Servicio Técnico Especializado Apple en Lurín',
  description: 'Reparación profesional de iPhone, MacBook, iPad y Apple Watch en Lurín. Repuestos originales, garantía certificada y atención todos los días.',
  keywords: 'reparación apple, servicio técnico apple, reparación iphone lurín, reparación macbook, reparación ipad, apple watch, mercado bambú',
  ogImage: '/og-image.jpg',
}
