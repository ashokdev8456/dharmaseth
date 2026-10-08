import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { AppButton } from "@/components/ui/AppButton";
import { aboutCta } from "@/data/about";

export function AboutCTA() {
  return (
    <Section aria-labelledby="about-cta">
      <PageContainer>
        <Reveal>
          <Stack
            spacing={2.5}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "28px",
              color: "#FFFFFF",
              background: "linear-gradient(115deg, #E39A1A 0%, #C46E00 48%, #A35600 100%)",
            }}
          >
            <Typography variant="overline" sx={{ alignSelf: "flex-start", px: 1.25, py: 0.5, borderRadius: 999, bgcolor: "rgba(255,255,255,0.18)" }}>
              Join the living work
            </Typography>
            <Typography id="about-cta" variant="h2" component="h2" sx={{ color: "inherit", maxWidth: 640 }}>
              {aboutCta.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.92)", maxWidth: 640 }}>
              {aboutCta.description}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <AppButton
                href={aboutCta.primary.href}
                variant="contained"
                sx={{ "&&": { borderRadius: 999, bgcolor: "#171717", color: "#FFFFFF", borderColor: "#171717" } }}
              >
                {aboutCta.primary.label}
              </AppButton>
              <AppButton
                href={aboutCta.secondary.href}
                variant="contained"
                sx={{ "&&": { borderRadius: 999, bgcolor: "rgba(255,255,255,0.22)", color: "#FFFFFF", borderColor: "transparent" } }}
              >
                {aboutCta.secondary.label}
              </AppButton>
            </Stack>
          </Stack>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
