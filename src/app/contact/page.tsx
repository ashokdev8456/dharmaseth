import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";

const description = "A printed contact page. The form does not send a message.";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description,
  path: routes.contact,
});

export default function ContactPage() {
  return <ContactForm />;
}
