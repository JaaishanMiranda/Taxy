"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/sections/brand-mark";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // highlight the link for the section in the middle of the screen
  useEffect(() => {
    const ids = site.nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e2ebf7]/80 bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-7">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[17px] font-extrabold tracking-tight"
        >
          <BrandMark />
          {site.name}
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[15px] font-semibold text-muted">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  aria-current={active === n.href.slice(1) ? "true" : undefined}
                  className={cn(
                    "transition-colors hover:text-brand-strong",
                    active === n.href.slice(1) && "text-brand-strong",
                  )}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#walkthrough"
            className="hidden items-center gap-2 rounded-xl bg-brand-strong px-4 py-2.5 text-[15px] font-bold text-white transition hover:-translate-y-px hover:bg-brand-deep sm:inline-flex"
          >
            Explore the app <ArrowRight aria-hidden className="size-4" />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-line text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X aria-hidden className="size-5" />
            ) : (
              <Menu aria-hidden className="size-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-line bg-white px-4 pb-5 md:hidden"
        >
          <ul className="flex flex-col py-2">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-semibold text-ink hover:bg-brand-tint"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#walkthrough"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-strong px-4 py-3 text-base font-bold text-white"
          >
            Explore the app <ArrowRight aria-hidden className="size-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
