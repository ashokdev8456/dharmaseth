import type { Metadata } from "next";
import { FAQCTA } from "@/components/faq/FAQCTA";
import { FAQExplorer } from "@/components/faq/FAQExplorer";
import { FAQHero } from "@/components/faq/FAQHero";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";
import { faqItems } from "@/data/faq";

const description =
  "Answers about seva, one-time gifts, and monthly giving.";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description,
  path: routes.faq,
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "FAQs", path: routes.faq },
        ])}
      />
      <FAQHero />
      <Section aria-labelledby="faq-questions">
        <PageContainer>
          <SectionHeading
            id="faq-questions"
            eyebrow="Answers"
            title="Questions"
            description="Search by a word, or choose a topic. A question has to match both."
          />
          <FAQExplorer items={faqItems} />
        </PageContainer>
      </Section>
      <FAQCTA />
    </>
  );
}
