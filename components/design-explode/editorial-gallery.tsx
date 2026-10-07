"use client";

import { motion } from "framer-motion";
import { GALLERY } from "@/lib/design-explode/data";
import { SafeImage } from "./safe-image";

export function EditorialGallery() {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-14 md:grid-cols-12">
      {GALLERY.map((g, i) => (
        <motion.figure
          key={g.caption}
          className={`${g.span} ${i % 2 ? "md:mt-24" : ""} group`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`relative overflow-hidden ${g.ratio}`}>
            <SafeImage
              src={g.src}
              alt={g.alt}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <figcaption className="meta mt-3 flex justify-between text-mist/70">
            <span>{g.caption}</span>
            <span>Image: {g.credit}</span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
