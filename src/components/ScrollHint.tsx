"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollHint() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const translateY = useTransform(scrollY, [0, 200], [0, 16]);

  return (
    <motion.div
      style={{ opacity, y: translateY }}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-6 md:bottom-10 flex flex-col items-center gap-2 text-white/80"
    >
      <span className="text-[10px] uppercase tracking-[0.32em] font-semibold">
        Scroll
      </span>
      <span className="relative inline-flex h-9 w-5 rounded-full ring-1 ring-white/40 overflow-hidden">
        <motion.span
          aria-hidden
          animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-white/90"
        />
      </span>
    </motion.div>
  );
}
