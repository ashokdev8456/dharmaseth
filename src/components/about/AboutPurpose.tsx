import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { aboutVision } from "@/data/about";
import { missionContent } from "@/data/home";

export function AboutPurpose() {
  return (
    <Section aria-label="Mission and vision">
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          <Reveal>
            <Stack
              component="article"
              aria-labelledby="mission-heading"
              spacing={2}
              sx={{
                height: "100%",
                p: { xs: 4, md: 6 },
                borderRadius: 1.5,
                bgcolor: "#17130F",
                color: "#F8F5EE",
              }}
            >
              <Typography variant="overline" sx={{ color: "#E8C99A" }}>
                Mission
              </Typography>
              <Typography id="mission-heading" variant="h2" component="h2" sx={{ color: "inherit" }}>
                {missionContent.title}
              </Typography>
              <Typography variant="bodyLarge" sx={{ color: "inherit" }}>
                What the work is for.
              </Typography>
              <Typography variant="body1" sx={{ color: "inherit" }}>
                {missionContent.description}
              </Typography>
            </Stack>
          </Reveal>
          <Reveal delay={80}>
            <Stack
              component="article"
              aria-labelledby="vision-heading"
              spacing={2}
              sx={{
                height: "100%",
                p: { xs: 4, md: 6 },
                borderRadius: 1.5,
                border: 1,
                borderColor: "border.subtle",
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="overline" sx={{ color: "primary.dark" }}>
                {aboutVision.eyebrow}
              </Typography>
              <Typography id="vision-heading" variant="h2" component="h2">
                {aboutVision.title}
              </Typography>
              <Typography variant="bodyLarge" color="text.secondary">
                {aboutVision.statement}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {aboutVision.description}
              </Typography>
            </Stack>
          </Reveal>
        </Box>
      </PageContainer>
    </Section>
  );
}
