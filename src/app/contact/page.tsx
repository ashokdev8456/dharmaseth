import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";

const description = "A contact form will be added in a later phase.";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description,
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact"
      description={description}
    />
  );
}
