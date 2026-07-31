import livingImg from '../assets/gallery/living-1.webp';
import comedorImg from '../assets/gallery/comedor-1.webp';
import dormitorioImg from '../assets/gallery/dormitorio-1.webp';
import banoImg from '../assets/gallery/bano-1.webp';

const whatsappNumber = "5351936206";
const whatsappMessage = "Hola, me gustaría cotizar un proyecto de renders de interiores.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
const instagramLink = "https://www.instagram.com/kromarenders/";
const facebookLink = "https://www.facebook.com/share/19CgCRMBiP/";

export const siteData = {
  brand: {
    name: "Kroma Renders",
    tagline: "Renders de interiores que ayudan a cerrar proyectos.",
  },
  meta: {
    title: "Kroma Renders — Renders de Interiores para Arquitectos y Diseñadores",
    description:
      "Renders hiperrealistas de interiores en 3 días. Para arquitectos, diseñadores de interiores e inmobiliarias que necesitan aprobar presupuestos rápido.",
  },
  nav: {
    links: [
      { label: "Servicio", href: "#servicio" },
      { label: "Proceso", href: "#proceso" },
      { label: "Precios", href: "#precios" },
      { label: "Portafolio", href: "#portafolio" },
    ],
    cta: "Hablemos de tu Proyecto",
  },
  hero: {
    eyebrow: "Renders de Interiores para Arquitectos y Diseñadores",
    headline: "De tus planos a una decisión aprobada.",
    headlineAccent: "En 3 días.",
    subheadline:
      "Renders hiperrealistas de interiores para que tus clientes visualicen el espacio y aprueben el presupuesto sin dudar. Entrega garantizada, revisiones incluidas.",
    ctaPrimary: "Hablemos de tu Proyecto",
    ctaSecondary: "Ver Portafolio",
  },
  valueProps: {
    eyebrow: "El Servicio",
    title: "Por Qué Elegir Kroma Renders",
    items: [
      {
        icon: "zap",
        title: "Entrega en 3 Días",
        description:
          "Sin esperas de semanas: recibes tus renders listos para presentar en el tiempo que tu cliente tarda en decidir.",
      },
      {
        icon: "shield-check",
        title: "2 Revisiones Incluidas",
        description:
          "Rondas de ajuste estructuradas por contrato, para proteger tu tiempo y asegurar el resultado que imaginaste.",
      },
      {
        icon: "briefcase",
        title: "Pensado para Profesionales",
        description:
          "Trabajamos solo con arquitectos, diseñadores de interiores e inmobiliarias que necesitan cerrar propuestas rápido.",
      },
    ],
  },
  process: {
    eyebrow: "El Proceso",
    title: "Cómo Funciona",
    subtitle: "De tu brief a un render listo para presentar, en 5 pasos.",
    steps: [
      {
        number: "01",
        title: "Envías tu Brief",
        description: "Planos, referencias y la visión del espacio que quieres mostrar.",
      },
      {
        number: "02",
        title: "Confirmas con el 50%",
        description: "Iniciamos el modelado 3D apenas se confirma el anticipo.",
      },
      {
        number: "03",
        title: "Modelamos y Renderizamos",
        description: "En 3 días tienes tus imágenes con marca de agua, listas para revisión.",
      },
      {
        number: "04",
        title: "Ajustas si Hace Falta",
        description: "2 rondas de revisión menores incluidas, sin costo extra.",
      },
      {
        number: "05",
        title: "Recibes la Entrega Final",
        description: "Pagas el 50% restante y recibes tus renders en alta resolución.",
      },
    ],
  },
  pricing: {
    eyebrow: "Precios",
    title: "Inversión",
    subtitle: "Tarifa por paquete de imágenes, no por metro cuadrado.",
    package: {
      name: "Paquete Inicial",
      price: "400",
      currency: "USD",
      unit: "por 2 a 3 renders de interior",
      features: [
        "Modelado 3D del espacio",
        "Iluminación y renderizado hiperrealista",
        "2 rondas de revisión menores",
        "Entrega garantizada en 3 días",
      ],
      cta: "Hablemos de tu Proyecto",
      note: "El precio varía según la complejidad de la escena, no el metraje.",
    },
  },
  gallery: {
    eyebrow: "Portafolio",
    title: "Ambientes que Trabajamos",
    subtitle:
      "Cada proyecto se adapta al espacio real del cliente — estas son las categorías donde tenemos más experiencia.",
    categories: [
      { key: "living", label: "Living", image: livingImg },
      { key: "cocina", label: "Cocina" },
      { key: "dormitorio", label: "Dormitorio", image: dormitorioImg },
      { key: "bano", label: "Baño", image: banoImg },
      { key: "comedor", label: "Comedor", image: comedorImg },
      { key: "homeOffice", label: "Home Office" },
    ],
    instagramNote: "Catálogo fotográfico completo en Instagram",
    instagramCta: "Ver en Instagram",
    instagramHref: instagramLink,
  },
  contactCta: {
    title: "¿Listo para Presentar tu Próximo Proyecto?",
    subtitle: "Escríbenos con tu brief y te respondemos con una cotización el mismo día.",
    cta: "Escríbenos por WhatsApp",
    ctaHref: whatsappLink,
    channels: [
      { label: "Instagram", href: instagramLink },
      { label: "WhatsApp", href: whatsappLink },
    ],
    paymentNote: "Aceptamos PayPal, USDT (Binance) y transferencias vía Wise o Airtm.",
  },
  footer: {
    brand: "Kroma Renders",
    tagline: "Renders de interiores que ayudan a cerrar proyectos.",
    links: [
      { label: "Servicio", href: "#servicio" },
      { label: "Proceso", href: "#proceso" },
      { label: "Precios", href: "#precios" },
      { label: "Portafolio", href: "#portafolio" },
    ],
    social: [
      { label: "Instagram", href: instagramLink },
      { label: "Facebook", href: facebookLink },
    ],
    copyright: `© ${new Date().getFullYear()} Kroma Renders. Todos los derechos reservados.`,
  },
};
