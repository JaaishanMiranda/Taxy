import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { faqs } from "@/content/site";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-surface px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-[820px]">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Questions people ask first."
        />
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="faq-item group rounded-2xl border border-line bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-bold text-ink">
                {f.q}
                <Plus
                  aria-hidden
                  className="faq-chevron size-5 shrink-0 text-brand-strong transition-transform duration-200"
                />
              </summary>
              <p className="px-6 pb-6 text-base leading-relaxed text-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
