"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCount({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(
    prefersReducedMotion ? value : 0,
  );

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const step = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, prefersReducedMotion, value]);

  return (
    <motion.span ref={ref} className="inline-block" initial={false}>
      {prefix}
      {Number(displayValue).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  );
}
