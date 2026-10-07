import type { PROJECTS } from "@/lib/design-explode/data";
import { SafeImage } from "./safe-image";

type Project = (typeof PROJECTS)[number];

export function ProjectCard({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <article
      data-cursor="VIEW →"
      className="group grid cursor-pointer grid-cols-12 items-end gap-x-4 gap-y-4"
    >
      <div
        className={`relative col-span-12 aspect-[4/3] overflow-hidden md:col-span-7 ${flip ? "md:order-2" : ""}`}
      >
        <SafeImage
          src={p.image.src}
          alt={p.image.alt}
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className={`col-span-12 md:col-span-4 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}>
        <p className="meta mb-3 text-mist/60">
          {p.number} / {p.kind} / {p.year}
        </p>
        <h3 className="display text-[clamp(2.5rem,6vw,6rem)] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-tangerine">
          {p.title}
        </h3>
        <div className="my-4 h-0.5 w-12 bg-aqua transition-all duration-500 group-hover:w-full" />
        <p className="text-mist/80">{p.caption}</p>
        <p className="meta mt-2 text-mist/50">
          {p.image.caption} · Image: {p.image.credit}
        </p>
      </div>
    </article>
  );
}
