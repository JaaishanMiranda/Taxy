"use client";

// Magic UI – Animated Grid Pattern (https://magicui.design/docs/components/animated-grid-pattern)
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

type Square = { id: number; pos: [number, number] };

export function AnimatedGridPattern({
  width = 44,
  height = 44,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 30,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Square[]>([]);

  const updateSquarePosition = (sqId: number) => {
    setSquares((current) =>
      current.map((sq) =>
        sq.id === sqId
          ? {
              ...sq,
              pos: [
                Math.floor((Math.random() * dimensions.width) / width),
                Math.floor((Math.random() * dimensions.height) / height),
              ],
            }
          : sq,
      ),
    );
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Random positions are only made in the browser, so server and client markup match.
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        setDimensions({ width: w, height: h });
        if (!w || !h) continue;
        setSquares(
          Array.from({ length: numSquares }, (_, i) => ({
            id: i,
            pos: [
              Math.floor((Math.random() * w) / width),
              Math.floor((Math.random() * h) / height),
            ],
          })),
        );
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [numSquares, width, height]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-white/20 stroke-white/10",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [sx, sy], id: sqId }, index) => (
          <motion.rect
            key={`${sqId}-${sx}-${sy}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
              repeatDelay,
            }}
            onAnimationComplete={() => updateSquarePosition(sqId)}
            width={width - 1}
            height={height - 1}
            x={sx * width + 1}
            y={sy * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
