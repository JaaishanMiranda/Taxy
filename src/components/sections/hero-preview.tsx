"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/** The dashboard picture under the hero. It starts slightly tilted and flattens as you scroll. */
export function HeroPreview({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 500], [8, 0]);
  const scale = useTransform(scrollY, [0, 500], [0.97, 1]);

  return (
    <div className="relative z-10 mx-auto mt-16 h-[340px] max-w-[1050px] overflow-hidden px-1 pt-2 [perspective:1200px] sm:mt-20 sm:h-[470px]">
      <motion.div
        ref={ref}
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        style={
          reduce ? undefined : { rotateX, scale, transformOrigin: "50% 0%" }
        }
        className="mock-scope -mb-px text-left drop-shadow-[0_35px_55px_rgba(0,50,110,.25)] [&_.mock-body]:min-h-[385px] [&_.mock-main]:p-7 [&_.mock-sidebar]:w-[175px] [&_.mock-window]:rounded-b-none [&_.mock-window]:border-b-0"
      >
        {children}
      </motion.div>
    </div>
  );
}
