import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="bg-[linear-gradient(135deg,#0a508f_0%,#0a62c9_55%,#087cf8_100%)] px-4 py-24 text-center text-white sm:px-6"
    >
      <div className="mx-auto max-w-[720px]">
        <p className="inline-flex rounded-full border border-white/35 bg-white/12 px-3.5 py-2 text-sm font-semibold">
          A more organised approach
        </p>
        <h2
          id="cta-title"
          className="mt-6 text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.12] font-extrabold tracking-[-0.035em]"
        >
          Make your tax preparation more manageable.
        </h2>
        <p className="mx-auto mt-5 mb-9 max-w-[540px] text-lg leading-relaxed text-white/90">
          One workspace for organising financial records, understanding tax
          information and preparing with greater clarity.
        </p>
        <ShimmerButton
          href="#walkthrough"
          className="text-base font-bold text-brand-strong"
        >
          Explore all 10 screens <ArrowRight aria-hidden className="size-4" />
        </ShimmerButton>
      </div>
    </section>
  );
}
