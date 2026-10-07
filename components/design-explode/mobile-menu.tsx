"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { NAV } from "@/lib/design-explode/data";

type Props = { open: boolean; onClose: () => void };

const COLORS = ["text-tangerine", "text-aqua", "text-butter", "text-lilac", "text-mist"];

export function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fixed inset-0 z-[60] flex flex-col justify-between bg-pine p-6 pt-28 md:hidden"
          initial={{ clipPath: "circle(0% at 90% 5%)", opacity: 0 }}
          animate={{ clipPath: "circle(150% at 90% 5%)", opacity: 1 }}
          exit={{ clipPath: "circle(0% at 90% 5%)", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <nav aria-label="Mobile">
            <ul className="space-y-2">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { delay: 0.15 + i * 0.05 } }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`display block text-[clamp(3rem,15vw,5rem)] ${COLORS[i]}`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          <Link
            href="/program"
            onClick={onClose}
            className="display rounded-full bg-tangerine px-6 py-4 text-center text-xl text-pine"
          >
            GET TICKETS →
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
