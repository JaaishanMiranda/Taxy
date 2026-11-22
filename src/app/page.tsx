import { Walkthrough } from "@/components/sections/walkthrough";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-brand-strong focus:shadow"
      >
        Skip to content
      </a>
      <main id="main">
        <Walkthrough />
      </main>
    </>
  );
}
