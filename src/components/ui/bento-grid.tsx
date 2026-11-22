// Magic UI – Bento Grid (https://magicui.design/docs/components/bento-grid)
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[minmax(17rem,auto)] grid-cols-1 gap-4 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  background?: ReactNode;
  className?: string;
}

export function BentoCard({
  name,
  description,
  icon,
  background,
  className,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-line bg-white",
        "shadow-[0_1px_2px_rgba(25,55,100,.04),0_12px_32px_-12px_rgba(25,75,130,.12)] transition duration-300 hover:-translate-y-1 hover:border-[#b7d6ff]",
        className,
      )}
    >
      {background && (
        <div
          aria-hidden="true"
          className="relative min-h-[14rem] flex-1 overflow-hidden"
        >
          {background}
        </div>
      )}
      <div className="relative z-10 flex flex-col gap-2 p-6">
        <span className="grid size-11 place-items-center rounded-xl bg-brand-tint text-brand-strong">
          {icon}
        </span>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">
          {name}
        </h3>
        <p className="max-w-md text-base leading-relaxed text-muted">
          {description}
        </p>
      </div>
      <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <BorderBeam size={90} duration={5} />
      </div>
    </div>
  );
}
