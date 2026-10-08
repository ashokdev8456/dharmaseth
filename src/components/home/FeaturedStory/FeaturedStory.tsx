import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StoryVisual } from "@/components/home/FeaturedStory/StoryVisual";
import { AppButton } from "@/components/ui/AppButton";
import { featuredStory } from "@/data/home";

export function FeaturedStory() {
  return (
    <Section aria-labelledby="story-heading" sx={{ bgcolor: "#17130F", color: "#F8F5EE" }}>
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            alignItems: "center",
            columnGap: { md: 5 },
            rowGap: { xs: 3, md: 0 },
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" },
            gridTemplateAreas: {
              xs: `"copy" "visual"`,
              md: `"visual copy"`,
            },
          }}
        >
          <Box sx={{ gridArea: "visual" }}>
            <Reveal>
              <StoryVisual />
            </Reveal>
          </Box>
          <Stack
            spacing={3}
            sx={{
              gridArea: "copy",
              "& .MuiTypography-overline": { color: "#E8C99A" },
              "& h2, & .MuiTypography-bodyLarge": { color: "#F8F5EE" },
            }}
          >
            <Reveal delay={80}>
              <SectionHeading
                id="story-heading"
                eyebrow={featuredStory.eyebrow}
                title={featuredStory.title}
                description={featuredStory.description}
              />
            </Reveal>
            <Reveal delay={160}>
              <AppButton
                href={featuredStory.cta.href}
                variant="outlined"
                trailingArrow
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  color: "#F8F5EE",
                  borderColor: "#F8F5EE",
                  "&:hover": { borderColor: "#F8F5EE", bgcolor: "rgba(248,245,238,0.08)" },
                }}
              >
                {featuredStory.cta.label}
              </AppButton>
            </Reveal>
          </Stack>
        </Box>
      </PageContainer>
    </Section>
  );
}
