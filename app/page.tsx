import Link from "next/link";
import { AboutSection } from "@/components/design-explode/about-section";
import { Collage } from "@/components/design-explode/collage";
import { EditorialGallery } from "@/components/design-explode/editorial-gallery";
import { Hero } from "@/components/design-explode/hero";
import { Intro } from "@/components/design-explode/intro";
import { Lineup } from "@/components/design-explode/lineup";
import { Marquee } from "@/components/design-explode/marquee";
import { Newsletter } from "@/components/design-explode/newsletter";
import { Program } from "@/components/design-explode/program";
import { SectionHeading } from "@/components/design-explode/section-heading";
import { SelectedWork } from "@/components/design-explode/selected-work";
import { ShopSection } from "@/components/design-explode/shop-section";
import { VenueSection } from "@/components/design-explode/venue-section";
import { DISCIPLINES } from "@/lib/design-explode/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />

      <section className="px-4 py-16 md:px-8 md:py-32">
        <SectionHeading eyebrow="( 02 ) WHO'S COMING" title="Lineup" />
        <Lineup />
      </section>

      <Marquee
        items={["DESIGN EXPLODE", "DESIGN EXPLODE"]}
        duration={28}
        className="border-y border-mist/20 py-4"
      />

      <section className="px-4 py-24 md:px-8 md:py-40">
        <SectionHeading eyebrow="( 03 ) VISUAL RESEARCH" title="Featured visuals" />
        <EditorialGallery />
      </section>

      <section className="px-4 py-16 md:px-8 md:py-32">
        <SectionHeading eyebrow="( 04 ) THREE DAYS" title="Program" />
        <Program limit={4} />
        <Link href="/program" className="meta link-u mt-8 inline-block font-bold">
          FULL PROGRAM →
        </Link>
      </section>

      <section className="bg-pine-2 py-24 md:py-40">
        <h2 className="display px-4 text-[clamp(3rem,10vw,10rem)] md:px-8">Digital culture</h2>
        <Marquee items={DISCIPLINES} reverse duration={45} className="mt-10" />
      </section>

      <Collage />
      <SelectedWork />
      <AboutSection />
      <VenueSection />
      <ShopSection />
      <Newsletter />
    </>
  );
}
