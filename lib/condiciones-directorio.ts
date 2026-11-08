// Texto de las condiciones del directorio de empresas. Versión vigente: ver TERMS_VERSION en lib/directorio.ts.
// Si cambia el texto: nueva versión, copia en legal/condiciones-directorio/<versión>.md y aviso de 15 días a las fichas activas.
// Sin precios ni reclamos de precio o de ventas en estos textos: verify-build los rechaza en cualquier página.
// Marcas: {{email}} = correo de contacto; {{privacidad}} y {{aviso}} = enlaces internos.

export type Clausula = { titulo: string; texto: string[] };

export const CONDICIONES: Clausula[] = [
  {
    titulo: "1. Quién edita el directorio",
    texto: [
      "El directorio lo edita MKTWEB360, S.L.U. (CIF B87679304), Calle Chopo 98, 45215 El Viso de San Juan (Toledo), inscrita en el Registro Mercantil de Madrid, Tomo 35360, Folio 45, Sección 8, Hoja M-635651. Contacto: {{email}}. Más datos en el {{aviso}}.",
      "MKTWEB360, S.L.U. es también la empresa que figura entre las fichas del directorio. Esa ficha está identificada como ficha de la empresa editora.",
    ],
  },
  {
    titulo: "2. Qué es",
    texto: [
      "Un directorio de empresas, agencias y herramientas para emprendedores digitales. Cada ficha la redacta la propia empresa. Que una empresa aparezca en el directorio no supone recomendación, garantía ni aval de sus servicios. El alta básica es gratuita.",
    ],
  },
  {
    titulo: "3. Quién puede darse de alta",
    texto: [
      "Empresas y profesionales que actúan en el ámbito de su actividad y que pueden representar a la empresa que dan de alta. Al darse de alta, la persona declara que actúa con fines profesionales y no como consumidora, y que los datos que facilita son veraces y están actualizados.",
    ],
  },
  {
    titulo: "4. Revisión previa y significado de «Ficha revisada»",
    texto: [
      "Revisamos cada ficha antes de publicarla y cada cambio de una ficha ya publicada. La revisión es editorial y básica: comprobamos que la ficha esté completa, que no lleve precios ni reclamos de precio o de ventas, que el enlace a la web funcione y que no haya indicios evidentes de ilegalidad o engaño.",
      "La insignia «Ficha revisada» significa solo eso. No es un aval, una certificación ni una verificación de la empresa: no comprobamos su identidad, su solvencia, su calidad ni la exactitud de lo que dice. Hoy no ofrecemos ninguna insignia de «empresa verificada».",
      "Podemos rechazar, pausar o retirar una ficha, avisando a la empresa del motivo, si incumple estas condiciones o la ley.",
    ],
  },
  {
    titulo: "5. Contenido de la empresa y licencia",
    texto: [
      "La empresa es responsable del contenido que envía (textos, logotipos, imágenes, marcas, servicios, ofertas, preguntas frecuentes y noticias) y garantiza que tiene derecho a usarlo, incluidos los derechos de propiedad intelectual e industrial y, si aparecen personas, su consentimiento.",
      "Mientras la ficha esté publicada, la empresa nos concede una licencia no exclusiva, gratuita y revocable para reproducir ese contenido, adaptar su tamaño y formato y mostrarlo en el directorio, en las vistas previas y en los datos estructurados que genera. La licencia termina cuando se retira la ficha, salvo las copias en cachés o buscadores que no controlamos.",
      "La empresa mantendrá indemne a MKTWEB360, S.L.U. frente a las reclamaciones de terceros por ese contenido, en la medida en que la ley lo permita.",
    ],
  },
  {
    titulo: "6. Reglas de contenido y enlaces",
    texto: [
      "No se admiten precios en euros ni reclamos de precio o de ventas, datos personales de terceros, contenido ilegal, engañoso u ofensivo, contenido que infrinja derechos de otras personas, ni enlaces a páginas con ese contenido.",
      "Los enlaces a la web de la empresa se publican con los atributos de contenido enviado por usuarios (ugc, nofollow) y, en los planes de pago, también con el de enlace patrocinado (sponsored). No vendemos posiciones: el orden del directorio es alfabético y no depende del plan.",
    ],
  },
  {
    titulo: "7. Planes y publicidad",
    texto: [
      "El plan gratuito es gratuito y podrá incluir publicidad de terceros, siempre identificada como tal y separada del contenido de la ficha. Los planes de pago añaden funciones y, mientras estén vigentes, no incluyen publicidad en la ficha. Las condiciones económicas de cada plan (importe, impuestos, duración, renovación y baja) se muestran antes de contratar y forman parte del contrato. Hoy los planes se gestionan a petición de la empresa.",
    ],
  },
  {
    titulo: "8. Avisos sobre contenidos",
    texto: [
      "Cualquier persona puede avisarnos de un contenido que considere ilegal o que vulnere sus derechos desde el enlace «Avisar de un contenido» de cada ficha o escribiendo a {{email}}. Conviene indicar la dirección de la ficha, qué contenido concreto y por qué, el nombre y el correo de quien avisa, cómo acredita su derecho si es un derecho propio (marca, imagen, autoría) y que lo comunica de buena fe.",
      "Respondemos en el menor plazo posible y, salvo casos complejos, en 3 días laborables. Si el aviso es verosímil, podemos ocultar la ficha mientras la revisamos. Informamos a la empresa del motivo.",
    ],
  },
  {
    titulo: "9. Datos personales",
    texto: [
      "Tratamos los datos de la persona de contacto según la {{privacidad}}. Los derechos se ejercen escribiendo a {{email}}.",
    ],
  },
  {
    titulo: "10. Comunicaciones",
    texto: [
      "Enviamos los avisos de la ficha y un informe mensual de visitas y clics, con un enlace de baja. Solo enviamos ofertas y novedades a quien marque la casilla opcional y confirme su correo; no es condición para el alta y puede retirarse en cualquier momento.",
    ],
  },
  {
    titulo: "11. Baja",
    texto: [
      "La empresa puede dar de baja su ficha en cualquier momento desde el botón «Dar de baja mi ficha» de su panel, o pedirlo por correo a {{email}}. La ficha deja de mostrarse de inmediato; en la web puede tardar hasta una hora en desaparecer del todo. Conservamos los datos de contacto un máximo de 30 días por si la empresa cambia de idea y después los eliminamos, salvo los que debamos conservar por obligación legal. Los planes de pago se rigen por sus condiciones de contratación.",
    ],
  },
  {
    titulo: "12. Responsabilidad",
    texto: [
      "Ofrecemos el directorio «tal cual». No garantizamos su disponibilidad continua ni que genere visitas o clientes. Nuestra responsabilidad se limita a los daños directos que causemos por culpa o negligencia graves y excluye el lucro cesante y los daños indirectos, en la medida en que la ley lo permita.",
    ],
  },
  {
    titulo: "13. Cambios",
    texto: [
      "Podemos cambiar estas condiciones. Los cambios sustanciales se comunican por correo a las empresas con ficha activa con 15 días de antelación; si no están de acuerdo, pueden dar de baja la ficha antes de que entren en vigor. En cada alta se guarda la versión de las condiciones aceptada.",
    ],
  },
  {
    titulo: "14. Ley aplicable",
    texto: [
      "Estas condiciones se rigen por la ley española. Para las controversias serán competentes los juzgados que correspondan al domicilio del titular, sin perjuicio de los fueros imperativos que apliquen.",
    ],
  },
];
