const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;
const STORE = "fivo-utm";

export type Utm = Partial<Record<(typeof KEYS)[number], string>>;

/** Lee los UTM de la URL y los guarda en la sesión (si la URL no trae, se conservan los guardados). */
export function captureUtm(): Utm {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const fresh: Utm = {};
  for (const k of KEYS) {
    const v = params.get(k);
    if (v) fresh[k] = v.slice(0, 200);
  }
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(STORE) ?? "{}") as Utm;
    const merged = Object.keys(fresh).length ? fresh : saved;
    window.sessionStorage.setItem(STORE, JSON.stringify(merged));
    return merged;
  } catch {
    return fresh;
  }
}

const PASS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

/** El enlace de reserva con los utm_ de la URL actual, si trae alguno; si no, tal cual. */
export function withUtm(url: string): string {
  if (typeof window === "undefined") return url;
  const from = new URLSearchParams(window.location.search);
  const u = new URL(url);
  let any = false;
  for (const k of PASS) {
    const v = from.get(k);
    if (v) {
      u.searchParams.set(k, v.slice(0, 200));
      any = true;
    }
  }
  return any ? u.toString() : url;
}
