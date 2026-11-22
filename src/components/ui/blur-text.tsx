"use client";

// React Bits – Blur Text (https://reactbits.dev/text-animations/blur-text)
// Word-by-word blur-in. With reduced motion the words simply appear.
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  /** ms between words */
  delay?: number;
  /** index of the first word, so two BlurTexts can continue one sequence */
  startIndex?: number;
  direction?: "top" | "bottom";
  className?: string;
}

export function BlurText({
  text,
  delay = 110,
  startIndex = 0,
  direction = "top",
  className,
}: BlurTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const fromY = direction === "top" ? -14 : 14;

  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={
            reduce ? false : { opacity: 0, filter: "blur(12px)", y: fromY }
          }
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.2, 0.7, 0.2, 1],
            delay: 0.15 + ((startIndex + i) * delay) / 1000,
          }}
        >
          {word}
          {i < words.length - 1 && " "}
        </motion.span>
      ))}
    </span>
  );
}
