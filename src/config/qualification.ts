import type { LandingSlug } from "@/content/types";

/**
 * Opciones de los campos de selección del formulario y regla de cualificación de cada landing.
 * Se cambian aquí, sin tocar componentes. Los textos de las preguntas están en src/content.
 */

export type Option = { value: string; label: string };

/** Quien cumple alguna de estas condiciones no ve el calendario: ve "Empieza gratis". */
export type FreeRule = { field: string; values: string[] };

export const qualification: Record<LandingSlug, { options: Record<string, Option[]>; freeIf: FreeRule[] }> = {
  infoproductores: {
    options: {
      equipo: [
        { value: "solo", label: "Solo yo" },
        { value: "2-5", label: "2 a 5" },
        { value: "6-15", label: "6 a 15" },
        { value: "15+", label: "Más de 15" },
      ],
      // Tramos de facturación mensual. Para cambiarlos basta con editar esta lista.
      facturacion: [
        { value: "lt10k", label: "Menos de 10.000 €" },
        { value: "10k-50k", label: "10.000 a 50.000 €" },
        { value: "50k-150k", label: "50.000 a 150.000 €" },
        { value: "gt150k", label: "Más de 150.000 €" },
      ],
      prioridad: [
        { value: "closers", label: "Mis closers" },
        { value: "equipo", label: "Mi equipo" },
        { value: "ia", label: "Mi IA con contexto" },
      ],
    },
    // Hoy solo se deriva a "Empieza gratis" quien trabaja solo. Para derivar también por
    // facturación, añade { field: "facturacion", values: ["lt10k"] }.
    freeIf: [{ field: "equipo", values: ["solo"] }],
  },
};

export function goesFree(slug: LandingSlug, values: Record<string, string>): boolean {
  return qualification[slug].freeIf.some((r) => r.values.includes(values[r.field]));
}
