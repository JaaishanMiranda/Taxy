"use client";

// Magic UI – Number Ticker (https://magicui.design/docs/components/number-ticker)
import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  startValue?: number;
  delay?: number;
  decimalPlaces?: number;
  /** no thousands separators (for years and small counts) */
  plain?: boolean;
}

export function NumberTicker({
  value,
  startValue = 0,
  delay = 0,
  className,
  decimalPlaces = 0,
  plain = false,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const format = (n: number) =>
    plain
      ? n.toFixed(decimalPlaces)
      : Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(n.toFixed(decimalPlaces)));

  useEffect(() => {
    if (!isInView) return;
    if (reduce) {
      if (ref.current) ref.current.textContent = format(value);
      return;
    }
    const t = setTimeout(() => motionValue.set(value), delay * 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, reduce, value, delay, motionValue]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) ref.current.textContent = format(latest);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [springValue, decimalPlaces, plain],
  );

  return (
    <span
      ref={ref}
      className={cn("inline-block tabular-nums", className)}
      {...props}
    >
      {format(startValue)}
    </span>
  );
}
