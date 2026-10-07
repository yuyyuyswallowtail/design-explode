import type { Metadata } from "next";
import { Marquee } from "@/components/design-explode/marquee";
import { DISCIPLINES, TEAM, VALUES } from "@/lib/design-explode/data";

export const metadata: Metadata = { title: "About — DESIGN EXPLODE" };

export default function AboutPage() {
  return (
    <>
      <section className="px-4 py-16 md:px-8 md:py-24">
        <h1 className="display text-[clamp(3rem,11vw,11rem)]">
          We make things that are too <span className="text-tangerine">loud</span> to ignore.
        </h1>
      </section>

      <section className="grid grid-cols-12 gap-4 px-4 py-16 md:px-8">
        <h2 className="meta col-span-12 text-aqua md:col-span-2">PHILOSOPHY</h2>
        <p className="col-span-12 text-xl leading-relaxed md:col-span-6 md:text-3xl">
          Design is a way of paying attention. We turn that attention up until it becomes a poster, a sound, a
          website or a party.
        </p>
      </section>

      <section className="px-4 py-16 md:px-8">
        <h2 className="meta mb-6 text-butter">VALUES</h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {VALUES.map((v) => (
            <li key={v.title} className="border-t border-mist/30 pt-4">
              <h3 className="display text-4xl">{v.title}</h3>
              <p className="mt-3 text-mist/80">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <Marquee items={DISCIPLINES} duration={40} className="my-16" />

      <section className="px-4 pb-24 md:px-8">
        <h2 className="meta mb-6 text-lilac">TEAM</h2>
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {TEAM.map((t) => (
            <li key={t.name}>
              <p className="display text-2xl">{t.name}</p>
              <p className="meta text-mist/60">{t.role}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
