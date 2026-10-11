const KEY = "fivo_sesion";
const DAYS = 30;
const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";

// Si localStorage no funciona, el código vale solo para esta visita
let memory = "";

function randomCode(): string {
  const out: string[] = [];
  try {
    const bytes = new Uint8Array(12);
    crypto.getRandomValues(bytes);
    for (const b of bytes) out.push(CHARS[b % CHARS.length]);
  } catch {
    for (let i = 0; i < 12; i++) out.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
  }
  return out.join("");
}

/**
 * Código aleatorio del visitante: 12 caracteres (minúsculas y números), guardado 30 días en localStorage ("fivo_sesion").
 * Se crea la primera vez que se pide. Une la visita con la reserva de meetz (ref) y con los envíos del cálculo (sesion).
 */
export function getVisitorCode(): string {
  if (typeof window === "undefined") return "";
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const v = JSON.parse(raw) as { c?: string; e?: number };
      if (v && typeof v.c === "string" && /^[a-z0-9]{12}$/.test(v.c) && typeof v.e === "number" && v.e > Date.now()) return v.c;
    }
    const code = memory || randomCode();
    window.localStorage.setItem(KEY, JSON.stringify({ c: code, e: Date.now() + DAYS * 86_400_000 }));
    memory = code;
    return code;
  } catch {
    memory = memory || randomCode();
    return memory;
  }
}
