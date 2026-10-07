"use client";

import { type MotionValue, motion } from "framer-motion";

type Props = { y1: MotionValue<number>; y2: MotionValue<number> };

const STICKERS = [
  {
    id: "s1",
    label: "FEST '26",
    cls: "left-[6%] top-[14%] bg-butter text-pine",
    rot: -8,
    depth: 1,
    delay: 0.3,
  },
  { id: "s2", label: "LOUD!", cls: "right-[8%] top-[18%] bg-aqua text-pine", rot: 10, depth: 2, delay: 0.45 },
  {
    id: "s3",
    label: "TYPE ✺ MOTION",
    cls: "right-[10%] bottom-[16%] bg-lilac text-pine",
    rot: -6,
    depth: 1,
    delay: 0.6,
  },
  {
    id: "s4",
    label: "FRI—SUN",
    cls: "left-[10%] bottom-[12%] bg-tangerine text-pine",
    rot: 7,
    depth: 2,
    delay: 0.75,
  },
] as const;

export function FloatingStickers({ y1, y2 }: Props) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {STICKERS.map((s) => (
        <motion.div
          key={s.id}
          style={{ y: s.depth === 1 ? y1 : y2 }}
          className={`absolute ${s.cls}`}
          initial={{ opacity: 0, rotate: s.rot - 14, scale: 0.7 }}
          animate={{ opacity: 1, rotate: s.rot, scale: 1 }}
          transition={{ delay: s.delay, type: "spring", stiffness: 140, damping: 14 }}
        >
          <div
            className={`float display rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-xl ${s.cls
              .split(" ")
              .filter((c) => c.startsWith("bg-") || c.startsWith("text-"))
              .join(" ")}`}
            style={{ "--d": `${5 + s.depth * 1.5}s` } as React.CSSProperties}
          >
            {s.label}
          </div>
        </motion.div>
      ))}
      <motion.svg
        viewBox="0 0 100 100"
        className="spin-slow absolute right-[40%] top-[8%] size-14 text-tangerine md:size-24"
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <title>Star</title>
        <path fill="currentColor" d="M50 0l9 33 33-9-24 26 24 26-33-9-9 33-9-33-33 9 24-26L8 24l33 9z" />
      </motion.svg>
    </div>
  );
}
