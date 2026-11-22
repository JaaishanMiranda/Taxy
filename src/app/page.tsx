import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { CoverageStrip } from "@/components/sections/coverage-strip";
import { Features } from "@/components/sections/features";
import { Walkthrough } from "@/components/sections/walkthrough";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Privacy } from "@/components/sections/privacy";
import { Team } from "@/components/sections/team";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-brand-strong focus:shadow"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <CoverageStrip />
        <Features />
        <Walkthrough />
        <HowItWorks />
        <Privacy />
        <Team />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
