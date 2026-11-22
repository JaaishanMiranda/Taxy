"use client";

import { forwardRef, useRef, type ReactNode } from "react";
import {
  FileBadge,
  FileCheck2,
  Landmark,
  Receipt,
  FileText,
} from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { SectionHeading } from "@/components/sections/section-heading";
import { BrandMark } from "@/components/sections/brand-mark";
import { steps } from "@/content/site";
import { cn } from "@/lib/utils";

const Node = forwardRef<
  HTMLDivElement,
  { children: ReactNode; label: string; className?: string }
>(({ children, label, className }, ref) => (
  <div className="flex w-24 flex-col items-center gap-2 sm:w-32">
    <div
      ref={ref}
      className={cn(
        "relative z-10 grid size-12 place-items-center rounded-full border border-line bg-white text-brand-strong shadow-[0_6px_20px_-6px_rgba(25,75,130,.25)] sm:size-14",
        className,
      )}
    >
      {children}
    </div>
    <span className="relative z-10 rounded bg-white/80 px-1 text-center text-xs font-semibold text-muted sm:text-sm">
      {label}
    </span>
  </div>
));
Node.displayName = "Node";

export function HowItWorks() {
  const container = useRef<HTMLDivElement>(null);
  const inv = useRef<HTMLDivElement>(null);
  const rec = useRef<HTMLDivElement>(null);
  const bank = useRef<HTMLDivElement>(null);
  const wht = useRef<HTMLDivElement>(null);
  const app = useRef<HTMLDivElement>(null);
  const report = useRef<HTMLDivElement>(null);

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionHeading
          id="how-title"
          eyebrow="A guided workflow"
          title="From scattered documents to an organised report."
        >
          Instead of sorting everything by hand, you are guided through each
          stage, from upload to an approved report.
        </SectionHeading>

        {/* diagram: documents flow into the workspace, which produces the report */}
        <figure className="mx-auto mb-16 max-w-[760px]">
          <div
            ref={container}
            className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-white px-4 py-10 sm:px-12"
          >
            <div className="flex flex-col items-start gap-5 justify-self-start">
              <Node ref={inv} label="Invoices">
                <FileText aria-hidden className="size-5" />
              </Node>
              <Node ref={rec} label="Receipts">
                <Receipt aria-hidden className="size-5" />
              </Node>
              <Node ref={bank} label="Bank statements">
                <Landmark aria-hidden className="size-5" />
              </Node>
              <Node ref={wht} label="WHT certificates">
                <FileBadge aria-hidden className="size-5" />
              </Node>
            </div>

            <Node
              ref={app}
              label="Tax Assistant"
              className="size-16 border-brand/30 sm:size-20"
            >
              <BrandMark className="size-10 text-lg sm:size-12" />
            </Node>

            <div className="justify-self-end">
              <Node
                ref={report}
                label="Your report"
                className="bg-[#eafaf3] text-[#0f7a58]"
              >
                <FileCheck2 aria-hidden className="size-5" />
              </Node>
            </div>

            <AnimatedBeam
              containerRef={container}
              fromRef={inv}
              toRef={app}
              curvature={40}
              delay={0}
              duration={4}
            />
            <AnimatedBeam
              containerRef={container}
              fromRef={rec}
              toRef={app}
              curvature={14}
              delay={0.35}
              duration={4}
            />
            <AnimatedBeam
              containerRef={container}
              fromRef={bank}
              toRef={app}
              curvature={-14}
              delay={0.7}
              duration={4}
            />
            <AnimatedBeam
              containerRef={container}
              fromRef={wht}
              toRef={app}
              curvature={-40}
              delay={1.05}
              duration={4}
            />
            <AnimatedBeam
              containerRef={container}
              fromRef={app}
              toRef={report}
              duration={4}
              delay={1.6}
              gradientStartColor="#5fd3a6"
              gradientStopColor="#12a879"
            />
          </div>
          <figcaption className="sr-only">
            Invoices, receipts, bank statements and WHT certificates go into Tax
            Assistant, which turns them into your report.
          </figcaption>
        </figure>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <span className="text-sm font-extrabold text-brand-strong">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-muted">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
