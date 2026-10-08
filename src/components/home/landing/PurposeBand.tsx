import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { AppButton } from "@/components/ui/AppButton";
import { routes } from "@/config/routes";
import { featuredStory, missionContent } from "@/data/home";

export function PurposeBand() {
  return (
    <Section screen accent aria-labelledby="purpose-heading" sx={{ bgcolor: "background.default" }}>
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3, md: 4, lg: 5 },
            alignItems: "center",
            height: { lg: "100%" },
            minHeight: 0,
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              aspectRatio: { xs: "4 / 3", lg: "auto" },
              height: { lg: "100%" },
              minHeight: { xs: 200, lg: 0 },
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/home/annadanam-hall.jpg"
              alt="People eating a meal served on banana leaves in a temple hall."
              fill
              sizes="(min-width: 900px) 46vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ color: "primary.dark" }}>
              {missionContent.eyebrow}
            </Typography>
            <Typography id="purpose-heading" variant="h2" component="h2">
              {missionContent.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {missionContent.description}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {missionContent.details[0]}
            </Typography>
            <Box sx={{ p: 2, borderRadius: "16px", bgcolor: "background.subtle" }}>
              <Typography variant="body2" color="text.secondary">
                {featuredStory.description}
              </Typography>
            </Box>
            <AppButton href={routes.about} variant="text" trailingArrow sx={{ alignSelf: "flex-start" }}>
              Read our purpose
            </AppButton>
          </Stack>
        </Box>
      </PageContainer>
    </Section>
  );
}
