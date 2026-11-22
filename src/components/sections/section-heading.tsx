import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
  className,
  tone = "brand",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
  tone?: "brand" | "clay";
}) {
  return (
    <div className={cn("mx-auto mb-14 max-w-[700px] text-center", className)}>
      <p
        className={cn(
          "text-sm font-extrabold tracking-[0.12em] uppercase",
          tone === "clay" ? "text-clay-strong" : "text-brand-strong",
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-[clamp(2rem,4.2vw,3rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-ink"
      >
        {title}
      </h2>
      {children && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{children}</p>
      )}
    </div>
  );
}
