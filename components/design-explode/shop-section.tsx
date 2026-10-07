import { SHOP } from "@/lib/design-explode/data";
import { SafeImage } from "./safe-image";
import { SectionHeading } from "./section-heading";

export function ShopSection() {
  return (
    <section id="shop" className="px-4 py-24 md:px-8 md:py-40">
      <SectionHeading eyebrow="( 08 ) MERCH" title="The shop" />
      <ul className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-6">
        {SHOP.map((s, i) => (
          <li
            key={s.name}
            className={`group ${i === 0 ? "col-span-2 md:col-span-3" : "md:col-span-digit"} ${i === 0 ? "" : "md:col-span-3 lg:col-span-1"}`}
          >
            <div className={`relative aspect-[3/4] overflow-hidden ${s.tone}`}>
              <SafeImage
                src={s.image.src}
                alt={s.image.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="display mt-3 text-xl">{s.name}</p>
            <p className="meta flex justify-between text-mist/70">
              <span>{s.price}</span>
              <button type="button" className="link-u font-bold text-mist">
                VIEW OBJECT →
              </button>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
