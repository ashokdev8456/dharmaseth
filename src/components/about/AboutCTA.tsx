import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { AppButton } from "@/components/ui/AppButton";
import { aboutCta } from "@/data/about";

export function AboutCTA() {
  return (
    <Section aria-labelledby="about-cta" sx={{ py: { xs: 3, md: 4 } }}>
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            alignItems: "stretch",
            overflow: "hidden",
            borderRadius: "28px",
            border: "1px solid",
            borderColor: "border.subtle",
            bgcolor: "background.paper",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" },
          }}
        >
          <Box sx={{ position: "relative", minHeight: { xs: 220, md: 320 } }}>
            <Image
              src="/images/home/annadanam-courtyard.jpg"
              alt="A meal being served to people seated in a row in a temple courtyard."
              fill
              sizes="(min-width: 900px) 40vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Stack spacing={2} sx={{ p: { xs: 3, md: 5 }, justifyContent: "center" }}>
            <Typography variant="overline" sx={{ color: "primary.dark" }}>
              Join the living work
            </Typography>
            <Typography id="about-cta" variant="h2" component="h2">
              {aboutCta.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {aboutCta.description}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <AppButton href={aboutCta.primary.href} variant="contained" sx={{ borderRadius: 999 }}>
                {aboutCta.primary.label}
              </AppButton>
              <AppButton href={aboutCta.secondary.href} variant="outlined" sx={{ borderRadius: 999 }}>
                {aboutCta.secondary.label}
              </AppButton>
            </Stack>
          </Stack>
        </Box>
      </PageContainer>
    </Section>
  );
}
