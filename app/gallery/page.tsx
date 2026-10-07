import type { Metadata } from "next";
import { EditorialGallery } from "@/components/design-explode/editorial-gallery";

export const metadata: Metadata = { title: "Gallery — DESIGN EXPLODE" };

export default function GalleryPage() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <h1 className="display mb-16 text-[clamp(4rem,16vw,16rem)]">Gallery</h1>
      <EditorialGallery />
    </section>
  );
}
