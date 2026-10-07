import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CustomCursor } from "@/components/design-explode/custom-cursor";
import { LoadingScreen } from "@/components/design-explode/loading-screen";
import { SiteFooter } from "@/components/design-explode/site-footer";
import { SiteHeader } from "@/components/design-explode/site-header";
import "./globals.css";

const description =
  "A fictional creative festival exploring design, motion, typography, digital art and interactive experiences.";

export const metadata: Metadata = {
  title: "DESIGN EXPLODE — Experimental Design Festival",
  description,
  openGraph: {
    title: "DESIGN EXPLODE — Experimental Design Festival",
    description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <CustomCursor />
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
