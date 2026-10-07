export function Intro() {
  return (
    <section className="grid grid-cols-12 gap-x-4 px-4 py-24 md:px-8 md:py-40">
      <p className="meta col-span-12 mb-6 text-aqua md:col-span-1">( 01 )</p>
      <h2 className="display col-span-12 text-[clamp(3rem,9vw,9rem)] md:col-span-10">
        Design should <em className="text-butter">not</em> sit still.
      </h2>
      <div className="col-span-12 mt-12 md:col-span-4 md:col-start-8">
        <p className="text-lg leading-relaxed md:text-xl">
          DESIGN EXPLODE is a fictional creative festival celebrating visual culture, digital experiments,
          motion, typography, art direction and ideas that refuse to behave.
        </p>
        <div className="mt-8 h-px w-full bg-mist/30" />
        <ul className="meta mt-4 flex flex-wrap gap-2">
          {["TALKS", "WORKSHOPS", "PARTIES", "EXHIBITIONS"].map((t) => (
            <li key={t} className="rounded-full border border-mist/40 px-3 py-1">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
