"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  cta?: { label: string; href: string };
};

const ease = [0.22, 1, 0.36, 1] as const;

const suggestions = [
  "What products do you offer?",
  "Where are your offices?",
  "Are you ISO certified?",
  "Download brochures",
];

function answer(input: string): { content: string; cta?: Message["cta"] } {
  const q = input.toLowerCase().trim();

  if (/(product|busduct|busbar|catalog|catalogue|linkk|megaduct)/.test(q)) {
    return {
      content:
        "We supply Linkk and Megaduct sandwich-type busduct trunking systems — including elbows, joints, plug-in units, tap-offs, hangers and more. Designed for commercial and industrial electrical distribution with certified short-circuit protection.",
      cta: { label: "View all products", href: "/products" },
    };
  }
  if (/(office|location|address|where|abu dhabi|dubai|lebanon|jordan|gcc)/.test(q)) {
    return {
      content:
        "We have four offices: Abu Dhabi (HQ — Baynunah Tower), Dubai (Umm Ramool), Beirut (Lebanon), and Amman (Jordan). Our team responds within one business day.",
      cta: { label: "See all offices", href: "/contact" },
    };
  }
  if (/(iso|certif|quality|standard)/.test(q)) {
    return {
      content:
        "Yes — we're ISO 9001:2008 certified and operate under a documented Quality Management System for the procurement of equipment and spares for the oil, gas and general industry.",
      cta: { label: "View certificates", href: "/about" },
    };
  }
  if (/(brochur|pdf|download|datasheet|profile)/.test(q)) {
    return {
      content:
        "You can download our Company Profile and the full Sandwich-Type Busbar Catalogue.",
      cta: { label: "Open downloads", href: "/products" },
    };
  }
  if (/(project|reference|landmark|tower|hotel)/.test(q)) {
    return {
      content:
        "Linkk and Megaduct have been delivered to landmark GCC projects — including Marina 101 (Dubai), Moda Mall (Bahrain), W Hotel Amman, Park Inn KSA, Fujairah Tower and many more.",
      cta: { label: "See all projects", href: "/projects" },
    };
  }
  if (/(price|cost|quote|enquir|inquiry|rfq)/.test(q)) {
    return {
      content:
        "For a tailored quote, share your project specifications and our nearest office will get back within one business day.",
      cta: { label: "Request a quote", href: "/contact" },
    };
  }
  if (/(year|since|history|established|how long|experience)/.test(q)) {
    return {
      content:
        "Al Sanaya Technical Equipment LLC was established in 2004 — over 20 years of supply, testing and commissioning experience across the GCC.",
      cta: { label: "Our story", href: "/about" },
    };
  }
  if (/(contact|email|phone|call|reach|talk)/.test(q)) {
    return {
      content:
        "You can reach our HQ at +971 4 835 2303 or email info@sanayate.com — or fill out the contact form and we'll respond within one business day.",
      cta: { label: "Contact us", href: "/contact" },
    };
  }
  if (/(hi|hello|hey|salam|assalamu)/.test(q)) {
    return {
      content:
        "Hi there! I can help with information about our products, offices, certifications or downloads. What would you like to know?",
    };
  }
  return {
    content:
      "I can help with our products, offices, certifications, brochures or projects. For anything specific, our team responds within one business day.",
    cta: { label: "Talk to our team", href: "/contact" },
  };
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi 👋 I'm Sanaya Assistant. Ask me about our products, offices, certifications or downloads.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, thinking, open]);

  function send(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text.trim(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    const reply = answer(text);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: reply.content,
          cta: reply.cta,
        },
      ]);
      setThinking(false);
    }, 650);
  }

  return (
    <>
      <motion.button
        type="button"
        aria-label={open ? "Close chat" : "Talk to our team"}
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={`fixed bottom-5 right-5 z-50 bg-navy-900 text-white shadow-2xl flex items-center justify-center hover:bg-navy-800 transition ${
          open
            ? "h-14 w-14 rounded-full"
            : "h-12 px-4 sm:px-5 rounded-full gap-2"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </motion.svg>
          ) : (
            <motion.span
              key="chat"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <span className="text-sm font-semibold whitespace-nowrap">
                Our team
              </span>
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-navy-900 animate-pulse" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-[380px] h-[70vh] sm:h-[540px] max-h-[640px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            <header className="bg-navy-900 text-white px-5 py-4 flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 8V4H8" />
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <path d="M2 12h20" />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-navy-900" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight">Sanaya Assistant</p>
                <p className="text-[11px] text-slate-300">Online · replies instantly</p>
              </div>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
              {messages.map((m) => (
                <Bubble key={m.id} message={m} />
              ))}
              {thinking && <ThinkingBubble />}

              {messages.length === 1 && !thinking && (
                <div className="pt-2 space-y-2">
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    Suggestions
                  </p>
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="block w-full text-left text-sm bg-white border border-slate-200 hover:border-navy-900 hover:bg-white px-3 py-2 rounded-lg text-slate-700 transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-slate-200 p-3 flex items-center gap-2 bg-white"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                className="flex-1 text-sm px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
              />
              <button
                type="submit"
                aria-label="Send"
                disabled={!input.trim()}
                className="h-10 w-10 rounded-lg bg-navy-900 text-white flex items-center justify-center hover:bg-navy-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-navy-900 text-white rounded-br-sm"
            : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
        }`}
      >
        <p>{message.content}</p>
        {message.cta && (
          <a
            href={message.cta.href}
            className={`mt-2 inline-flex items-center gap-1.5 text-xs font-semibold ${
              isUser ? "text-slate-200" : "text-navy-900"
            } hover:opacity-80`}
          >
            {message.cta.label}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ThinkingBubble() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-start"
    >
      <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-3.5 py-3 flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-slate-400"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
