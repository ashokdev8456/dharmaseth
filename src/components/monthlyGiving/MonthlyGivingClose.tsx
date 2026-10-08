import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { AppButton } from "@/components/ui/AppButton";
import { monthlyClose } from "@/data/monthlyGiving";

export function MonthlyGivingClose() {
  return (
    <Section accent tone="subtle" aria-labelledby="monthly-close" sx={{ py: { xs: 3, md: 4 } }}>
      <PageContainer>
        <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center", maxWidth: 640, mx: "auto" }}>
          <Typography id="monthly-close" variant="h2" component="h2">
            {monthlyClose.title}
          </Typography>
          <Typography variant="bodyLarge" color="text.secondary">
            {monthlyClose.description}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ width: { xs: "100%", sm: "auto" } }}>
            <Button href="#monthly-form" variant="contained">
              {monthlyClose.primary}
            </Button>
            <AppButton href={monthlyClose.secondary.href} variant="outlined">
              {monthlyClose.secondary.label}
            </AppButton>
          </Stack>
        </Stack>
      </PageContainer>
    </Section>
  );
}
