import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";
import { privacyDocument } from "@/data/legal";

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description: privacyDocument.summary,
  path: routes.privacy,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Privacy", path: routes.privacy },
        ])}
      />
      <LegalDocument document={privacyDocument} breadcrumb="Privacy" />
    </>
  );
}
