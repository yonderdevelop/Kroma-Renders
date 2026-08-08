import livingImg from '../assets/gallery/living-1.webp';
import comedorImg from '../assets/gallery/comedor-1.webp';
import dormitorioImg from '../assets/gallery/dormitorio-1.webp';
import banoImg from '../assets/gallery/bano-1.webp';

const whatsappNumber = "5351936206";
const whatsappMessage = "Hi, I'd like to get a quote for an interior rendering project.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
const instagramLink = "https://www.instagram.com/kromarenders/";
const facebookLink = "https://www.facebook.com/share/19CgCRMBiP/";

export const siteData = {
  brand: {
    name: "Kroma Renders",
    tagline: "Interior renders that help close projects.",
  },
  meta: {
    title: "Kroma Renders — Interior Renders for Architects and Designers",
    description:
      "Hyperrealistic interior renders in 3 days. For architects, interior designers, and real estate agencies who need fast budget approvals.",
  },
  nav: {
    links: [
      { label: "Service", href: "#servicio" },
      { label: "Process", href: "#proceso" },
      { label: "Pricing", href: "#precios" },
      { label: "Portfolio", href: "#portafolio" },
    ],
    cta: "Let's Talk About Your Project",
  },
  hero: {
    eyebrow: "Interior Renders for Architects and Designers",
    headline: "From your blueprints to an approved decision.",
    headlineAccent: "In 3 Days.",
    subheadline:
      "Hyperrealistic interior renders so your clients can visualize the space and approve the budget without hesitation. Guaranteed delivery, revisions included.",
    ctaPrimary: "Let's Talk About Your Project",
    ctaSecondary: "View Portfolio",
    imageAlt: "Hyperrealistic bedroom render — Kroma Renders",
  },
  valueProps: {
    eyebrow: "The Service",
    title: "Why Choose Kroma Renders",
    items: [
      {
        icon: "zap",
        title: "3-Day Delivery",
        description:
          "No weeks-long waits: get your renders ready to present in the time it takes your client to decide.",
      },
      {
        icon: "shield-check",
        title: "2 Revisions Included",
        description:
          "Adjustment rounds structured by contract, to protect your time and guarantee the result you envisioned.",
      },
      {
        icon: "briefcase",
        title: "Built for Professionals",
        description:
          "We work exclusively with architects, interior designers, and real estate agencies who need to close proposals fast.",
      },
    ],
  },
  process: {
    eyebrow: "The Process",
    title: "How It Works",
    subtitle: "From your brief to a presentation-ready render, in 5 steps.",
    paymentBadge: "50% Payment",
    steps: [
      {
        number: "01",
        title: "You Send Your Brief",
        description: "Plans, references, and the vision for the space you want to showcase.",
      },
      {
        number: "02",
        title: "You Confirm with 50%",
        description: "We start 3D modeling as soon as the deposit is confirmed.",
      },
      {
        number: "03",
        title: "We Model and Render",
        description: "In 3 days you get your watermarked images, ready for review.",
      },
      {
        number: "04",
        title: "You Fine-Tune if Needed",
        description: "2 rounds of minor revisions included, at no extra cost.",
      },
      {
        number: "05",
        title: "You Receive the Final Delivery",
        description: "You pay the remaining 50% and receive your renders in high resolution.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Investment",
    subtitle: "Priced per image package, not per square meter.",
    package: {
      name: "Starter Package",
      priceLabel: "Starting at",
      price: "400",
      currency: "USD",
      unit: "for 2 to 3 interior renders",
      depositLabel: "50% upfront",
      finalLabel: "50% on delivery",
      features: [
        "3D modeling of the space",
        "Hyperrealistic lighting and rendering",
        "2 rounds of minor revisions",
        "Guaranteed 3-day delivery",
      ],
      cta: "Let's Talk About Your Project",
      note: "Price varies with scene complexity, not the size of the space.",
    },
  },
  gallery: {
    eyebrow: "Portfolio",
    title: "Spaces We Work With",
    subtitle:
      "Every project adapts to the client's real space — these are the categories we know best.",
    altPrefix: "Interior render of",
    categories: [
      { key: "living", label: "Living Room", image: livingImg },
      { key: "cocina", label: "Kitchen" },
      { key: "dormitorio", label: "Bedroom", image: dormitorioImg },
      { key: "bano", label: "Bathroom", image: banoImg },
      { key: "comedor", label: "Dining Room", image: comedorImg },
      { key: "homeOffice", label: "Home Office" },
    ],
    instagramNote: "Full photo catalog on Instagram",
    instagramCta: "View on Instagram",
    instagramHref: instagramLink,
  },
  contactCta: {
    title: "Ready to Present Your Next Project?",
    subtitle: "Send us your brief and we'll reply with a quote the same day.",
    cta: "Message Us on WhatsApp",
    ctaHref: whatsappLink,
    channels: [
      { label: "Instagram", href: instagramLink },
      { label: "WhatsApp", href: whatsappLink },
    ],
    paymentNote: "We accept PayPal, USDT (Binance), and transfers via Wise or Airtm.",
  },
  footer: {
    brand: "Kroma Renders",
    tagline: "Interior renders that help close projects.",
    navLabel: "Navigation",
    socialLabel: "Social",
    links: [
      { label: "Service", href: "#servicio" },
      { label: "Process", href: "#proceso" },
      { label: "Pricing", href: "#precios" },
      { label: "Portfolio", href: "#portafolio" },
    ],
    social: [
      { label: "Instagram", href: instagramLink },
      { label: "Facebook", href: facebookLink },
    ],
    copyright: `© ${new Date().getFullYear()} Kroma Renders. All rights reserved.`,
  },
};
