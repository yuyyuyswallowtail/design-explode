import type { Metadata } from "next";
import { Program } from "@/components/design-explode/program";

export const metadata: Metadata = { title: "Program — DESIGN EXPLODE" };

export default function ProgramPage() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <h1 className="display mb-12 text-[clamp(4rem,16vw,16rem)]">Program</h1>
      <Program />
    </section>
  );
}
