import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/data/posts";
import { getProductBySlug } from "@/data/products";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.emprendedigital.es/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date },
  };
}

// productSlug (opcional) engancha un CTA de afiliado al final de la sección.
type ArticleSection = { heading: string; body: string; productSlug?: string };

const articleContent: Record<string, {
  intro: string;
  sections: ArticleSection[];
  comparison?: { headers: string[]; rows: string[][] };
  conclusion: string;
  faqs: Array<{ q: string; a: string }>;
}> = {
  "mejor-silla-ergonomica-home-office-2025": {
    intro: "Pasar 8 horas al día en una silla de mala calidad acaba generando dolor lumbar, cervical y una productividad mermada que no compensa el ahorro inicial. Esta guía compara las dos mejores sillas ergonómicas del catálogo para home office —la SIHOO M57 y la Hbada Pro— en dos rangos de precio distintos, para que elijas según tus horas de uso y tu presupuesto.",
    sections: [
      {
        heading: "Los 5 criterios que definen una silla ergonómica real",
        body: "Antes de mirar marcas conviene tener claros los cinco criterios que separan una silla ergonómica de una silla de oficina con marketing. Primero, soporte lumbar que acompañe la curvatura de la columna, mejor si es ajustable y no un simple cojín fijo. Segundo, altura del asiento regulable en un rango amplio (de unos 40 a 52 cm) para adaptar los pies al suelo. Tercero, reposabrazos ajustables en varios ejes, no fijos. Cuarto, un respaldo que reclina y acompaña el movimiento en lugar de mantenerte rígido a 90°. Y quinto, materiales transpirables si vas a pasar muchas horas sentado. No todas las sillas cumplen los cinco, y saber cuáles priorizas es lo que decide la compra.",
      },
      {
        heading: "SIHOO M57: para quien pasa 8+ horas sentado",
        body: "La SIHOO M57 es la opción más completa del catálogo y la que mejor cumple los cinco criterios. Su soporte lumbar 3D se ajusta en altura y en profundidad, de modo que se adapta a la curvatura real de tu espalda en lugar de imponer una postura. Los reposabrazos 4D se mueven en altura, profundidad, anchura y ángulo, algo determinante para colocar los antebrazos a la altura correcta del teclado. Suma reposacabezas ajustable, respaldo de malla transpirable, reclinación de 90° a 135° y una capacidad de 150 kg, la más alta del catálogo. A favor: el lumbar 3D, los reposabrazos 4D y la transpirabilidad. En contra: el mecanismo de reclinación podría ser más suave y el reposacabezas cuesta ajustarlo al principio.",
        productSlug: "sihoo-m57-silla-ergonomica",
      },
      {
        heading: "Hbada Pro: el equilibrio calidad-precio",
        body: "La Hbada Pro es una de las sillas ergonómicas más vendidas en Amazon España por debajo de los 200 euros, y su argumento es la comodidad para reclinarse. Su respaldo de malla transpirable llega hasta 155° de reclinación, más que la SIHOO M57, lo que la hace especialmente cómoda para las pausas. Incluye soporte lumbar integrado en el respaldo y reposabrazos plegables, prácticos para guardar la silla bajo la mesa. Soporta 120 kg. A favor: la reclinación de 155°, los reposabrazos plegables y el precio de 189 euros. En contra: el soporte lumbar no se ajusta de forma independiente y no tiene reposacabezas regulable, así que si buscas máxima personalización postural se queda por detrás de la SIHOO.",
        productSlug: "hbada-silla-ergonomica-pro",
      },
      {
        heading: "¿Cuál elegir según tu perfil?",
        body: "Si trabajas más de seis horas diarias y quieres configurar la silla a tu morfología exacta —lumbar ajustable de verdad, reposabrazos 4D y reposacabezas—, la SIHOO M57 es la compra correcta y los 60 euros extra se amortizan en confort a lo largo de los años. Si tus jornadas son más cortas, valoras poder reclinarte a 155° para las pausas y no necesitas ni reposacabezas ni ajuste lumbar independiente, la Hbada Pro entrega casi toda la comodidad por menos dinero. Un criterio práctico: cuanto más tiempo pases sentado y más específica sea tu postura, más valor tiene la capacidad de ajuste de la SIHOO.",
      },
    ],
    comparison: {
      headers: ["Criterio", "SIHOO M57", "Hbada Pro"],
      rows: [
        ["Precio", "249,00 €", "189,00 €"],
        ["Soporte lumbar", "3D ajustable (altura y profundidad)", "Integrado, no independiente"],
        ["Reposabrazos", "4D", "Plegables 2D"],
        ["Reposacabezas", "Ajustable", "No"],
        ["Reclinación", "90°-135°", "Hasta 155°"],
        ["Capacidad máx.", "150 kg", "120 kg"],
        ["Mejor para", "Jornadas largas y personalización", "Equilibrio y reclinado cómodo"],
      ],
    },
    conclusion: "Para jornadas de más de seis horas diarias, la SIHOO M57 se amortiza en salud y productividad gracias a su lumbar 3D y sus reposabrazos 4D: es la silla que puedes configurar a tu espalda. Si buscas una silla cómoda para reclinarte, priorizas el precio y no necesitas reposacabezas ni ajuste lumbar independiente, la Hbada Pro a 189 euros es la compra más inteligente. Ninguna de las dos sustituye a las pausas activas cada hora, pero ambas eliminan el dolor postural que provoca una silla mala.",
    faqs: [
      { q: "¿Vale la pena gastar más de 200€ en una silla de oficina?", a: "Si trabajas desde casa más de seis horas diarias, sí. El coste diario de una silla de 249 euros usada durante cinco años es inferior al de un café. El coste de una consulta de fisioterapia por dolor lumbar crónico multiplica ese gasto varias veces, así que la silla correcta es una de las inversiones con mejor retorno de un home office." },
      { q: "¿Cuánto dura una silla ergonómica de calidad?", a: "Con uso doméstico normal (un usuario, 8 horas al día), entre 8 y 15 años. En las sillas de malla, el tejido suele degradarse antes que la estructura metálica. La garantía es un buen indicador de calidad: una garantía muy corta en una silla cara es una señal de alerta sobre la confianza del propio fabricante en su producto." },
      { q: "¿Es mejor la silla de malla o la de tela?", a: "Para climas cálidos o personas que sudan mucho, la malla es más transpirable y mantiene la espalda fresca en verano. Para climas fríos, la tela o el cuero resultan más cómodos en invierno. Como contrapartida, la malla tiene menor vida útil que un buen tapizado de tela o cuero de calidad. Las dos sillas de esta guía son de malla, la opción más habitual en España." },
      { q: "¿Se puede montar una silla ergonómica sin ayuda?", a: "Sí, la mayoría se monta en 20-40 minutos siguiendo las instrucciones, y tanto la SIHOO M57 como la Hbada Pro incluyen herramientas y manual. Conviene tener cerca a alguien para sostener el respaldo durante el momento de fijarlo al asiento, aunque no es imprescindible." },
    ],
  },

  "sihoo-m57-analisis-opinion": {
    intro: "La SIHOO M57 es una de las sillas ergonómicas más vendidas del segmento de precio medio en Amazon España. Su precio de 249 euros la sitúa en el territorio donde la competencia es seria. Esta guía analiza si lo que ofrece justifica ese precio frente a alternativas más asequibles como la Hbada Pro, y para quién es realmente la inversión correcta.",
    sections: [
      {
        heading: "Los ajustes de la SIHOO M57: qué significan en la práctica",
        body: "La ergonomía real de una silla se mide por lo que puedes ajustar, y aquí la M57 va sobrada para su precio. El soporte lumbar 3D se regula en altura y en profundidad, de forma que apoya la zona lumbar donde tu columna lo necesita y no donde el fabricante decidió. Los reposabrazos 4D se mueven en altura, profundidad, anchura y ángulo, lo que permite colocar los antebrazos exactamente a la altura del teclado y descargar los hombros. El reposacabezas se ajusta en altura e inclinación, y la reclinación va de 90° a 135° con bloqueo. Para una persona de estatura fuera del rango medio, esta capacidad de ajuste es especialmente valiosa: la silla se adapta a ti, no al revés.",
      },
      {
        heading: "Lo que más valoran los usuarios",
        body: "Con una valoración media de 4,4 sobre más de 2.800 reseñas, los puntos que más se repiten son tres. El primero, el soporte lumbar 3D que se adapta a la curvatura real de la columna en lugar de ser un cojín que se desplaza. El segundo, la transpirabilidad de la malla, que mantiene la espalda fresca en jornadas largas de verano. Y el tercero, la capacidad de 150 kg, la más alta del catálogo, que aporta sensación de solidez y cubre a la práctica totalidad de usuarios. La relación entre lo que ofrece y su precio es el argumento que la ha convertido en superventas.",
      },
      {
        heading: "Los puntos débiles reales",
        body: "Ninguna silla es perfecta, y la M57 tiene tres peros honestos. El mecanismo de reclinación podría ser más suave: el paso entre posiciones se nota algo brusco comparado con sillas premium de más del doble de precio. El reposacabezas cuesta ajustarlo correctamente las primeras veces hasta encontrar el punto que encaja con tu cuello. Y no incluye reposapiés, algo que en esta gama de precio tampoco es habitual pero conviene saber. Ninguno de estos puntos es determinante para su función principal, pero son los detalles donde se nota que no es una silla de 500 euros.",
      },
      {
        heading: "Para quién es la SIHOO M57",
        body: "La SIHOO M57 es la compra correcta si trabajas siete o más horas al día, quieres un soporte lumbar que se ajuste de verdad a tu espalda y valoras tener reposacabezas y reposabrazos 4D. También si vas a usar la silla durante cinco años o más y quieres amortizarla bien: su capacidad de ajuste la hace adecuada para distintas personas y morfologías a lo largo del tiempo.",
        productSlug: "sihoo-m57-silla-ergonomica",
      },
      {
        heading: "Cuándo la Hbada Pro es suficiente",
        body: "Si tus jornadas son de cuatro a seis horas, tu presupuesto máximo ronda los 190 euros o priorizas poder reclinarte a 155° sobre el ajuste lumbar independiente, la Hbada Pro cubre lo esencial por 60 euros menos. Ofrece soporte lumbar integrado, reposabrazos plegables y una malla transpirable igual de fresca. Renuncias al reposacabezas ajustable y al lumbar 3D, pero para muchos usuarios sin patología postural previa eso no marca la diferencia en el día a día.",
        productSlug: "hbada-silla-ergonomica-pro",
      },
    ],
    comparison: {
      headers: ["Aspecto", "SIHOO M57", "Hbada Pro"],
      rows: [
        ["Precio", "249,00 €", "189,00 €"],
        ["Soporte lumbar", "3D ajustable", "Integrado"],
        ["Reposacabezas", "Ajustable", "No"],
        ["Reposabrazos", "4D", "Plegables 2D"],
        ["Reclinación", "90°-135°", "Hasta 155°"],
        ["Capacidad", "150 kg", "120 kg"],
        ["Valoración", "4,4 (2.800 reseñas)", "4,2 (4.500 reseñas)"],
      ],
    },
    conclusion: "La SIHOO M57 justifica su precio si la vas a usar muchas horas al día durante años y quieres un lumbar que se ajuste a tu espalda, además de reposacabezas y reposabrazos 4D. Si tus jornadas son más cortas o priorizas reclinarte cómodamente sobre la personalización, la Hbada Pro entrega gran parte del valor por 60 euros menos. En su rango de precio, la M57 es una de las sillas ergonómicas más equilibradas del mercado español.",
    faqs: [
      { q: "¿La SIHOO M57 aguanta personas altas?", a: "Sí. El reposacabezas ajustable en altura y la reclinación regulable la hacen adecuada para personas altas, y su capacidad máxima de 150 kg —la más alta del catálogo— cubre a la mayoría de usuarios con margen de sobra." },
      { q: "¿Viene con instrucciones claras para el montaje?", a: "Incluye manual con ilustraciones que permiten el montaje en 20-40 minutos sin conocimientos previos. Conviene tener cerca a alguien para sostener el respaldo en el momento de fijarlo al asiento, aunque no es imprescindible hacerlo entre dos personas." },
      { q: "¿Es la SIHOO M57 buena para el dolor de espalda?", a: "Para el dolor lumbar por mala postura al sentarse, su soporte lumbar 3D ajustable ayuda de forma notable porque apoya la columna donde lo necesita. Para dolor con una causa estructural diagnosticada (hernia, escoliosis), es parte de la solución pero no la única: consulta con tu fisioterapeuta antes de comprar cualquier silla." },
      { q: "¿Se puede devolver si no resulta cómoda?", a: "A través de Amazon España, sí, dentro de los primeros 30 días. Es la forma más segura de probarla en tu propio puesto de trabajo con garantía de devolución si no se adapta a ti." },
    ],
  },

  "escritorio-regulable-altura-home-office": {
    intro: "Alternar entre sentado y de pie durante la jornada reduce el dolor lumbar, mejora la energía por la tarde y aumenta el gasto calórico diario de forma pasiva. Un escritorio regulable es la inversión de productividad con mayor impacto por euro gastado en un home office. Esta guía compara los dos escritorios eléctricos del catálogo, el FlexiSpot E7 Pro y el FlexiSpot EG1, para que elijas según tu espacio, tu setup y tu presupuesto.",
    sections: [
      {
        heading: "Doble motor vs motor único: cuál elegir",
        body: "La diferencia técnica que más condiciona la compra es el número de motores. El E7 Pro monta doble motor sincronizado: sube y baja el tablero de forma más uniforme, con más estabilidad a altura máxima, menos ruido y una capacidad de carga muy superior (125 kg). El EG1 usa un motor único, más económico, con una carga máxima de 70 kg. En la práctica, el doble motor se nota sobre todo cuando cargas el escritorio con dos monitores y varios periféricos, o cuando lo subes a su máxima altura con peso encima. Para un setup de un solo monitor, el motor único cumple sin problema.",
      },
      {
        heading: "FlexiSpot E7 Pro: el más completo",
        body: "El E7 Pro es el escritorio ajustable de referencia del catálogo. Su doble motor sincronizado mueve el tablero a 4 cm/s en un rango de 58 a 123 cm, soporta 125 kg y guarda cuatro alturas en memoria, de modo que pasar de sentado a de pie es cuestión de pulsar un botón. Incluye tablero de 140×70 cm en melamina de 18 mm, espacio de sobra para dos monitores, teclado y accesorios, y la garantía del motor es de cinco años. A favor: estabilidad, carga, cuatro memorias y garantía larga. En contra: el precio de 449 euros, que el montaje requiere dos personas por el peso, y que no incluye sistema de gestión de cables.",
        productSlug: "flexispot-e7-pro-escritorio-ajustable",
      },
      {
        heading: "FlexiSpot EG1: la entrada más económica",
        body: "El EG1 es la puerta de entrada a los escritorios eléctricos: por 199 euros ofrece las ventajas de trabajar de pie sin la inversión del E7 Pro. Su motor único con detección de obstáculos regula la altura entre 71 y 121 cm, soporta 70 kg y guarda dos alturas en memoria. El tablero es de 120×60 cm, suficiente para un setup de un monitor, y es compatible con tableros de IKEA si más adelante quieres ampliarlo. La garantía del motor es de tres años. A favor: precio, marca reconocida y compatibilidad con tableros IKEA. En contra: con carga alta es algo menos estable que el E7 Pro, solo guarda dos memorias y el tablero es básico.",
        productSlug: "flexispot-eg1-escritorio-ajustable",
      },
      {
        heading: "¿Cuál elegir según tu perfil?",
        body: "Si cambias de postura varias veces al día, tienes un setup con dos monitores o quieres un escritorio que dure años sin quedarse corto, el E7 Pro es la elección: su doble motor y sus cuatro memorias marcan la diferencia en el uso diario. Si tu setup es de un solo monitor, el presupuesto manda y valoras poder reutilizar o ampliar el tablero con piezas de IKEA, el EG1 entrega el mismo concepto —alternar sentado y de pie— por menos de la mitad de precio. Un error común es comprar el modelo más barato para un setup pesado: si vas a cargar 25-30 kg de equipo, el margen del E7 Pro compensa.",
      },
    ],
    comparison: {
      headers: ["Criterio", "FlexiSpot E7 Pro", "FlexiSpot EG1"],
      rows: [
        ["Precio", "449,00 €", "199,00 €"],
        ["Motor", "Doble sincronizado", "Único"],
        ["Rango de altura", "58-123 cm", "71-121 cm"],
        ["Carga máx.", "125 kg", "70 kg"],
        ["Memoria de alturas", "4 posiciones", "2 posiciones"],
        ["Tablero", "140×70 cm incluido", "120×60 cm"],
        ["Garantía motor", "5 años", "3 años"],
      ],
    },
    conclusion: "El FlexiSpot E7 Pro es el mejor escritorio regulable del catálogo para uso intensivo: doble motor, 125 kg de carga y cuatro memorias justifican su precio si lo vas a usar años con un setup exigente. El EG1 es la puerta de entrada correcta a 199 euros para quien tiene un setup ligero y quiere empezar a trabajar de pie sin la inversión del E7 Pro. Los dos cumplen el objetivo esencial: sacarte de la silla varias veces al día.",
    faqs: [
      { q: "¿Cuánto tiempo al día hay que trabajar de pie?", a: "La recomendación general es alternar: unos 20-30 minutos de pie por cada hora sentado. Lo sensato es empezar con una o dos horas de pie al día e ir aumentando de forma progresiva. Estar de pie toda la jornada tampoco es ideal, porque genera su propia fatiga: la clave está en variar de postura, no en sustituir un extremo por otro." },
      { q: "¿Necesito una alfombrilla antifatiga con el escritorio de pie?", a: "Es muy recomendable si vas a estar de pie más de 30 minutos seguidos. Una alfombrilla antifatiga reduce de forma notable la fatiga en piernas y pies al trabajar de pie, porque favorece pequeños movimientos musculares que mejoran la circulación. Es un complemento barato que marca la diferencia en la comodidad del modo de pie." },
      { q: "¿El FlexiSpot E7 Pro hace mucho ruido al subir?", a: "El doble motor del E7 Pro es notablemente silencioso comparado con los escritorios de un solo pistón. En una oficina en casa el ruido es perfectamente tolerable y no interrumpe una videollamada, sobre todo teniendo en cuenta que el movimiento dura solo unos segundos." },
      { q: "¿Se puede montar el escritorio solo?", a: "Sí, aunque es más cómodo con ayuda para colocar el tablero, sobre todo el de 140×70 cm del E7 Pro. El montaje completo lleva entre 45 y 90 minutos según el modelo. FlexiSpot ofrece instrucciones en vídeo en su web para acompañar el manual." },
    ],
  },

  "flexispot-e7-pro-analisis-opinion": {
    intro: "El FlexiSpot E7 Pro es el escritorio regulable en altura más mencionado en guías de home office. Su combinación de doble motor, garantía de cinco años en el motor y 125 kg de carga lo ha convertido en el estándar de referencia del catálogo. Esta guía analiza qué hay detrás de esa reputación y cuándo tiene sentido comprarlo frente al EG1, su hermano de entrada.",
    sections: [
      {
        heading: "Motor dual vs motor simple: por qué importa",
        body: "Los escritorios con un solo motor son más lentos y transmiten más vibración a altura máxima. El E7 Pro usa dos motores sincronizados que suben y bajan el tablero de forma uniforme a 4 cm/s, con menos ruido y mayor estabilidad estructural cuando el escritorio está elevado con peso encima. La diferencia se aprecia sobre todo en dos situaciones: cuando cargas dos monitores y varios periféricos, y cuando trabajas de pie a la altura máxima. Ahí el doble motor evita el balanceo lateral que sí aparece en modelos más básicos.",
      },
      {
        heading: "La garantía y la carga: qué cubren",
        body: "El E7 Pro declara una garantía de cinco años en el motor y una capacidad de carga de 125 kg. Para una pieza de mobiliario que se usa a diario y que sube y baja miles de veces a lo largo de su vida, una garantía larga en el componente más caro de reparar —el motor— es un indicador real de la confianza del fabricante en su propio producto. Los 125 kg, por su parte, dan un margen amplio: un setup de home office exigente rara vez supera los 30-40 kg entre monitores, soporte y accesorios.",
      },
      {
        heading: "Puntos débiles reales",
        body: "El E7 Pro tiene tres peros honestos. El primero es el precio: 449 euros lo colocan en la gama alta doméstica. El segundo es el montaje: la estructura de doble motor es pesada y colocar el tablero de 140×70 cm es incómodo en solitario, así que conviene hacerlo entre dos personas. Y el tercero es que no incluye sistema de gestión de cables, algo que conviene planificar antes del montaje para que los cables no queden colgando ni se tensen al subir y bajar el tablero. Ninguno es determinante, pero son los detalles a tener en cuenta antes de comprar.",
      },
      {
        heading: "Para quién es el FlexiSpot E7 Pro",
        body: "El E7 Pro es la compra correcta si haces trabajo remoto de siete o más horas al día, tienes un setup con dos monitores o equipo pesado, y quieres un escritorio que dure entre cinco y diez años sin quedarse corto. Su doble motor, sus cuatro memorias de altura y su garantía larga están pensados precisamente para ese uso intensivo y prolongado.",
        productSlug: "flexispot-e7-pro-escritorio-ajustable",
      },
      {
        heading: "Cuándo el EG1 es suficiente",
        body: "Si tu setup es de un solo monitor y cambias de postura una o dos veces al día, el motor único del EG1 cumple sin problema. A 199 euros es menos de la mitad del precio del E7 Pro, con un rango de alturas similar (71-121 cm) y compatibilidad con tableros de IKEA por si quieres personalizarlo. Renuncias a dos memorias de altura, a algo de estabilidad con carga alta y a dos años de garantía, pero para un uso ligero la diferencia práctica es pequeña.",
        productSlug: "flexispot-eg1-escritorio-ajustable",
      },
    ],
    comparison: {
      headers: ["Característica", "FlexiSpot E7 Pro", "FlexiSpot EG1"],
      rows: [
        ["Precio", "449,00 €", "199,00 €"],
        ["Motor", "Doble sincronizado", "Único"],
        ["Velocidad de subida", "4 cm/s", "Estándar"],
        ["Memoria de posiciones", "4", "2"],
        ["Carga máx.", "125 kg", "70 kg"],
        ["Garantía motor", "5 años", "3 años"],
      ],
    },
    conclusion: "El FlexiSpot E7 Pro es la compra correcta si cambias de postura varias veces al día, tienes un setup pesado y quieres un escritorio que dure años sin quedarse corto. Si tu setup es ligero y cambias de altura de forma ocasional, el EG1 entrega el mismo concepto por menos de la mitad de precio. La pregunta que decide no es cuál es mejor sobre el papel, sino cuánto vas a exigirle al escritorio en tu día a día.",
    faqs: [
      { q: "¿El FlexiSpot E7 Pro incluye tablero?", a: "Sí, incluye un tablero de 140×70 cm en melamina de 18 mm. A diferencia de otras configuraciones de FlexiSpot que venden solo la estructura (patas y controlador), en este conjunto el tablero viene incluido, con espacio de sobra para dos monitores y accesorios." },
      { q: "¿El E7 Pro es estable a altura máxima?", a: "A 123 cm con un equipo informático estándar la estabilidad es buena gracias al doble motor y a la estructura reforzada. Con cargas muy altas, cercanas a los 125 kg, conviene distribuir bien el peso sobre el tablero para minimizar cualquier oscilación." },
      { q: "¿Cuánto tarda en subir y bajar?", a: "A una velocidad de 4 cm/s, recorrer todo el rango de altura lleva solo unos segundos. Además, la memoria de cuatro alturas permite pasar de la posición sentado a la de pie con una sola pulsación, sin tener que buscar la altura cada vez." },
      { q: "¿Cuánto pesa el FlexiSpot E7 Pro?", a: "El conjunto es pesado, ya que suma la estructura de doble motor y el tablero de melamina. Por eso el montaje es más cómodo entre dos personas, sobre todo en el momento de dar la vuelta al escritorio ya montado. Tenlo en cuenta para el transporte hasta la habitación de destino." },
    ],
  },

  "home-office-setup-productivo-guia": {
    intro: "Un home office productivo no es el más caro ni el más estético: es el que elimina las fricciones que interrumpen el trabajo. Esta guía define qué comprar, en qué orden y cómo organizarlo para maximizar el rendimiento sin gastar de más, con tres niveles de inversión según tu situación.",
    sections: [
      {
        heading: "El orden correcto de inversión",
        body: "El error más común es empezar por lo llamativo en lugar de por lo que más impacta. El orden que prioriza el rendimiento real es este: primero la silla ergonómica, porque afecta directamente a la salud y a la concentración durante toda la jornada. Segundo, el monitor, que es el elemento que más horas miras. Tercero, la iluminación, que mejora tu imagen en videollamada y reduce la fatiga visual. Cuarto, teclado y ratón ergonómicos, por la salud de manos y muñecas. Quinto, el escritorio regulable, por la mejora postural a largo plazo. Y sexto, la organización y la gestión de cables. Este orden prioriza el impacto sobre la productividad, no la espectacularidad del montaje.",
      },
      {
        heading: "El mínimo viable para empezar",
        body: "Para arrancar no necesitas un setup completo. El mínimo funcional son tres cosas: una silla ergonómica básica, un monitor decente de al menos 24 pulgadas Full HD, y un teclado y un ratón cómodos. Con eso, casi cualquier mesa y espacio producen un home office operativo. Todo lo demás es optimización que puedes añadir cuando sepas qué te molesta de verdad. Empezar con lo esencial y ampliar sobre la marcha evita comprar cosas que luego resultan innecesarias.",
      },
      {
        heading: "El home office intermedio",
        body: "El siguiente escalón es donde la mayoría de trabajadores remotos están cómodos sin haberse gastado de más. Aquí la pieza central es una buena silla ergonómica: la Hbada Pro, por 189 euros, ofrece malla transpirable, reclinación hasta 155° y reposabrazos plegables, más que suficiente para una jornada estándar. Súmale un monitor de 27 pulgadas QHD, un teclado y un ratón inalámbricos y una webcam decente, y tienes un presupuesto total en el entorno de 600 a 900 euros para un puesto que cubre casi todo sin fricciones.",
        productSlug: "hbada-silla-ergonomica-pro",
      },
      {
        heading: "El home office completo",
        body: "El nivel completo elimina prácticamente todas las fricciones físicas del trabajo remoto. La silla sube a la SIHOO M57 (249 euros), con lumbar 3D ajustable, reposacabezas y reposabrazos 4D para jornadas largas y máxima personalización. A partir de ahí, añades doble monitor o un ultrawide, un teclado y un ratón premium tipo Logitech MX, y una buena iluminación frontal para las videollamadas. Es el setup de quien trabaja desde casa a tiempo completo y quiere que el equipamiento no sea nunca el cuello de botella.",
        productSlug: "sihoo-m57-silla-ergonomica",
      },
      {
        heading: "El escritorio que corona el setup",
        body: "La última pieza del home office completo es el escritorio regulable en altura, la mejora postural con mayor impacto a largo plazo. El FlexiSpot E7 Pro, por 449 euros, permite alternar entre trabajar sentado y de pie con doble motor y cuatro memorias de altura, y su tablero de 140×70 cm da espacio para el doble monitor. Con él, el presupuesto total del setup completo se sitúa entre 1.200 y 2.000 euros, según el resto de componentes que elijas.",
        productSlug: "flexispot-e7-pro-escritorio-ajustable",
      },
    ],
    comparison: {
      headers: ["Nivel", "Equipamiento clave", "Presupuesto aprox.", "Para quién"],
      rows: [
        ["Mínimo viable", "Silla básica + monitor + teclado y ratón", "300-500 €", "Empezar con lo esencial"],
        ["Intermedio", "Hbada Pro + monitor QHD + periféricos", "600-900 €", "La mayoría de trabajadores remotos"],
        ["Completo", "SIHOO M57 + FlexiSpot E7 Pro + todo", "1.200-2.000 €", "Trabajo remoto a tiempo completo"],
      ],
    },
    conclusion: "No montes el home office completo desde el principio. Empieza por la silla y el monitor, trabaja así dos o tres meses, identifica qué te molesta más y añade lo siguiente. El equipamiento que realmente necesitas se hace obvio cuando llevas tiempo trabajando desde casa, y ese enfoque progresivo evita gastar en cosas que luego no usas.",
    faqs: [
      { q: "¿Cuánto hay que gastar en un home office?", a: "El mínimo funcional está en 300-500 euros. El punto donde la mayoría de personas están cómodas sin haber gastado de más se sitúa entre 600 y 900 euros. Por encima de eso hay mejoras reales, pero con un retorno decreciente: cada euro extra aporta menos que el anterior una vez cubiertos la silla, el monitor y los periféricos." },
      { q: "¿Es mejor un monitor grande o dos monitores?", a: "Depende del tipo de trabajo. Para programar, diseñar o analizar datos, dos monitores suelen ser más productivos porque permiten tener varias fuentes a la vista. Para escritura, reuniones y trabajo enfocado, un monitor ultrawide o grande es suficiente y distrae menos. No hay una respuesta universal: depende de cuántas ventanas necesites ver a la vez." },
      { q: "¿Necesito dedicar una habitación entera al home office?", a: "No. Con un buen rincón de unos 2×2 metros, buena iluminación y la silla correcta se puede montar un home office productivo en casi cualquier espacio. La separación física del área de trabajo ayuda a la concentración y a desconectar al terminar, pero no es imprescindible para tener un puesto cómodo y funcional." },
      { q: "¿Se pueden deducir los gastos del home office en España?", a: "Sí, parcialmente, si eres autónomo o tienes actividad económica. La deducción se calcula en proporción al uso profesional del espacio y de los equipos, y hay que documentarla correctamente. Consulta con tu asesor fiscal la forma adecuada de justificarla, porque las reglas y los porcentajes admitidos dependen de tu situación concreta." },
    ],
  },

  "dolor-espalda-trabajar-casa-soluciones": {
    intro: "El dolor de espalda es la queja más común entre los trabajadores remotos. No es inevitable ni hay que aguantarlo: en la mayoría de casos tiene una causa ergonómica concreta y una solución directa. Esta guía identifica las causas más frecuentes y los cambios de equipamiento y hábitos que realmente las eliminan.",
    sections: [
      {
        heading: "Las 4 causas más frecuentes de dolor de espalda en home office",
        body: "La primera es una silla sin soporte lumbar adecuado: sin ese apoyo, la columna pierde su curvatura natural y los músculos compensan hasta fatigarse. La segunda es el monitor demasiado bajo, que obliga a inclinar la cabeza hacia abajo y genera tensión cervical y occipital. La tercera es el teclado y el ratón a una altura incorrecta, que tensan hombros y muñecas al mantener los brazos mal apoyados. Y la cuarta es la ausencia de pausas: por buena que sea la postura, los músculos se fatigan sin recuperación si pasas horas sin moverte. La mayoría de casos combinan dos o más de estas causas.",
      },
      {
        heading: "La solución más impactante: la silla correcta",
        body: "El soporte lumbar ajustable es el elemento individual más importante para prevenir el dolor de espalda. No un cojín que se desplaza y pierde firmeza, sino un soporte que sigue la curvatura real de la columna. La SIHOO M57, con su lumbar 3D ajustable en altura y profundidad, permite configurarlo exactamente a la morfología de cada persona, de modo que la zona lumbar queda apoyada donde tu espalda lo necesita. Sumado a los reposabrazos 4D, que descargan los hombros, es la solución que más problemas posturales resuelve de un solo cambio.",
        productSlug: "sihoo-m57-silla-ergonomica",
      },
      {
        heading: "La solución intermedia",
        body: "Si no necesitas la máxima personalización, la Hbada Pro cubre lo esencial por 189 euros: incluye soporte lumbar integrado en el respaldo y reclinación hasta 155°, que ayuda a variar la postura a lo largo del día. Para la mayoría de personas sin patología estructural previa, pasar de una silla blanda sin apoyo a una silla con lumbar y malla transpirable es suficiente para eliminar el dolor postural. No ajusta el lumbar de forma independiente como la SIHOO, pero para un uso moderado la diferencia es menor.",
        productSlug: "hbada-silla-ergonomica-pro",
      },
      {
        heading: "Hábitos que complementan el equipamiento",
        body: "El equipamiento correcto se potencia con hábitos correctos. La regla 20-20-20 (cada 20 minutos, mirar a 20 metros durante 20 segundos) descansa la vista y obliga a un microdescanso. Las pausas de cinco minutos cada hora para levantarse y moverte evitan que los músculos se agarroten. Ajustar el monitor para que su borde superior quede a la altura de los ojos elimina la inclinación cervical. Y colocar el teclado a la altura del codo, con los antebrazos apoyados, descarga hombros y muñecas. Ninguno cuesta dinero y juntos multiplican el efecto de una buena silla.",
      },
      {
        heading: "Cuándo la silla no es suficiente",
        body: "Si el dolor persiste más de dos semanas después de mejorar el equipamiento y los hábitos, conviene consultar con un fisioterapeuta. Hay causas estructurales —hernias, escoliosis, contracturas crónicas— que ninguna silla puede corregir por sí sola, y en esos casos el equipamiento ergonómico es una parte de la solución, no toda. La regla práctica: la ergonomía previene y alivia el dolor postural, pero no sustituye a un diagnóstico cuando el dolor es intenso o no cede.",
      },
    ],
    comparison: {
      headers: ["Causa", "Síntoma", "Solución"],
      rows: [
        ["Silla sin soporte lumbar", "Dolor lumbar crónico", "Silla ergonómica con lumbar ajustable (p. ej. SIHOO M57)"],
        ["Monitor demasiado bajo", "Dolor cervical y occipital", "Elevar el monitor a la altura de los ojos"],
        ["Reposabrazos incorrectos", "Tensión en hombros y muñecas", "Reposabrazos 4D a la altura del codo"],
        ["Ausencia de pausas", "Fatiga muscular generalizada", "Pausas activas cada 45-60 minutos"],
      ],
    },
    conclusion: "El dolor de espalda al trabajar desde casa tiene solución ergonómica en la mayoría de casos. La inversión en una silla con soporte lumbar real, un monitor a la altura correcta y pausas activas elimina la mayor parte de los problemas posturales sin necesidad de fisioterapia. Si tras esos cambios el dolor persiste más de dos semanas, es momento de consultar con un profesional: hay causas que el equipamiento no puede resolver por sí solo.",
    faqs: [
      { q: "¿Una silla ergonómica cura el dolor de espalda?", a: "No lo cura: lo previene y lo alivia. Si el dolor tiene una causa estructural (hernia, escoliosis diagnosticada), una silla ergonómica es parte de la solución pero no la única. Siempre consulta con un médico o fisioterapeuta si el dolor es intenso o persistente, porque el equipamiento no sustituye a un diagnóstico." },
      { q: "¿Es mejor sentarse recto o reclinado?", a: "Sentarse ligeramente reclinado, en torno a 100-110°, reduce más la presión sobre los discos intervertebrales que la postura totalmente recta a 90°. Pero la clave real no es una postura perfecta única, sino variar de posición a lo largo del día: la mejor postura es siempre la siguiente, no una sola mantenida durante horas." },
      { q: "¿Sirve un cojín lumbar de memoria de forma?", a: "Es mejor que nada, pero inferior a un soporte lumbar integrado en la silla que se ajusta a tu morfología. Los cojines externos tienden a desplazarse con el movimiento y a perder firmeza con el tiempo, mientras que un lumbar como el de la SIHOO M57 mantiene el apoyo fijo en el punto que has configurado." },
      { q: "¿Cuánto tiempo tarda en notarse la mejoría con una silla ergonómica?", a: "La mayoría de usuarios notan una reducción del dolor en una a tres semanas. La adaptación a la nueva postura tarda unos días, así que es normal sentir algo de incomodidad al principio si venías de una silla muy blanda: el cuerpo necesita acostumbrarse a un apoyo que trabaja de otra manera." },
    ],
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = articleContent[slug];
  const relatedProducts = post.relatedProducts?.map((s) => getProductBySlug(s)).filter(Boolean) ?? [];
  const relatedPosts = post.relatedPosts?.map((s) => getPostBySlug(s)).filter(Boolean) ?? [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "EmprendeDigital.es", url: "https://www.emprendedigital.es" },
    publisher: {
      "@type": "Organization",
      name: "EmprendeDigital.es",
      logo: { "@type": "ImageObject", url: "https://www.emprendedigital.es/logo.png", width: 200, height: 200 },
    },
  };

  // NOTA: desde 2023 Google restringe los rich results de FAQPage a webs
  // gubernamentales y del ámbito sanitario, así que en un sitio afiliado como
  // este no generará resultado enriquecido en Google. Se mantiene porque sigue
  // siendo schema válido y lo aprovechan otros buscadores y los motores de IA.
  const faqSchema = content?.faqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-indigo-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-indigo-200">{post.category}</span>
          </nav>
          <span className="inline-block text-xs font-semibold bg-orange-500 px-2 py-0.5 rounded-full mb-3">{post.category}</span>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">{post.title}</h1>
          <p className="text-indigo-100 mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-indigo-300">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <span>·</span>
            <span>{post.readTime} de lectura</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {relatedProducts.length > 0 && <AffiliateDisclosure />}

        {content && (
          <article>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{content.intro}</p>

            {content.sections.map((section) => {
              const ctaProduct = section.productSlug ? getProductBySlug(section.productSlug) : undefined;
              return (
                <section key={section.heading} className="mb-8">
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3">{section.heading}</h2>
                  <p className="text-gray-700 leading-relaxed">{section.body}</p>
                  {ctaProduct && (
                    <a
                      href={amazonLink(ctaProduct.asin)}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
                    >
                      Ver {ctaProduct.name} en Amazon · {ctaProduct.price}
                    </a>
                  )}
                </section>
              );
            })}

            {content.comparison && (
              <section className="mb-8">
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">Comparativa</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-indigo-600 text-white">
                        {content.comparison.headers.map((h) => (
                          <th key={h} className="px-3 py-2 text-left font-semibold text-xs">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {content.comparison.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          {row.map((cell, j) => (
                            <td key={j} className={`px-3 py-2 border-b border-gray-100 text-xs ${j === 0 ? "font-semibold text-gray-800" : "text-gray-700"}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h2 className="text-lg font-extrabold text-gray-900 mb-3">Conclusión</h2>
              <p className="text-gray-700 leading-relaxed">{content.conclusion}</p>
            </section>
          </article>
        )}

        {relatedProducts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Productos mencionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProducts.map((p) => p && (
                <div key={p.slug} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-indigo-200 transition-all group">
                  {p.badge && (
                    <span className="inline-block text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full mb-3">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug text-sm">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{p.shortDescription}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-lg text-gray-900">{p.price}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-sm font-medium">{p.rating}</span>
                      <span className="text-xs text-gray-400">({p.reviewCount})</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/tienda/${p.categorySlug}/${p.slug}`}
                      className="flex-1 text-center text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg py-2 transition-colors"
                    >
                      Ver análisis →
                    </Link>
                    <a
                      href={amazonLink(p.asin)}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex-1 text-center text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg py-2 transition-colors"
                    >
                      Amazon →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {relatedProducts[0] && (
              <div className="mt-3 text-center">
                <Link href={`/tienda/${relatedProducts[0].categorySlug}`} className="text-sm text-indigo-700 hover:text-indigo-900 font-semibold">
                  Ver más en esta categoría →
                </Link>
              </div>
            )}
          </section>
        )}

        {content?.faqs && content.faqs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {content.faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {relatedPosts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Artículos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((p) => p && (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-400 hover:shadow-sm transition-all"
                >
                  <span className="inline-block text-xs font-semibold text-indigo-700 mb-1.5">{p.category}</span>
                  <h3 className="font-bold text-gray-900 leading-snug mb-1">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="border-t border-gray-200 pt-6">
          <Link href="/blog" className="text-indigo-700 hover:text-indigo-900 font-semibold text-sm">
            ← Volver al blog
          </Link>
        </div>
      </div>
    </>
  );
}
