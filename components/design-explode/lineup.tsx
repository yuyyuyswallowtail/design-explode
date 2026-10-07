"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { LINEUP } from "@/lib/design-explode/data";
import { SafeImage } from "./safe-image";

export function Lineup() {
  const [hover, setHover] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const active = hover !== null;

  useEffect(() => {
    if (!active) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX + 24);
      y.set(e.clientY - 120);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [active, x, y]);

  return (
    <div>
      <ul className="border-t border-mist/30">
        {LINEUP.map((l, i) => {
          const expanded = open === i;
          return (
            <li key={l.number} className="border-b border-mist/30">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : i)}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-5 text-left transition-all hover:bg-mist/5 hover:pl-3 md:grid-cols-[4rem_1.4fr_1fr_1fr_3rem] md:py-7"
              >
                <span className="meta text-mist/60">{l.number}</span>
                <span className="display text-[clamp(1.6rem,4.5vw,4rem)] transition-colors group-hover:text-tangerine">
                  {l.name}
                </span>
                <span className="meta hidden text-mist/80 md:block">{l.role}</span>
                <span className="meta hidden items-center gap-2 md:flex">
                  <span className="size-2 rounded-full bg-aqua group-hover:bg-butter" aria-hidden="true" />
                  {l.category}
                </span>
                <span className="text-2xl transition-transform group-hover:translate-x-1" aria-hidden="true">
                  {expanded ? "↓" : "→"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    className="overflow-hidden md:hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    <p className="meta mb-3 text-mist/70">
                      {l.role} / {l.category}
                    </p>
                    <div className="relative mb-5 aspect-[4/3]">
                      <SafeImage
                        src={l.image.src}
                        alt={l.image.alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {hover !== null && (
          <motion.div
            aria-hidden="true"
            style={{ x, y }}
            className="pointer-events-none fixed left-0 top-0 z-50 hidden h-60 w-48 overflow-hidden md:block"
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="relative size-full">
              <SafeImage src={LINEUP[hover].image.src} alt="" fill sizes="192px" className="object-cover" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
