import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { LandingSlug } from "./types";

const META: Record<LandingSlug, { title: string; description: string; image: string; alt: string }> = {
  infoproductores: {
    title: "Fivo para infoproductores: deja de ser la única persona que sabe cómo va todo",
    description:
      "Fivo une las llamadas de tus closers, tus ventas, tus tareas y tu correo en un grafo de contexto, y lo conecta a Claude o ChatGPT. Agenda una llamada de 30 minutos.",
    image: "/og-infoproductores.png",
    alt: "Fivo para infoproductores",
  },
};

/** Metadatos de cada landing. Siempre noindex: son landings de tráfico de pago (no hay cabeceras en un sitio estático). */
export function landingMetadata(slug: LandingSlug): Metadata {
  const m = META[slug];
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: m.title,
    description: m.description,
    robots: { index: false, follow: false },
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      locale: "es_ES",
      siteName: "Fivo",
      images: [{ url: m.image, width: 1200, height: 630, alt: m.alt }],
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [m.image] },
    icons: { icon: "/logos/fivo-mark.svg" },
  };
}
