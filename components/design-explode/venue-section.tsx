import { SectionHeading } from "./section-heading";

export function VenueSection() {
  return (
    <section id="venue" className="grid grid-cols-12 gap-4 px-4 py-24 md:px-8 md:py-40">
      <div className="col-span-12 md:col-span-6">
        <SectionHeading eyebrow="( 07 ) VENUE" title="The Explode Factory" />
        <dl className="space-y-5 text-lg">
          <div>
            <dt className="meta text-mist/60">Address</dt>
            <dd>Via dei Colori 12, Quartiere Fucina, Catania (fictional)</dd>
          </div>
          <div>
            <dt className="meta text-mist/60">Dates</dt>
            <dd>12 — 14 June 2026</dd>
          </div>
          <div>
            <dt className="meta text-mist/60">Opening hours</dt>
            <dd>Fri 18:00—00:00 · Sat 10:00—02:00 · Sun 10:00—19:00</dd>
          </div>
        </dl>
      </div>
      <div className="col-span-12 md:col-span-6">
        <svg
          viewBox="0 0 400 320"
          role="img"
          aria-label="Abstract map of the Explode Factory district"
          className="w-full border border-mist/30 bg-pine-2"
        >
          <title>Abstract venue map</title>
          <g stroke="#E9F0E4" strokeOpacity="0.25" fill="none">
            <path d="M0 80H400M0 170H400M0 250H400M90 0V320M200 0V320M310 0V320" />
          </g>
          <path
            d="M0 230C90 190 130 260 220 210S350 120 400 150"
            stroke="#3DD9D6"
            strokeWidth="14"
            fill="none"
          />
          <rect x="150" y="100" width="100" height="60" fill="#FF6B2C" />
          <circle cx="300" cy="230" r="18" fill="#FFD23F" />
          <rect x="50" y="200" width="40" height="40" fill="#B79CFF" />
          <text x="160" y="136" fontSize="12" fontWeight="900" fill="#0B1F1A">
            FACTORY
          </text>
        </svg>
      </div>
    </section>
  );
}
