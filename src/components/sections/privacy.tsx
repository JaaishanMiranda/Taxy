import { EyeOff, Link2, Scale, Trash2, UserRoundCheck } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { privacy } from "@/content/site";

const icons = [EyeOff, Trash2, Link2, Scale];

export function Privacy() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-title"
      className="bg-surface px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionHeading
          id="privacy-title"
          eyebrow="Privacy & trust"
          tone="clay"
          title="Your financial data, handled with care."
        >
          Tax records are personal. These are the rules the app is built around.
        </SectionHeading>

        <ul className="grid gap-4 sm:grid-cols-2">
          {privacy.map((p, i) => {
            const Icon = icons[i];
            return (
              <li
                key={p.title}
                className="flex gap-4 rounded-2xl border border-line bg-white p-6"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-clay-tint text-clay-strong">
                  <Icon aria-hidden className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#ead9d1] bg-clay-tint p-6 sm:flex-row sm:items-center">
          <UserRoundCheck
            aria-hidden
            className="size-6 shrink-0 text-clay-strong"
          />
          <p className="text-base leading-relaxed text-ink">
            <strong>You stay in control.</strong> Nothing becomes final until
            you approve it, and Taxy gives general guidance, not
            professional tax advice. For decisions specific to your situation,
            check with a qualified tax adviser.
          </p>
        </div>
      </div>
    </section>
  );
}
