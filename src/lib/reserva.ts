const RESERVA_KEY = "fivo-reserva";
const SESION_KEY = "fivo-sesion";

/**
 * Id de la reserva de meetz: llega en ?r=... a /gracias y se guarda mientras dure la visita (sessionStorage).
 * Sin él, cadena vacía.
 */
export function getReservaId(): string {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("r");
    if (fromUrl) {
      const id = fromUrl.slice(0, 80);
      window.sessionStorage.setItem(RESERVA_KEY, id);
      return id;
    }
    return window.sessionStorage.getItem(RESERVA_KEY) ?? "";
  } catch {
    return "";
  }
}

/** Id aleatorio por visita (sessionStorage). */
export function getSessionId(): string {
  try {
    let id = window.sessionStorage.getItem(SESION_KEY);
    if (!id) {
      id = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36);
      window.sessionStorage.setItem(SESION_KEY, id);
    }
    return id;
  } catch {
    return Math.random().toString(36).slice(2);
  }
}
