import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeaturedCauseCard } from "@/components/home/FeaturedCauses/FeaturedCauseCard";
import { Tilt } from "@/components/motion/Tilt";
import { AppButton } from "@/components/ui/AppButton";
import { featuredCauses, featuredCausesContent } from "@/data/home";

export function FeaturedCauses() {
  return (
    <Section aria-labelledby="causes-heading">
      <PageContainer>
        <Stack spacing={{ xs: 3, md: 4 }}>
          <Reveal>
            <SectionHeading
              id="causes-heading"
              eyebrow={featuredCausesContent.eyebrow}
              title={featuredCausesContent.title}
              description={featuredCausesContent.description}
              rule={false}
            />
          </Reveal>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              alignItems: "stretch",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
              "& > *": { height: "100%" },
            }}
          >
            {featuredCauses.map((cause, index) => (
              <Reveal key={cause.id} delay={index * 120}>
                <Tilt>
                  <FeaturedCauseCard cause={cause} index={index} />
                </Tilt>
              </Reveal>
            ))}
          </Box>
          <Reveal>
            <AppButton
              href={featuredCausesContent.cta.href}
              variant="outlined"
              trailingArrow
              sx={{ alignSelf: "flex-start" }}
            >
              {featuredCausesContent.cta.label}
            </AppButton>
          </Reveal>
        </Stack>
      </PageContainer>
    </Section>
  );
}
