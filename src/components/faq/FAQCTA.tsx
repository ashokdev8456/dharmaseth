import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { AppButton } from "@/components/ui/AppButton";
import { routes } from "@/config/routes";

export function FAQCTA() {
  return (
    <Section aria-labelledby="faq-cta" sx={{ py: { xs: 3, md: 4 } }}>
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            overflow: "hidden",
            borderRadius: "24px",
            border: "1px solid",
            borderColor: "border.subtle",
            bgcolor: "background.paper",
            gridTemplateColumns: { xs: "1fr", md: "220px minmax(0, 1fr)" },
          }}
        >
          <Box sx={{ position: "relative", minHeight: 160 }}>
            <Image
              src="/images/morning-lamp.jpg"
              alt="A brass lamp lit in a temple."
              fill
              sizes="220px"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Stack spacing={2} sx={{ p: { xs: 2.5, md: 4 }, justifyContent: "center" }}>
            <Typography id="faq-cta" variant="h2" component="h2" sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" } }}>
              Still have a question?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Write to hello@dharmasethu.org, or browse the seva and review a gift.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <AppButton href={routes.contact} variant="contained" sx={{ width: { xs: "100%", sm: "auto" } }}>
                Contact
              </AppButton>
              <AppButton href={routes.explore} variant="outlined" sx={{ width: { xs: "100%", sm: "auto" } }}>
                Explore seva
              </AppButton>
            </Stack>
          </Stack>
        </Box>
      </PageContainer>
    </Section>
  );
}
