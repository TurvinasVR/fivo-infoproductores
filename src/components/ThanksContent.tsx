"use client";

import { useEffect, useState } from "react";
import { CalendarPlus, CheckCircle } from "@phosphor-icons/react";
import { siteConfig } from "@/config/site";
import type { LandingContent } from "@/content/types";
import { BOOKING_KEY } from "./booking/BookingBlock";
import { VideoPlayer } from "./VideoPlayer";
import { TestimonialCard } from "./Testimonial";
import { Calculator } from "./calculator/Calculator";

type Booking = { startsAt: string | null; minutes: number; mock: boolean };

const whenFmt = new Intl.DateTimeFormat("es-ES", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
});

function toIcsDate(d: Date) {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function downloadIcs(b: Booking, prodid: string) {
  if (!b.startsAt) return;
  const start = new Date(b.startsAt);
  const end = new Date(start.getTime() + b.minutes * 60_000);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:${prodid}`,
    "BEGIN:VEVENT",
    `UID:${toIcsDate(start)}-fivo-llamada@fivo.ai`,
    `DTSTAMP:${toIcsDate(new Date())}`,
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
    "SUMMARY:Llamada de 30 minutos con Fivo",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "llamada-fivo.ics";
  a.click();
  URL.revokeObjectURL(url);
}

export function ThanksContent({ content }: { content: LandingContent }) {
  const { slug, thanks, proof } = content;
  const rt = siteConfig.landings[slug];
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(BOOKING_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setBooking(JSON.parse(raw) as Booking);
    } catch {
      /* sin datos: confirmación genérica */
    }
  }, []);

  const when = booking?.startsAt ? whenFmt.format(new Date(booking.startsAt)) : null;
  const videoReady = rt.ready.thanksVideo && rt.thanksVideo.src;
  const showVideo = Boolean(videoReady);
  const showTestimonials = rt.ready.testimonials && proof.testimonials.length >= 3;

  return (
    <main className="relative z-[2] mx-auto max-w-[1120px] px-5 pb-20 pt-2 lg:px-10">
      {/* Confirmación compacta: la calculadora tiene que verse en la primera pantalla */}
      <div className="mx-auto max-w-[960px] text-center">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
          <CheckCircle size={32} weight="fill" className="shrink-0 text-success" aria-hidden />
          <h1 className="font-display text-[1.75rem] font-black leading-[1.1] tracking-[-0.015em] lg:text-[2.5rem]">{thanks.title}</h1>
        </div>
        <p className="mt-3 text-[15px] text-fg-muted sm:text-base">
          {when ? (
            <>
              Te esperamos el <strong className="font-semibold text-fg">{when}</strong>. Dura <strong className="font-semibold text-fg">{booking?.minutes} minutos</strong>.
            </>
          ) : (
            <>Te esperamos en la hora que has elegido. Dura <strong className="font-semibold text-fg">{siteConfig.calendar.minutes} minutos</strong>.</>
          )}{" "}
          Te llegará un recordatorio por email.
        </p>
        {booking?.mock && (
          <p className="mt-2 text-sm text-warn">Reserva de ejemplo: el calendario de la página anterior era simulado.</p>
        )}

        <button
          type="button"
          className="btn-ghost mt-4 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!booking?.startsAt}
          onClick={() => booking && downloadIcs(booking, thanks.ics.prodid)}
        >
          <CalendarPlus size={18} aria-hidden />
          Añadir al calendario
        </button>
      </div>

      {showVideo && (
        <div className="mx-auto mt-12 max-w-[760px]">
          <VideoPlayer
            src={rt.thanksVideo.src}
            poster={rt.thanksVideo.poster || "/img/video-poster.webp"}
            captions="/video/placeholder-es.vtt"
            label={thanks.videoLabel}
          />
        </div>
      )}

      {showTestimonials && (
        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
          <TestimonialCard data={proof.testimonials[1]} />
          <TestimonialCard data={proof.testimonials[2]} />
        </div>
      )}

      <section aria-labelledby="calculadora" className="mt-8 lg:mt-12">
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            id="calculadora"
            className="font-display text-[clamp(1.375rem,1rem+1.6vw,2rem)] font-black leading-[1.15] tracking-[-0.015em]"
          >
            {thanks.calculator.title}
          </h2>
          <p className="mt-2 text-[15px] text-fg-muted sm:text-base">{thanks.calculator.intro}</p>
        </div>
        <div className="mt-5 lg:mt-6">
          <Calculator />
        </div>
      </section>
    </main>
  );
}
