import Link from "next/link";
import { BRAND, INSPIRATION, NAV } from "@/lib/design-explode/data";

const SOCIAL = ["Instagram", "Behance", "Dribbble", "Are.na"];

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-24 md:px-8">
      <p className="display text-[clamp(4rem,17vw,18rem)]">
        {BRAND.top}
        <br />
        <span className="text-tangerine">{BRAND.bottom}</span>
      </p>
      <div className="mt-12 grid grid-cols-2 gap-8 border-t border-mist/30 pt-8 md:grid-cols-4">
        <nav aria-label="Footer">
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="meta link-u font-bold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2">
          {SOCIAL.map((s) => (
            <li key={s}>
              <a href="#top" className="meta link-u font-bold">
                {s} ↗
              </a>
            </li>
          ))}
        </ul>
        <div className="meta col-span-2 space-y-2 text-mist/70">
          <p>Fictional portfolio project.</p>
          <p>
            Visual direction inspired by Design Bomb:{" "}
            <a href={INSPIRATION.url} target="_blank" rel="noopener noreferrer" className="link-u text-mist">
              {INSPIRATION.url}
            </a>
          </p>
          <p>Not affiliated with Design Bomb.</p>
        </div>
      </div>
    </footer>
  );
}
