import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-mist px-4 py-24 text-pine md:px-8 md:py-40">
      <p className="meta mb-6">( 06 ) ABOUT DESIGN EXPLODE</p>
      <h2 className="display text-[clamp(2.5rem,8vw,8rem)]">
        We make things that are too <span className="text-tangerine">loud</span> to ignore.
      </h2>
      <div className="mt-12 grid grid-cols-12 gap-4">
        <p className="col-span-12 text-lg leading-relaxed md:col-span-5 md:col-start-7">
          We are a made-up crew of designers, coders and curators building a festival that only exists on
          screen. Every poster, every motion test and every sticker is an excuse to explore what happens when
          structure meets noise.
        </p>
        <Link
          href="/about"
          className="meta col-span-12 mt-4 inline-block w-fit rounded-full bg-pine px-6 py-3 font-bold text-mist transition hover:scale-105 md:col-span-5 md:col-start-7"
        >
          READ MORE →
        </Link>
      </div>
    </section>
  );
}
