"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BRAND } from "@/lib/design-explode/data";
import { FloatingStickers } from "./floating-stickers";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const k = reduce ? 0 : 1;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -160 * k]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -340 * k]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 90 * k]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[calc(100svh-6rem)] items-end overflow-hidden px-4 pb-10 md:px-8"
    >
      <FloatingStickers y1={y1} y2={y2} />
      <motion.h1
        style={{ y: yText }}
        className="display relative z-10 text-[clamp(4rem,19vw,19rem)] md:ml-[4vw]"
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="block">{BRAND.top}</span>
        <span className="block -skew-x-6 text-tangerine">{BRAND.bottom}</span>
      </motion.h1>
      <p className="meta absolute right-4 top-6 hidden max-w-48 text-right text-mist/70 md:block">
        A fictional festival of design, motion, type & digital art. Catania, 12—14 June.
      </p>
    </section>
  );
}
