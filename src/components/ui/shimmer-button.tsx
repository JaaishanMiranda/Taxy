// Magic UI – Shimmer Button (https://magicui.design/docs/components/shimmer-button)
// Rendered as a link here because every CTA on the page jumps to a section.
import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends ComponentPropsWithoutRef<"a"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
}

export function ShimmerButton({
  shimmerColor = "#8ad8fc",
  shimmerSize = "0.1em",
  shimmerDuration = "3s",
  borderRadius = "12px",
  background = "#ffffff",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <a
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden px-6 py-3.5 whitespace-nowrap [border-radius:var(--radius)] border border-white/40 [background:var(--bg)]",
        "transform-gpu transition-transform duration-300 ease-in-out hover:-translate-y-px active:translate-y-px",
        className,
      )}
      {...props}
    >
      {/* spark container */}
      <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] @container-[size]">
        <div className="animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh] rounded-none [mask:none]">
          <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {children}
      {/* highlight */}
      <div className="absolute inset-0 size-full [border-radius:var(--radius)] px-4 py-1.5 shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]" />
      {/* backdrop */}
      <div className="absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)]" />
    </a>
  );
}
