/** Datos del grafo compartidos por las versiones 3D y 2D. Todo se genera con una semilla fija. */

export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type GNode = { x: number; y: number; z: number; tone: 0 | 1 | 2 };

/** Nodos sueltos con pocas conexiones: "información suelta y desconectada". */
export function buildHeroGraph(count = 90, seed = 11) {
  const r = rng(seed);
  const nodes: GNode[] = [];
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: (r() - 0.5) * 22,
      y: (r() - 0.5) * 12,
      z: (r() - 0.5) * 10,
      tone: (r() < 0.55 ? 0 : r() < 0.7 ? 2 : 1) as 0 | 1 | 2,
    });
  }
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  for (let i = 0; i < nodes.length; i++) {
    if (r() > 0.34) continue;
    let best = -1;
    let bestD = 4.2;
    for (let j = 0; j < nodes.length; j++) {
      if (j === i) continue;
      const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y, nodes[i].z - nodes[j].z);
      if (d < bestD) {
        bestD = d;
        best = j;
      }
    }
    const key = best < i ? `${best}-${i}` : `${i}-${best}`;
    if (best >= 0 && !seen.has(key)) {
      seen.add(key);
      edges.push([i, best]);
    }
  }
  return { nodes, edges };
}

/** Proyección sencilla para la versión SVG (viewBox 1600x900). */
export function projectHero(n: GNode) {
  const s = 14 / (14 - n.z);
  return { x: 800 + n.x * s * 58, y: 450 + n.y * s * 58, s };
}

export type ToolId = "zoom" | "meet" | "outlook" | "gmail" | "drive" | "clickup" | "trello" | "jira" | "chatgpt" | "claude";

export type ToolNode = {
  id: ToolId;
  name: string;
  file: string;
  /** Posición normalizada en el óvalo (-1 a 1) y profundidad. */
  u: number;
  v: number;
  z: number;
};

const DEFS: Record<ToolId, Omit<ToolNode, "id" | "u" | "v" | "z">> = {
  zoom: { name: "Zoom", file: "zoom.svg" },
  meet: { name: "Google Meet", file: "googlemeet.svg" },
  outlook: { name: "Microsoft Outlook", file: "outlook.svg" },
  gmail: { name: "Gmail", file: "gmail.svg" },
  drive: { name: "Google Drive", file: "googledrive.svg" },
  clickup: { name: "ClickUp", file: "clickup.svg" },
  trello: { name: "Trello", file: "trello.svg" },
  jira: { name: "Jira", file: "jira.svg" },
  chatgpt: { name: "ChatGPT", file: "openai.svg" },
  claude: { name: "Claude", file: "claude.svg" },
};

/** Herramientas del grafo decorativo por defecto, en su orden en el anillo. */
export const TOOL_IDS_DEFAULT: ToolId[] = ["zoom", "meet", "outlook", "gmail", "drive", "clickup", "trello", "jira", "chatgpt", "claude"];

const toolCache = new Map<string, ToolNode[]>();

/** Herramientas repartidas a partes iguales en el óvalo (con 9 son 40 grados, como siempre). */
export function toolsFor(ids: readonly ToolId[]): ToolNode[] {
  const key = ids.join(",");
  const hit = toolCache.get(key);
  if (hit) return hit;
  const step = 360 / ids.length;
  const built = ids.map((id, i) => {
    const a = ((90 + i * step) * Math.PI) / 180;
    return { id, ...DEFS[id], u: Math.cos(a) * 0.86, v: Math.sin(a) * 0.8, z: Math.sin(a * 2 + 0.6) * 1.3 };
  });
  toolCache.set(key, built);
  return built;
}

export const TOOLS: ToolNode[] = toolsFor(TOOL_IDS_DEFAULT);
