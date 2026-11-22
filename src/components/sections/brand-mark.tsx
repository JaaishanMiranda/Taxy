import { cn } from "@/lib/utils";

/** Placeholder logo: swap for the real mark when the team has one. */
export function BrandMark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-9 place-items-center rounded-[10px] text-base font-extrabold",
        inverted ? "bg-white text-brand-strong" : "bg-brand-strong text-white",
        className,
      )}
    >
      T
    </span>
  );
}
