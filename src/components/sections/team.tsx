import { SectionHeading } from "@/components/sections/section-heading";
import { team } from "@/content/site";

const initials = (name: string) =>
  name.startsWith("[")
    ? "?"
    : name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("");

export function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-[1160px]">
        <SectionHeading
          id="team-title"
          eyebrow="The team"
          title="Built by a team of software engineering students."
        >
          Tax Assistant is our Software Development Group Project (SDGP) at the
          Informatics Institute of Technology, in collaboration with the
          University of Westminster.
        </SectionHeading>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {team.map((m, i) => (
            <li
              key={i}
              className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center"
            >
              <span
                aria-hidden
                className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-brand-strong to-sky text-lg font-extrabold text-white"
              >
                {initials(m.name)}
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{m.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
