import { PROJECTS } from "@/lib/design-explode/data";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function SelectedWork() {
  return (
    <section id="work" className="px-4 py-24 md:px-8 md:py-40">
      <SectionHeading eyebrow="( 05 ) PORTFOLIO" title="Selected work" />
      <div className="space-y-24 md:space-y-40">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.number} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
