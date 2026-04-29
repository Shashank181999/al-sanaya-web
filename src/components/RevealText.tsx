"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentType, ElementType, ReactNode } from "react";

type Props = {
  children: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  trigger?: "view" | "mount";
};

const ease = [0.4, 0, 0.2, 1] as const;

const container = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

const word: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.6, ease },
  },
};

export function RevealText({
  children,
  as = "span",
  className,
  delay = 0,
  stagger = 0.06,
  once = true,
  trigger = "view",
}: Props) {
  const Tag = motion.create(as) as ComponentType<Record<string, unknown>>;
  const words = children.split(/(\s+)/);

  const controlProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "show" as const }
      : {
          initial: "hidden",
          whileInView: "show" as const,
          viewport: { once, amount: 0.2 },
        };

  return (
    <Tag
      {...controlProps}
      variants={container(stagger, delay)}
      className={className}
    >
      {words.map((w: string, i: number) =>
        w.trim() === "" ? (
          <span key={i}>{w}</span>
        ) : (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom pb-[0.05em]"
          >
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        )
      )}
    </Tag>
  );
}

export function RevealLines({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
