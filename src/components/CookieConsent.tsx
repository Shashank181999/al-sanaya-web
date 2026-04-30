"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "alsanaya:cookie-consent";
const ease = [0.22, 1, 0.36, 1] as const;

type Choice = "accepted" | "rejected";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: Choice) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, at: new Date().toISOString() })
      );
    } catch {
      // storage unavailable — close anyway
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.4, ease }}
          className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:left-6 sm:right-6 md:right-8 md:left-auto md:bottom-6 md:max-w-md"
        >
          <div className="rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 p-5 md:p-6">
            <div className="flex items-start gap-3">
              <div
                aria-hidden
                className="mt-0.5 h-9 w-9 shrink-0 rounded-full bg-navy-900/5 text-navy-900 grid place-items-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
                  <circle cx="9" cy="11" r="1" />
                  <circle cx="15" cy="14" r="1" />
                  <circle cx="10" cy="16" r="1" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-base font-semibold text-slate-900">
                  A quick note on cookies
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  We use cookies to run the site, measure performance, and
                  improve your experience. Learn more in our{" "}
                  <Link
                    href="/privacy"
                    className="text-navy-900 underline underline-offset-2 hover:text-navy-700"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col-reverse sm:flex-row gap-2 sm:justify-end">
              <button
                type="button"
                onClick={() => decide("rejected")}
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50 transition-colors"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="inline-flex items-center justify-center rounded-full bg-navy-900 px-4 py-2 text-sm font-medium text-white hover:bg-navy-800 transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
