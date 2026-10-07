import type { Metadata } from "next";
import { SafeImage } from "@/components/design-explode/safe-image";
import { WORKSHOPS } from "@/lib/design-explode/data";

export const metadata: Metadata = { title: "Workshops — DESIGN EXPLODE" };

export default function WorkshopsPage() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <h1 className="display mb-16 text-[clamp(3.5rem,13vw,14rem)]">Workshops</h1>
      <ul className="space-y-20">
        {WORKSHOPS.map((w, i) => (
          <li key={w.title} className="grid grid-cols-12 items-end gap-x-4 gap-y-4">
            <div
              className={`relative col-span-12 aspect-[4/3] md:col-span-5 ${i % 2 ? "md:order-2 md:col-start-8" : ""}`}
            >
              <SafeImage
                src={w.image.src}
                alt={w.image.alt}
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="meta mb-2 text-aqua">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="display text-[clamp(2.5rem,6vw,6rem)]">{w.title}</h2>
              <p className="mt-4 max-w-md text-lg text-mist/80">{w.description}</p>
              <dl className="meta mt-4 flex flex-wrap gap-x-6 gap-y-1">
                <div>
                  <dt className="inline text-mist/50">Duration </dt>
                  <dd className="inline">{w.duration}</dd>
                </div>
                <div>
                  <dt className="inline text-mist/50">Level </dt>
                  <dd className="inline">{w.level}</dd>
                </div>
                <div>
                  <dt className="inline text-mist/50">Mentor </dt>
                  <dd className="inline">{w.mentor}</dd>
                </div>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
