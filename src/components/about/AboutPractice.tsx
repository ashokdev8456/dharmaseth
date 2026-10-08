import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SevaAreaCard } from "@/components/home/SevaAreas/SevaAreaCard";
import { routes } from "@/config/routes";
import { aboutApproach, aboutFocus, aboutTrust } from "@/data/about";
import { sevaAreas } from "@/data/home";

export function AboutPractice() {
  return (
    <>
      <Section aria-labelledby="approach-heading">
        <PageContainer>
          <Reveal>
            <Stack spacing={3} sx={{ maxWidth: 760 }}>
              <SectionHeading
                id="approach-heading"
                eyebrow={aboutApproach.eyebrow}
                title={aboutApproach.title}
                description={aboutApproach.description}
              />
              <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", borderBottom: "1px solid", borderColor: "border.subtle" }}>
                {aboutApproach.steps.map((step, index) => (
                  <Box
                    key={step}
                    component="li"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "2.5rem 1fr", sm: "4rem 1fr" },
                      gap: { xs: 1.5, sm: 3 },
                      py: 2.5,
                      borderTop: "1px solid",
                      borderColor: "border.subtle",
                    }}
                  >
                    <Typography aria-hidden variant="overline" sx={{ color: "primary.dark", pt: 0.4 }}>
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography variant="body1">{step}</Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          </Reveal>
        </PageContainer>
      </Section>
      <Section aria-labelledby="focus-heading" tone="subtle">
        <PageContainer>
          <Reveal>
            <SectionHeading
              id="focus-heading"
              index="04"
              eyebrow={aboutFocus.eyebrow}
              title={aboutFocus.title}
              description={aboutFocus.description}
            />
          </Reveal>
          <Box
            sx={{
              display: "grid",
              gap: 3,
              mt: { xs: 4, md: 5 },
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
            }}
          >
            {sevaAreas.map((area, index) => (
              <Reveal key={area.id} delay={index * 70}>
                <SevaAreaCard area={{ ...area, href: `${routes.explore}?cause=${area.id}` }} />
              </Reveal>
            ))}
          </Box>
        </PageContainer>
      </Section>
      <Section aria-labelledby="about-trust-heading">
        <PageContainer>
          <Reveal>
            <Stack spacing={2.5} sx={{ maxWidth: 760 }}>
              <SectionHeading id="about-trust-heading" eyebrow={aboutTrust.eyebrow} title={aboutTrust.title} />
              <Box component="ul" sx={{ m: 0, pl: 2.5, display: "grid", gap: 1.25 }}>
                {aboutTrust.points.map((point) => (
                  <Typography key={point} component="li" variant="body1" color="text.secondary">
                    {point}
                  </Typography>
                ))}
              </Box>
            </Stack>
          </Reveal>
        </PageContainer>
      </Section>
    </>
  );
}
