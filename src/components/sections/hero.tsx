import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BlurText } from "@/components/ui/blur-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { HeroPreview } from "@/components/sections/hero-preview";
import { screens } from "@/content/screens";

export function Hero() {
  const dashboard = screens.find((s) => s.id === "screen-2")!;
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="hero-bg relative overflow-hidden px-4 pt-20 pb-0 text-center text-white sm:px-6 sm:pt-24"
    >
      <AnimatedGridPattern
        numSquares={28}
        maxOpacity={0.18}
        duration={3}
        repeatDelay={1}
        className="text-white [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,#000_25%,transparent_75%)]"
      />

      <div className="relative z-10 mx-auto max-w-[860px]">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-3.5 py-2 text-sm font-semibold backdrop-blur">
          <Sparkles aria-hidden className="size-4" />A calmer way to prepare
          your taxes
        </p>

        <h1
          id="hero-title"
          className="mx-auto mt-7 mb-6 max-w-[800px] text-[clamp(2.6rem,7vw,4.6rem)] leading-[1.04] font-extrabold tracking-[-0.045em]"
        >
          <BlurText text="Tax preparation," />
          <br />
          <BlurText
            text="without the chaos."
            startIndex={2}
            className="text-[#d8f3ff]"
          />
        </h1>

        <p className="mx-auto max-w-[580px] text-lg leading-relaxed text-white/90">
          Bring your freelance records together, check what was read from every
          document, and prepare an organised report where each figure links back
          to its source.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ShimmerButton
            href="#walkthrough"
            className="text-base font-bold text-brand-strong"
          >
            Explore the application{" "}
            <ArrowRight aria-hidden className="size-4" />
          </ShimmerButton>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/12 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            See how it works
          </a>
        </div>

        <p className="mt-5 text-sm text-white/85">
          For resident individuals · Year of assessment 2025/26
        </p>
      </div>

      <HeroPreview>{dashboard.window}</HeroPreview>
    </section>
  );
}
