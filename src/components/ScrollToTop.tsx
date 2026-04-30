"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HIDDEN_ROUTES = ["/contact"];

export function ScrollToTop() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (HIDDEN_ROUTES.includes(pathname)) return null;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 right-5 md:bottom-28 md:right-7 z-[55] h-12 w-12 rounded-full bg-white text-navy-900 shadow-xl ring-1 ring-slate-200 hover:ring-navy-900 hover:bg-navy-900 hover:text-white transition-colors grid place-items-center group"
        >
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 44 44"
            fill="none"
          >
            <circle
              cx="22"
              cy="22"
              r="20"
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="2"
            />
            <motion.circle
              cx="22"
              cy="22"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
