"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/** Progress bar in the app mockups; fills when it comes into view. */
export function MockProgress({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="mock-progress">
      <motion.span
        initial={{ width: reduce ? `${value}%` : "0%" }}
        animate={{ width: inView || reduce ? `${value}%` : "0%" }}
        transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
      />
    </div>
  );
}
