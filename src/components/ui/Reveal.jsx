"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  amount = 0.3,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateSize = () => setIsMobile(mediaQuery.matches);

    updateSize();
    mediaQuery.addEventListener?.("change", updateSize);

    return () => {
      mediaQuery.removeEventListener?.("change", updateSize);
    };
  }, []);

  const offset = isMobile ? 32 : direction === "up" ? 24 : 96;
  const xStart =
    direction === "left" ? -offset : direction === "right" ? offset : 0;
  const yStart = direction === "up" ? 24 : 0;

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, x: xStart, y: yStart };
  const whileInView = shouldReduceMotion
    ? undefined
    : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once, amount }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export { ScrollReveal };
