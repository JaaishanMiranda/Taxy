# Tax Assistant: landing page

Landing page for the SDGP Tax Assistant, built with Next.js 16 (App Router), TypeScript,
Tailwind CSS v4 and Motion. The design is adapted from the HTML prototype and the Supaste reference in `DESIGN.md`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things are

| Path | What it holds |
|---|---|
| `src/content/site.ts` | All landing-page copy: nav, coverage strip, steps, privacy points, **team**, FAQ |
| `src/content/screens.tsx` | The 10 app screens from the prototype (converted to JSX) |
| `src/components/sections/` | One file per page section |
| `src/components/ui/` | Animated components (Magic UI / React Bits patterns) |
| `src/components/mock/` | Animated pieces inside the app screens |
| `src/app/mock.css` | Styles for the app mockups (from the prototype, colours darkened for contrast) |
| `src/app/globals.css` | Design tokens, animations, hero gradient |

## Animated components

Written in the style of the copy-paste libraries (their sites could not be reached while building, so
each file reimplements the documented component and API):

- Magic UI: `AnimatedGridPattern`, `ShimmerButton`, `BorderBeam`, `NumberTicker`, `TypingAnimation`,
  `AnimatedBeam`, `BentoGrid`, `Marquee`, `AnimatedList`
- React Bits: `BlurText`

All of them respect the visitor's reduced-motion setting.

## Before submission

- Replace the `[Member name]` / `[Role]` placeholders in `src/content/site.ts`.
- The 30-day retention period matches NFR4, which still marks it as a placeholder.
- `BrandMark` is a placeholder "T" logo.

## Behaviour notes

- The page always opens on the hero. A refresh never jumps to the walkthrough. A link such as
  `/#screen-5` opens that screen on a fresh visit.
- App screens are pictures: their controls are not focusable and they are hidden from screen readers.
  The title and description above each screen describe it instead.
- Checked with axe (WCAG 2.1 A/AA): 0 violations; no horizontal scroll at 390 px.
