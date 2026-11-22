"use client";

// Magic UI – Animated List (https://magicui.design/docs/components/animated-list)
// Adapted: items arrive one at a time once the list is on screen, then stay
// (the original keeps cycling, which is distracting next to a table of figures).
import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedListProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedList({
  children,
  delay = 900,
  className,
}: AnimatedListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const items = Children.toArray(children);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduce || count >= items.length) return;
    const t = setTimeout(
      () => setCount((c) => c + 1),
      count === 0 ? 300 : delay,
    );
    return () => clearTimeout(t);
  }, [inView, reduce, count, items.length, delay]);

  const visible = reduce ? items : items.slice(0, count);

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      <AnimatePresence initial={false}>
        {visible.map((item, i) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0, scale: 0.9, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 40 }}
          >
            {item}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
