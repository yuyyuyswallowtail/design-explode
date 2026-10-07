"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/design-explode/data";

const KEY = "de-loaded";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) {
      setShow(false);
      return;
    }
    const id = setInterval(() => setPct((p) => Math.min(100, p + 5)), 40);
    const done = setTimeout(() => {
      sessionStorage.setItem(KEY, "1");
      setShow(false);
    }, 1000);
    return () => {
      clearInterval(id);
      clearTimeout(done);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-label="Loading"
          className="fixed inset-0 z-[110] flex flex-col justify-between bg-pine p-6"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <svg viewBox="0 0 100 100" className="spin-slow size-12 text-tangerine">
            <title>Loading star</title>
            <path fill="currentColor" d="M50 0l9 33 33-9-24 26 24 26-33-9-9 33-9-33-33 9 24-26L8 24l33 9z" />
          </svg>
          <p className="display text-[clamp(3.5rem,16vw,14rem)]">
            {BRAND.top}
            <br />
            <span className="text-tangerine">{BRAND.bottom}</span>
          </p>
          <p className="meta text-right text-2xl font-bold">{pct}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
