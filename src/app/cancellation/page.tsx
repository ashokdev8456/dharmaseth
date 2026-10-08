import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";
import { cancellationDocument } from "@/data/legal";

export const metadata: Metadata = pageMetadata({
  title: "Cancellation",
  description: cancellationDocument.summary,
  path: routes.cancellation,
});

export default function CancellationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Cancellation", path: routes.cancellation },
        ])}
      />
      <LegalDocument document={cancellationDocument} breadcrumb="Cancellation" />
    </>
  );
}
