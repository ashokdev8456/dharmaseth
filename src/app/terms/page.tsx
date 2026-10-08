import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";
import { termsDocument } from "@/data/legal";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description: termsDocument.summary,
  path: routes.terms,
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Terms", path: routes.terms },
        ])}
      />
      <LegalDocument document={termsDocument} breadcrumb="Terms" />
    </>
  );
}
