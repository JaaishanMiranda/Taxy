import {
  Calculator,
  FileChartColumn,
  FileStack,
  MessageCircleQuestion,
  ScanText,
  ShieldCheck,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedList } from "@/components/ui/animated-list";
import { SectionHeading } from "@/components/sections/section-heading";

const files = [
  ["PDF", "invoice_001.pdf", "Invoice"],
  ["PDF", "expense_receipt.pdf", "Receipt"],
  ["CSV", "bank_statement_apr.csv", "Bank statement"],
  ["PDF", "wht_certificate.pdf", "WHT certificate"],
  ["PDF", "invoice_002.pdf", "Invoice"],
];

function DocumentsVisual() {
  return (
    <div className="absolute inset-0 flex justify-center [mask-image:linear-gradient(to_bottom,transparent,#000_20%,#000_70%,transparent)]">
      <Marquee
        vertical
        pauseOnHover
        repeat={2}
        className="h-full w-[85%] [--duration:22s] [--gap:0.6rem]"
      >
        {files.map(([type, name, kind]) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-2.5 shadow-sm"
          >
            <span
              className={`grid h-8 w-7 place-items-center rounded-md text-[10px] font-extrabold ${
                type === "PDF"
                  ? "bg-[#fff0f0] text-[#c0454a]"
                  : "bg-brand-tint text-brand-strong"
              }`}
            >
              {type}
            </span>
            <div className="min-w-0 text-left">
              <div className="truncate text-sm font-bold text-ink">{name}</div>
              <div className="text-xs text-muted">{kind}</div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

function ExtractionVisual() {
  const fields = [
    ["Date", "2026-04-01"],
    ["Client", "Example Client Ltd."],
    ["Amount", "LKR 125,000.00"],
  ];
  return (
    <div className="flex h-full items-center justify-center gap-4 bg-gradient-to-b from-brand-tint/70 to-white px-6 py-6">
      <div className="relative w-36 shrink-0 rotate-[-3deg] rounded-lg border border-line bg-white p-3 shadow-md">
        <div className="text-[11px] font-extrabold text-ink">INVOICE</div>
        {[70, 90, 55, 80, 40].map((w, i) => (
          <div
            key={i}
            className="mt-2 h-1.5 rounded bg-[#e8eef6]"
            style={{ width: `${w}%` }}
          />
        ))}
        <div className="mt-3 h-4 rounded bg-sky/50" />
        <div className="scan-line absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-transparent via-brand/20 to-transparent" />
      </div>
      <div className="w-full max-w-[260px] rounded-xl border border-line bg-white p-3 text-left shadow-md">
        <div className="text-xs font-bold text-muted">
          Extracted for your review
        </div>
        {fields.map(([k, v]) => (
          <div
            key={k}
            className="mt-2 flex items-center justify-between gap-2 border-t border-line pt-2 text-sm"
          >
            <span className="text-muted">{k}</span>
            <span className="font-semibold text-ink">{v}</span>
          </div>
        ))}
        <div className="mt-3 inline-block rounded-full bg-[#fff6e9] px-2 py-1 text-xs font-bold text-[#9a5a06]">
          1 field needs checking
        </div>
      </div>
    </div>
  );
}

function ValidationVisual() {
  const flags = [
    ["Possible duplicate", "bg-[#fff9ed] text-[#8a5a10] border-[#ffedc9]"],
    ["Unmatched payment", "bg-brand-tint text-brand-deep border-[#dbeaff]"],
    ["Low-confidence field", "bg-[#fff9ed] text-[#8a5a10] border-[#ffedc9]"],
  ];
  return (
    <div className="flex h-full flex-col justify-center px-6 py-6">
      <AnimatedList delay={700} className="gap-2">
        {flags.map(([t, c]) => (
          <div
            key={t}
            className={`rounded-lg border px-3 py-2 text-left text-sm font-semibold ${c}`}
          >
            {t}
          </div>
        ))}
      </AnimatedList>
    </div>
  );
}

function EstimateVisual() {
  return (
    <div className="grid h-full grid-cols-2 content-center gap-3 px-6 py-6 sm:grid-cols-3">
      {[
        ["Income recorded", 1250000],
        ["Expenses recorded", 320000],
        ["Records reviewed", 9],
      ].map(([label, v]) => (
        <div
          key={label as string}
          className="rounded-xl border border-line bg-white p-4 text-left shadow-sm last:col-span-2 sm:last:col-span-1"
        >
          <div className="text-xs font-semibold text-muted">{label}</div>
          <div className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
            {label === "Records reviewed" ? (
              <>
                <NumberTicker value={v as number} plain /> / 12
              </>
            ) : (
              <>
                <span className="text-base text-muted">LKR </span>
                <NumberTicker value={v as number} />
              </>
            )}
          </div>
        </div>
      ))}
      <p className="col-span-full text-left text-xs text-muted">
        Sample data · draft, not a final figure
      </p>
    </div>
  );
}

function GuidanceVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 px-6 py-6 text-left text-sm">
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-brand-strong px-3 py-2 text-white">
        Can I claim WHT deducted on my interest?
      </div>
      <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-brand-tint px-3 py-2 text-ink">
        It may be refundable. Here is what to check, and which certificate you
        need.
      </div>
    </div>
  );
}

function ReportVisual() {
  return (
    <div className="flex h-full items-center px-6 py-6">
      <div className="w-full rounded-xl border border-line bg-white p-4 text-left shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm font-extrabold text-ink">
            Freelance tax report · Y/A 2025/26
          </span>
          <span className="rounded-full bg-[#eafaf3] px-2 py-1 text-xs font-bold text-[#0f7a58]">
            Approved
          </span>
        </div>
        {[
          ["Professional income", "invoice_001.pdf, invoice_002.pdf"],
          ["Interest income", "bank_statement_apr.csv"],
          ["WHT credit", "wht_certificate.pdf"],
        ].map(([line, src]) => (
          <div
            key={line}
            className="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 border-t border-line pt-2.5 text-sm"
          >
            <span className="font-semibold text-ink">{line}</span>
            <span className="text-xs text-brand-strong underline decoration-dotted underline-offset-2">
              Source: {src}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionHeading
          id="features-title"
          eyebrow="A better preparation experience"
          title="Everything you need to organise your tax preparation."
        >
          A guided workspace that helps freelancers organise documents,
          understand their financial information and review their preparation
          step by step.
        </SectionHeading>

        <BentoGrid>
          <BentoCard
            className="md:col-span-2"
            icon={<ScanText aria-hidden className="size-5" />}
            name="AI-assisted extraction"
            description="Information is read from each document and shown to you for review before it is added to your records."
            background={<ExtractionVisual />}
          />
          <BentoCard
            icon={<FileStack aria-hidden className="size-5" />}
            name="Document management"
            description="Invoices, receipts, bank statements and WHT certificates, all in one organised place."
            background={<DocumentsVisual />}
          />
          <BentoCard
            icon={<ShieldCheck aria-hidden className="size-5" />}
            name="Financial validation"
            description="Spot possible duplicates, unmatched payments and fields that need a second look."
            background={<ValidationVisual />}
          />
          <BentoCard
            className="md:col-span-2"
            icon={<Calculator aria-hidden className="size-5" />}
            name="Tax estimation"
            description="Review a draft estimate along with the assumptions and records behind every number."
            background={<EstimateVisual />}
          />
          <BentoCard
            icon={<MessageCircleQuestion aria-hidden className="size-5" />}
            name="Tax guidance"
            description="Ask about tax concepts and record keeping in plain language."
            background={<GuidanceVisual />}
          />
          <BentoCard
            className="md:col-span-2"
            icon={<FileChartColumn aria-hidden className="size-5" />}
            name="Preparation reports"
            description="Your reviewed records in one structured report, with every figure linked to its source."
            background={<ReportVisual />}
          />
        </BentoGrid>
      </div>
    </section>
  );
}
