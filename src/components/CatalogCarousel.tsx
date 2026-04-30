"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { Catalog } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;
const AUTO_INTERVAL = 4000;
const SLIDE_DURATION = 0.7;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export function CatalogCarousel({ items }: { items: Catalog[] }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(
    (step: number) => {
      setDirection(step > 0 ? 1 : -1);
      setActive((prev) => (prev + step + items.length) % items.length);
    },
    [items.length]
  );

  const goTo = useCallback(
    (next: number) => {
      setDirection(next >= active ? 1 : -1);
      setActive(next);
    },
    [active]
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => advance(1), AUTO_INTERVAL);
    return () => clearTimeout(t);
  }, [active, paused, advance]);

  const current = items[active];
  const flip = active % 2 === 1;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[560px] sm:h-[520px] md:h-[540px] rounded-3xl overflow-hidden bg-white shadow-[0_30px_80px_-30px_rgba(33,63,126,0.35)] ring-1 ring-slate-200">
        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <motion.div
            key={current.name}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: SLIDE_DURATION, ease },
              opacity: { duration: SLIDE_DURATION * 0.6, ease },
            }}
            className="absolute inset-0"
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-12 h-full ${
                flip ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-5 lg:col-span-5 relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
                <span aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
                <span
                  aria-hidden
                  className="absolute -top-20 -left-12 h-72 w-72 rounded-full bg-white/5 blur-3xl"
                />
                <span
                  aria-hidden
                  className="absolute -bottom-20 -right-12 h-72 w-72 rounded-full bg-white/5 blur-3xl"
                />
                <div className="relative h-full flex items-center justify-center p-8 md:p-10 lg:p-14">
                  <Image
                    src={current.cover}
                    alt={`${current.name} cover`}
                    width={420}
                    height={560}
                    sizes="(max-width: 768px) 70vw, 360px"
                    className="h-[240px] sm:h-[280px] md:h-[340px] lg:h-[380px] w-auto object-contain rounded-md ring-1 ring-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
                    priority={active === 0}
                  />
                </div>
              </div>

              <div className="md:col-span-7 lg:col-span-7 relative p-7 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-navy-900/70 font-semibold">
                  {current.tagline}
                </p>
                <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-[1.1]">
                  {current.name}
                </h3>
                <span
                  aria-hidden
                  className="mt-5 block h-[3px] w-16 rounded-full bg-navy-900"
                />
                <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                  {current.overview}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={current.file}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    View Catalogue
                    <span aria-hidden>→</span>
                  </a>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                    Opens in new tab
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 md:mt-8 flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          {items.map((c, i) => (
            <button
              key={c.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${c.name}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-navy-900" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        <div className="relative h-1 flex-1 rounded-full bg-slate-200 overflow-hidden">
          <motion.span
            key={`${active}-${paused ? "p" : "r"}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? 0 : 1 }}
            transition={{ duration: paused ? 0 : AUTO_INTERVAL / 1000, ease: "linear" }}
            style={{ originX: 0 }}
            aria-hidden
            className="absolute inset-0 rounded-full bg-gradient-to-r from-navy-700 via-navy-500 to-navy-900"
          />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => advance(-1)}
            aria-label="Previous catalogue"
            className="h-10 w-10 rounded-full bg-white text-navy-900 ring-1 ring-slate-200 hover:ring-navy-900 hover:bg-navy-900 hover:text-white transition-colors grid place-items-center"
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            onClick={() => advance(1)}
            aria-label="Next catalogue"
            className="h-10 w-10 rounded-full bg-navy-900 text-white ring-1 ring-navy-900 hover:bg-navy-800 transition-colors grid place-items-center"
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: direction === "left" ? "rotate(180deg)" : undefined,
      }}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
