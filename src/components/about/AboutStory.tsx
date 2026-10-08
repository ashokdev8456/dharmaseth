import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { StoryTimeline } from "@/components/about/StoryTimeline";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { aboutStory, whoWeAre } from "@/data/about";
import { missionContent } from "@/data/home";

export function AboutStory() {
  return (
    <>
      <Section aria-labelledby="who-heading">
        <PageContainer>
          <Stack spacing={3} sx={{ maxWidth: 760 }}>
            <Reveal>
              <Box sx={{ "& h2": { fontSize: "clamp(2.25rem, 1.3rem + 2vw, 3.5rem)", lineHeight: 1.12, fontWeight: 500 } }}>
                <SectionHeading id="who-heading" index="01" eyebrow={whoWeAre.eyebrow} title={whoWeAre.title} />
              </Box>
            </Reveal>
            <Stack spacing={2}>
              {[...whoWeAre.paragraphs, ...missionContent.details].map((paragraph, index) => (
                <Reveal key={paragraph} delay={160 + index * 120}>
                  <Typography variant="body1" color="text.secondary">
                    {paragraph}
                  </Typography>
                </Reveal>
              ))}
            </Stack>
          </Stack>
        </PageContainer>
      </Section>
      <Section aria-labelledby="story-heading" tone="subtle">
        <PageContainer>
          <Stack spacing={{ xs: 4, md: 6 }} sx={{ maxWidth: 760 }}>
            <Reveal>
              <SectionHeading
                id="story-heading"
                index="02"
                eyebrow={aboutStory.eyebrow}
                title={aboutStory.title}
                description={aboutStory.description}
              />
            </Reveal>
            <StoryTimeline milestones={aboutStory.milestones} />
          </Stack>
        </PageContainer>
      </Section>
    </>
  );
}
