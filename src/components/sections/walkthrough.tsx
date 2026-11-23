"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { screens } from "@/content/screens";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/sections/section-heading";

const PLAY_MS = 7000;

export function Walkthrough() {
  const total = screens.length;
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0]));
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLOListElement>(null);
  const currentRef = useRef(0);

  const scrollToWalk = useCallback(() => {
    const el =
      sectionRef.current?.querySelector<HTMLElement>("[data-walk-top]");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    if (Math.abs(window.scrollY - top) > 40) {
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    }
  }, [reduce]);

  /**
   * Go to a screen. The address bar only changes when the visitor moved
   * through the screens themselves, never on page load, so a refresh never
   * lands in the middle of the walkthrough.
   */
  const go = useCallback(
    (i: number, opts: { scroll?: boolean; fromUser?: boolean } = {}) => {
      const next = Math.max(0, Math.min(total - 1, i));
      setDir(next < currentRef.current ? -1 : 1);
      currentRef.current = next;
      setCurrent(next);
      setSeen((s) => new Set(s).add(next));
      if (opts.fromUser) history.replaceState(null, "", `#${screens[next].id}`);
      if (opts.scroll) scrollToWalk();
    },
    [total, scrollToWalk],
  );

  // Open on the hero. A shared link to one screen (…#screen-5) still opens
  // that screen, but only on a fresh visit, not on a refresh.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const nav = performance.getEntriesByType("navigation")[0] as
      PerformanceNavigationTiming | undefined;
    const isReload = nav?.type === "reload";
    const hash = location.hash;
    const linked = screens.findIndex((s) => `#${s.id}` === hash);

    if (!isReload && linked > -1) {
      go(linked);
      setTimeout(scrollToWalk, 80);
      return;
    }
    if (hash && isReload)
      history.replaceState(null, "", location.pathname + location.search);
    if (!hash || isReload) window.scrollTo(0, 0);
    // run once on load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // auto-play
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      go(current + 1);
      if (current + 1 >= total - 1) setPlaying(false);
    }, PLAY_MS);
    return () => clearTimeout(t);
  }, [playing, current, total, go]);

  // keep the active chip in view on phones (scrolls only the strip)
  useEffect(() => {
    const ol = railRef.current;
    const active = ol?.querySelector<HTMLElement>('[aria-current="step"]');
    if (ol && active && ol.scrollWidth > ol.clientWidth) {
      ol.scrollLeft =
        active.offsetLeft - (ol.clientWidth - active.offsetWidth) / 2;
    }
  }, [current]);

  // ← → while the walkthrough is on screen
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const tag = (e.target as HTMLElement).tagName?.toLowerCase();
      if (["input", "textarea", "select"].includes(tag)) return;
      const r = sectionRef.current?.getBoundingClientRect();
      if (!r || r.bottom < 120 || r.top > window.innerHeight - 120) return;
      e.preventDefault();
      setPlaying(false);
      go(current + (e.key === "ArrowRight" ? 1 : -1), { fromUser: true });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  // sidebar items inside any app picture (including the hero) open their screen
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-go]",
      );
      if (!target) return;
      const i = screens.findIndex((s) => s.id === target.dataset.go);
      if (i < 0) return;
      setPlaying(false);
      go(i, { scroll: true, fromUser: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [go]);

  const screen = screens[current];
  const nextTitle = current < total - 1 ? screens[current + 1].title : null;

  return (
    <section
      id="walkthrough"
      ref={sectionRef}
      aria-labelledby="walkthrough-title"
      className="bg-[#f8fbff] px-4 pt-24 pb-20 sm:px-6 sm:pt-28"
    >
      <SectionHeading
        id="walkthrough-title"
        eyebrow="Inside the platform"
        title="Explore the application."
      >
        From your first sign-in to your final preparation report, step through
        the ten main screens of Taxy.
      </SectionHeading>

      <div
        data-walk-top
        className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-7"
      >
        {/* screen list: a sidebar on desktop, a strip of chips on smaller screens */}
        <nav
          aria-label="Application screens"
          className="sticky top-[80px] z-20 rounded-2xl border border-line bg-white/95 p-2 shadow-[0_10px_30px_rgba(25,75,130,.06)] backdrop-blur lg:top-24 lg:p-3.5"
        >
          <p className="mx-2 mt-1 mb-3 hidden text-xs font-extrabold tracking-[0.1em] text-muted lg:block">
            WALKTHROUGH · {total} SCREENS
          </p>
          <ol
            ref={railRef}
            className="flex gap-1 overflow-x-auto [scrollbar-width:none] lg:flex-col lg:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {screens.map((s, i) => {
              const isActive = i === current;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    aria-current={isActive ? "step" : undefined}
                    onClick={() => {
                      setPlaying(false);
                      go(i, { scroll: true, fromUser: true });
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left text-[15px] font-semibold whitespace-nowrap text-muted transition-colors hover:bg-brand-tint hover:text-brand-strong lg:whitespace-normal",
                      isActive && "bg-brand-tint text-brand-strong",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "grid size-7 shrink-0 place-items-center rounded-full bg-[#f1f5fa] text-xs font-extrabold text-muted transition-colors",
                        seen.has(i) &&
                          !isActive &&
                          "bg-[#e8faf3] text-[#0f7a58]",
                        isActive && "bg-brand-strong text-white",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </button>
                </li>
              );
            })}
          </ol>
          <p className="mx-2 mt-3 hidden border-t border-line pt-3 text-sm leading-relaxed text-muted lg:block">
            Tip: use{" "}
            <kbd className="rounded border border-b-2 border-line bg-surface px-1.5 font-sans font-bold">
              ←
            </kbd>{" "}
            <kbd className="rounded border border-b-2 border-line bg-surface px-1.5 font-sans font-bold">
              →
            </kbd>{" "}
            to move between screens.
          </p>
        </nav>

        <div className="min-w-0">
          {/* controls sit above the screen so they never fall below the fold */}
          <div className="mb-5 flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-[0_8px_24px_rgba(25,75,130,.05)] sm:flex-nowrap">
            <button
              type="button"
              disabled={current === 0}
              onClick={() => {
                setPlaying(false);
                go(current - 1, { fromUser: true });
              }}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#dce8f8] bg-white px-4 py-2.5 text-[15px] font-bold text-brand-strong transition hover:bg-brand-tint disabled:cursor-default disabled:opacity-40 sm:flex-none"
            >
              <ChevronLeft aria-hidden className="size-4" /> Previous
            </button>

            <div className="order-first min-w-0 basis-full sm:order-none sm:basis-auto sm:flex-1">
              <p
                className="truncate text-sm font-bold text-muted"
                aria-live="polite"
              >
                Screen <strong className="text-ink">{current + 1}</strong> of{" "}
                {total} · {screen.title}
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#edf1f7]">
                <motion.div
                  className="h-full rounded-full bg-brand"
                  animate={{ width: `${((current + 1) / total) * 100}%` }}
                  transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                />
              </div>
              <div className="mt-1 h-0.5 overflow-hidden rounded-full">
                {playing && (
                  <motion.div
                    key={current}
                    className="h-full bg-sky"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: PLAY_MS / 1000, ease: "linear" }}
                  />
                )}
              </div>
            </div>

            <button
              type="button"
              aria-pressed={playing}
              onClick={() => {
                if (!playing && current === total - 1) go(0);
                setPlaying((p) => !p);
              }}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#dce8f8] bg-white px-4 py-2.5 text-[15px] font-bold text-brand-strong transition hover:bg-brand-tint sm:flex-none"
            >
              {playing ? (
                <Pause aria-hidden className="size-4" />
              ) : (
                <Play aria-hidden className="size-4" />
              )}
              {playing ? "Pause" : "Auto-play"}
            </button>

            <button
              type="button"
              disabled={current === total - 1}
              onClick={() => {
                setPlaying(false);
                go(current + 1, { fromUser: true });
              }}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-brand-strong bg-brand-strong px-4 py-2.5 text-[15px] font-bold text-white transition hover:bg-brand-deep disabled:cursor-default disabled:opacity-40 sm:flex-none"
            >
              Next
              {nextTitle && (
                <span className="hidden max-w-[170px] truncate font-semibold opacity-85 xl:inline">
                  · {nextTitle}
                </span>
              )}
              <ChevronRight aria-hidden className="size-4" />
            </button>
          </div>

          <AnimatePresence mode="wait" initial={false} custom={dir}>
            <motion.article
              key={screen.id}
              id={screen.id}
              aria-labelledby={`${screen.id}-title`}
              initial={reduce ? false : { opacity: 0, x: 28 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -20 * dir }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <header className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-extrabold tracking-[0.1em] text-brand-strong">
                    SCREEN {String(current + 1).padStart(2, "0")} / {total}
                  </p>
                  <h3
                    id={`${screen.id}-title`}
                    className="mt-2 text-2xl font-extrabold tracking-tight text-ink"
                  >
                    {screen.title}
                  </h3>
                  <p className="mt-1.5 text-base text-muted">
                    {screen.description}
                  </p>
                </div>
                <span className="rounded-full border border-[#dceaff] bg-white px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap text-brand-strong">
                  {screen.tag}
                </span>
              </header>
              <div aria-hidden="true" className="mock-scope">
                {screen.window}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
