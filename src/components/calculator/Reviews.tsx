"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "@phosphor-icons/react";
import { REVIEWS } from "./reviewsData";

/**
 * Opiniones de la calculadora original, bajo el resultado (solo en el paso 4). Carrusel con scroll nativo: se pasa con el
 * dedo o la rueda y con las flechas. Tarjetas planas en surface, sin cajas dentro de cajas.
 */
export default function Reviews() {
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const paint = useCallback(() => {
    const t = track.current;
    if (!t) return;
    setAtStart(t.scrollLeft <= 2);
    setAtEnd(t.scrollLeft >= t.scrollWidth - t.clientWidth - 2);
  }, []);

  useEffect(() => {
    paint();
    window.addEventListener("resize", paint);
    return () => window.removeEventListener("resize", paint);
  }, [paint]);

  const go = (dir: 1 | -1) => {
    const t = track.current;
    if (!t) return;
    const card = t.firstElementChild as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 16 : t.clientWidth;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollBy({ left: dir * step, behavior: reduced ? "auto" : "smooth" });
  };

  const arrow =
    "inline-flex size-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-line-strong hover:bg-surface-2 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-transparent";

  return (
    <section aria-labelledby="opiniones" className="mt-14 lg:mt-20">
      <div className="flex items-end justify-between gap-4">
        <h3 id="opiniones" className="font-display text-[clamp(1.375rem,1rem+1.4vw,1.875rem)] font-black leading-tight tracking-[-0.015em]">
          Opiniones sobre Fivo
        </h3>
        <div className="hidden gap-2 sm:flex">
          <button type="button" className={arrow} onClick={() => go(-1)} disabled={atStart} aria-label="Opinión anterior">
            <ArrowLeft size={20} aria-hidden />
          </button>
          <button type="button" className={arrow} onClick={() => go(1)} disabled={atEnd} aria-label="Opinión siguiente">
            <ArrowRight size={20} aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={track}
        onScroll={paint}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Opiniones sobre Fivo"
        tabIndex={0}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((r, i) => (
          <figure
            key={r.name}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${REVIEWS.length}`}
            className="flex shrink-0 basis-[85%] snap-start flex-col gap-4 rounded-xl border border-line bg-surface p-6 sm:basis-[calc((100%-16px)/2)] lg:basis-[calc((100%-32px)/3)]"
          >
            <div className="flex gap-0.5 text-accent" role="img" aria-label={`${r.stars} estrellas`}>
              {Array.from({ length: r.stars }, (_, k) => (
                <Star key={k} size={16} weight="fill" aria-hidden />
              ))}
            </div>
            <blockquote className="text-[15px] leading-relaxed text-fg">{r.text}</blockquote>
            {r.translated && <span className="text-[13px] text-fg-muted">Traducido del inglés</span>}
            <figcaption className="mt-auto">
              <span className="block font-semibold text-fg">{r.name}</span>
              <span className="block text-[14px] text-fg-muted">{[r.place, r.sector].join(" · ")}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
