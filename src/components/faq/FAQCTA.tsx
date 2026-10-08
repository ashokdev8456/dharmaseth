import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AppButton } from "@/components/ui/AppButton";
import { routes } from "@/config/routes";

export function FAQCTA() {
  return (
    <Section aria-labelledby="faq-cta" tone="subtle">
      <PageContainer>
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          <SectionHeading
            id="faq-cta"
            title="Still have a question?"
            description="Write to hello@dharmasethu.org, or browse the seva and review a gift."
          />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <AppButton href={routes.contact} variant="contained" sx={{ width: { xs: "100%", sm: "auto" } }}>
              Contact
            </AppButton>
            <AppButton href={routes.explore} variant="outlined" sx={{ width: { xs: "100%", sm: "auto" } }}>
              Explore seva
            </AppButton>
          </Stack>
        </Stack>
      </PageContainer>
    </Section>
  );
}
