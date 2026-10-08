import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SplitText } from "@/components/motion/SplitText";
import { AppButton } from "@/components/ui/AppButton";
import { homepageCta } from "@/data/home";

export function HomepageCTA() {
  return (
    <Section
      aria-labelledby="cta-heading"
      sx={{ bgcolor: "#17130F", color: "#F8F5EE" }}
    >
      <PageContainer>
        <Reveal>
          <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center", maxWidth: 680, mx: "auto" }}>
            <Typography variant="overline" sx={{ color: "#E8C99A" }}>
              {homepageCta.eyebrow}
            </Typography>
            <SplitText id="cta-heading" text={homepageCta.title} component="h2" variant="h2" color="inherit" />
            <Typography variant="bodyLarge" sx={{ color: "inherit", maxWidth: 560 }}>
              {homepageCta.description}
            </Typography>
            <AppButton href={homepageCta.cta.href} variant="contained" trailingArrow sx={{ width: { xs: "100%", sm: "auto" } }}>
              {homepageCta.cta.label}
            </AppButton>
          </Stack>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
