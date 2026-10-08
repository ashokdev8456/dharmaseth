import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FAQCTA } from "@/components/faq/FAQCTA";
import { FAQExplorer } from "@/components/faq/FAQExplorer";
import { FAQHero } from "@/components/faq/FAQHero";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";
import { faqCategories, faqItems } from "@/data/faq";

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
      <Section accent tone="subtle" aria-labelledby="faq-topics" sx={{ py: { xs: 3, md: 4 } }}>
        <PageContainer>
          <Typography id="faq-topics" variant="h2" component="h2" sx={{ mb: 2, fontSize: { xs: "1.4rem", md: "1.6rem" } }}>
            Choose a theme
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(5, minmax(0, 1fr))" },
            }}
          >
            {faqCategories
              .filter((category) => category.id !== "all")
              .map((category) => (
                <Box
                  key={category.id}
                  sx={{
                    p: 2,
                    minHeight: 96,
                    borderRadius: "18px",
                    border: "1px solid #FF9F00",
                    bgcolor: "#FFFDF8",
                    backgroundImage: "linear-gradient(160deg, #FFF6E5 0%, #FFFDF8 70%)",
                  }}
                >
                  <Typography variant="overline" sx={{ color: "primary.dark" }}>
                    Theme
                  </Typography>
                  <Typography variant="h3" component="h3" sx={{ fontSize: "1.05rem" }}>
                    {category.label}
                  </Typography>
                </Box>
              ))}
          </Box>
        </PageContainer>
      </Section>
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
