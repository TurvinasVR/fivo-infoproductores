import { infoproductores } from "./infoproductores";
import type { LandingContent } from "./types";

/** La landing que publica este repositorio. */
export const LANDING: LandingContent = infoproductores;

/** Ruta de la página de gracias: siempre "/gracias". */
export function thanksHref(_content: LandingContent): string {
  return "/gracias";
}
