import { Marquee } from "@/components/ui/marquee";
import { coverage } from "@/content/site";

export function CoverageStrip() {
  return (
    <section
      aria-label="What Taxy covers"
      className="border-b border-line bg-white py-6"
    >
      <div className="relative mx-auto max-w-[1240px]">
        <Marquee
          pauseOnHover
          repeat={3}
          className="[--duration:45s] [--gap:0.75rem]"
        >
          {coverage.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[15px] font-semibold whitespace-nowrap text-muted"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-brand" />
              {item}
            </span>
          ))}
        </Marquee>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white"
        />
      </div>
    </section>
  );
}
