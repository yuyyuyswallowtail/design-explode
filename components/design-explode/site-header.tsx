"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { BRAND, INSPIRATION, NAV } from "@/lib/design-explode/data";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="sticky top-0 z-[70]">
      <div className="meta flex items-center justify-between gap-4 bg-tangerine px-4 py-1.5 text-pine md:px-8">
        <span className="font-bold">{BRAND.name}</span>
        <span>
          {INSPIRATION.label} →{" "}
          <a href={INSPIRATION.url} target="_blank" rel="noopener noreferrer" className="link-u font-bold">
            {INSPIRATION.host}
          </a>
        </span>
      </div>

      <header className="flex items-center justify-between border-b border-mist/10 bg-pine/90 px-4 py-3 backdrop-blur-sm md:px-8">
        <Link
          href="/"
          onClick={close}
          className="display text-2xl leading-none"
          aria-label="DESIGN EXPLODE home"
        >
          DE<span className="text-tangerine">!</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`meta link-u font-bold transition-transform hover:-translate-y-0.5 ${active ? "text-tangerine" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/program"
            className="meta rounded-full bg-tangerine px-5 py-2.5 font-bold text-pine transition hover:scale-105 hover:bg-butter"
          >
            GET TICKETS
          </Link>
        </nav>

        <button
          type="button"
          className="meta relative z-[70] rounded-full border border-mist/40 px-4 py-2 font-bold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </header>
      <MobileMenu open={open} onClose={close} />
    </div>
  );
}
