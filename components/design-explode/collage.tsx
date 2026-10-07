import { COLLAGE } from "@/lib/design-explode/data";
import { SafeImage } from "./safe-image";

export function Collage() {
  return (
    <section aria-label="Collage" className="relative px-4 py-16 md:h-[110vh] md:px-0 md:py-0">
      {/* Mobile: structured grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {COLLAGE.map((c) =>
          c.kind === "img" ? (
            <div key={c.id} className="relative aspect-[4/5]">
              <SafeImage src={c.img} alt="" fill sizes="50vw" className="object-cover" />
            </div>
          ) : c.kind === "sticker" ? (
            <div
              key={c.id}
              className={`display grid aspect-square place-items-center rounded-full text-3xl ${c.cls.replace(/(left|top)-\[[^\]]+\]|-?rotate-\d+/g, "")}`}
            >
              {c.text}
            </div>
          ) : null,
        )}
      </div>

      {/* Desktop: deterministic chaos */}
      <div className="relative hidden h-full md:block" aria-hidden="true">
        {COLLAGE.map((c) => (
          <div key={c.id} className={`absolute ${c.cls}`}>
            {c.kind === "img" && (
              <div className="relative size-full overflow-hidden">
                <SafeImage src={c.img} alt="" fill sizes="20vw" className="object-cover" />
              </div>
            )}
            {c.kind === "sticker" && (
              <div className="display float rounded-full px-8 py-5 text-5xl">{c.text}</div>
            )}
            {c.kind === "star" && (
              <svg viewBox="0 0 100 100" className="spin-slow size-24">
                <title>Star</title>
                <path
                  fill="currentColor"
                  d="M50 0l9 33 33-9-24 26 24 26-33-9-9 33-9-33-33 9 24-26L8 24l33 9z"
                />
              </svg>
            )}
          </div>
        ))}
        <p className="display absolute bottom-[6%] left-[4%] text-[clamp(3rem,9vw,9rem)] text-mist/10">
          MAKE NOISE
        </p>
      </div>
    </section>
  );
}
