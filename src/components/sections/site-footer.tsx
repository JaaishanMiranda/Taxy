import { site } from "@/content/site";
import { BrandMark } from "@/components/sections/brand-mark";

export function SiteFooter() {
  return (
    <footer className="bg-night px-4 py-12 text-white sm:px-6">
      <div className="mx-auto flex max-w-[1160px] flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2.5 text-[17px] font-extrabold tracking-tight">
            <BrandMark inverted />
            {site.name}
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#b4c2d6]">
            A concept for an AI-assisted tax preparation workspace. Sample data
            only.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-[#d3deec]">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-[#b4c2d6]">
          © 2026 {site.name} · SDGP concept preview
        </p>
      </div>
    </footer>
  );
}
