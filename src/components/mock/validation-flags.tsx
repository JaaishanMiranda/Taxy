import { AnimatedList } from "@/components/ui/animated-list";

const flags = [
  {
    tone: "warning",
    title: "Possible duplicate",
    text: "Confirm before excluding a record.",
  },
  {
    tone: "info",
    title: "Unmatched item",
    text: "An explanation may be required.",
  },
  {
    tone: "warning",
    title: "Low-confidence field",
    text: "Verify the extracted information.",
  },
] as const;

/** Screen 6: validation flags slide in one at a time. */
export function ValidationFlags() {
  return (
    <AnimatedList delay={850} className="min-h-[200px]">
      {flags.map((f) => (
        <div key={f.title} className={`mock-alert ${f.tone}`}>
          <strong>{f.title}</strong>
          <br />
          {f.text}
        </div>
      ))}
    </AnimatedList>
  );
}
