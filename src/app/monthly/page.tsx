import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { MonthlyGivingClose } from "@/components/monthlyGiving/MonthlyGivingClose";
import { MonthlyGivingExplanation } from "@/components/monthlyGiving/MonthlyGivingExplanation";
import { MonthlyGivingFlow } from "@/components/monthlyGiving/MonthlyGivingFlow";
import { MonthlyGivingHero } from "@/components/monthlyGiving/MonthlyGivingHero";
import { MonthlyGivingTrust } from "@/components/monthlyGiving/MonthlyGivingTrust";
import { MonthlyImpact } from "@/components/monthlyGiving/MonthlyImpact";
import { pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";

const description =
  "Choose a monthly contribution to Dharmasethu. This page does not start a payment or a subscription.";

export const metadata: Metadata = pageMetadata({
  title: "Monthly giving",
  description,
  path: routes.monthly,
});

export default function MonthlyPage() {
  return (
    <>
      <MonthlyGivingHero />
      <MonthlyGivingExplanation />
      <MonthlyImpact />
      <Section
        accent
        tone="subtle"
        id="monthly-form"
        aria-labelledby="monthly-form-heading"
        sx={{ py: { xs: 3, md: 4 }, scrollMarginTop: { xs: 80, lg: 96 } }}
      >
        <PageContainer>
          <Stack spacing={1} sx={{ mb: { xs: 2, md: 2.5 }, maxWidth: 720 }}>
            <Typography id="monthly-form-heading" variant="h2" component="h2">
              Your monthly contribution
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is a monthly gift, not a one-time contribution. The amount you choose is shown per month.
            </Typography>
          </Stack>
          <Box>
            <MonthlyGivingFlow />
          </Box>
        </PageContainer>
      </Section>
      <MonthlyGivingTrust />
      <MonthlyGivingClose />
    </>
  );
}
