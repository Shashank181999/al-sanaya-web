"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  distance?: number;
  direction?: Direction;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

const ease = [0.4, 0, 0.2, 1] as const;

function offsetFor(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
    default:
      return {};
  }
}

export function Reveal({
  children,
  delay = 0,
  distance = 14,
  direction = "up",
  className,
  as = "div",
}: RevealProps) {
  const Component = motion[as];
  const offset = offsetFor(direction, distance);
  return (
    <Component
      initial={offset}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function StaggerGroup({
  children,
  className,
  staggerChildren = 0.05,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren, delayChildren },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 12,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
}) {
  const offset = offsetFor(direction, distance);
  const variants: Variants = {
    hidden: offset,
    show: {
      x: 0,
      y: 0,
      transition: { duration: 0.45, ease },
    },
  };
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
  distance = 10,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  distance?: number;
}) {
  const offset = offsetFor(direction, distance);
  return (
    <motion.div
      initial={offset}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 0.55, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
