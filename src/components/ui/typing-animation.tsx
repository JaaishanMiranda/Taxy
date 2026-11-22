"use client";

// Magic UI – Typing Animation (https://magicui.design/docs/components/typing-animation)
// Starts when it scrolls into view; shows the full text straight away with reduced motion.
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  /** paragraphs, typed one after another */
  paragraphs: string[];
  duration?: number;
  /** ms to show the "typing…" dots before text starts */
  thinking?: number;
  className?: string;
}

export function TypingAnimation({
  paragraphs,
  duration = 18,
  thinking = 900,
  className,
}: TypingAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const full = paragraphs.join("\n\n");
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || reduce) return;
    let i = 0;
    let typing: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setShown(0);
      typing = setInterval(() => {
        i += 1;
        setShown(i);
        if (i >= full.length) clearInterval(typing);
      }, duration);
    }, thinking);
    return () => {
      clearTimeout(start);
      clearInterval(typing);
    };
  }, [inView, reduce, full, duration, thinking]);

  const done = reduce || (shown !== null && shown >= full.length);
  const text = reduce ? full : full.slice(0, shown ?? 0);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* keeps the bubble its final height so nothing jumps */}
      <span className="invisible whitespace-pre-line">{full}</span>
      <span className="absolute inset-0 whitespace-pre-line">
        {shown === null && !reduce ? (
          <span className="typing-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        ) : (
          <>
            {text}
            {!done && <span className="caret" />}
          </>
        )}
      </span>
    </div>
  );
}
