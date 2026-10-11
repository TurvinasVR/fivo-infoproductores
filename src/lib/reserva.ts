import { getVisitorCode } from "./visitor";

const PARAMS_KEY = "fivo-meetz-params";

/** Parámetros que pueden traer el id de la reserva (meetz aún no confirma cuál manda). */
export const RESERVA_ID_PARAMS = ["r", "booking_id", "bookingId", "id"];

let logged = false;

/**
 * Guarda en la sesión todos los parámetros de la URL (lo que mande meetz al redirigir a /gracias) y los devuelve junto
 * con los guardados antes. Avisa por consola de los que llegan, para ver qué manda meetz en una reserva real.
 */
export function captureMeetzParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  let stored: Record<string, string> = {};
  try {
    stored = JSON.parse(window.sessionStorage.getItem(PARAMS_KEY) ?? "{}") as Record<string, string>;
  } catch {
    /* sin datos guardados */
  }
  try {
    const fresh: Record<string, string> = {};
    new URLSearchParams(window.location.search).forEach((v, k) => {
      fresh[k.slice(0, 60)] = v.slice(0, 200);
    });
    if (Object.keys(fresh).length) {
      stored = { ...stored, ...fresh };
      try {
        window.sessionStorage.setItem(PARAMS_KEY, JSON.stringify(stored));
      } catch {
        /* sin sessionStorage: valen solo los de la URL */
      }
      if (!logged) {
        logged = true;
        console.info("Parámetros de meetz:", fresh);
      }
    }
  } catch {
    /* URL ilegible */
  }
  return stored;
}

/** Id de la reserva de meetz (r, booking_id, bookingId o id), o cadena vacía. */
export function getReservaId(): string {
  const p = captureMeetzParams();
  for (const k of RESERVA_ID_PARAMS) if (p[k]) return p[k].slice(0, 80);
  return "";
}

/** El código del visitante: es el "sesion" de los envíos a la hoja. */
export function getSessionId(): string {
  return getVisitorCode();
}
