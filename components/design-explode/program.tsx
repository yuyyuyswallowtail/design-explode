"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CATEGORY_BG, type Category, type Day, EVENTS } from "@/lib/design-explode/data";
import { ProgramFilter } from "./program-filter";

const CATS = ["ALL", "TALK", "WORKSHOP", "PARTY", "EXHIBITION"] as const;
const DAYS = ["ALL", "FRI", "SAT", "SUN"] as const;

export function Program({ limit }: { limit?: number }) {
  const [cat, setCat] = useState<(typeof CATS)[number]>("ALL");
  const [day, setDay] = useState<(typeof DAYS)[number]>("ALL");

  const rows = EVENTS.filter(
    (e) => (cat === "ALL" || e.category === (cat as Category)) && (day === "ALL" || e.day === (day as Day)),
  ).slice(0, limit);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        <ProgramFilter label="Filter by category" options={CATS} value={cat} onChange={setCat} />
        <ProgramFilter label="Filter by day" options={DAYS} value={day} onChange={setDay} />
      </div>
      <ul className="border-t border-mist/30">
        <AnimatePresence mode="popLayout">
          {rows.map((e) => (
            <motion.li
              key={e.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="group grid grid-cols-2 items-center gap-x-4 gap-y-1 border-b border-mist/30 py-5 transition-all hover:bg-mist/5 hover:pl-3 md:grid-cols-[6rem_11rem_1fr_10rem_9rem_3rem]"
            >
              <span className="meta font-bold">{e.day}</span>
              <span className="meta text-mist/70">{e.time}</span>
              <span className="display col-span-2 text-[clamp(1.5rem,3.5vw,3rem)] md:col-span-1">
                {e.title}
              </span>
              <span className="meta text-mist/70">{e.location}</span>
              <span className="meta flex items-center gap-2">
                <span className={`size-2.5 rounded-full ${CATEGORY_BG[e.category]}`} aria-hidden="true" />
                {e.category}
              </span>
              <Link
                href="/program"
                aria-label={`Reserve ${e.title}`}
                className="text-2xl transition-transform group-hover:translate-x-1"
              >
                →
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {rows.length === 0 && <p className="meta mt-8 text-mist/60">Nothing here yet. Try another filter.</p>}
    </div>
  );
}
