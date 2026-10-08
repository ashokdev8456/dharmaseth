import type { Metadata } from "next";
import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutView } from "@/components/about/AboutView";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";

const description =
  "DharmaSetHu Trust stands with temples, Annadanam, study, and care for living beings.";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description,
  path: routes.about,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "About", path: routes.about },
        ])}
      />
      <AboutView />
      <AboutCTA />
    </>
  );
}
