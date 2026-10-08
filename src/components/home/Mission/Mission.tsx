import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Tilt } from "@/components/motion/Tilt";
import { AppButton } from "@/components/ui/AppButton";
import { missionContent } from "@/data/home";
import { motion, parallaxSx, visualEnterSx } from "@/theme/motion";

export function Mission() {
  return (
    <Section tone="subtle" aria-labelledby="mission-heading">
      <PageContainer>
        <Reveal>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.95fr) minmax(0, 1.05fr)" },
              gridTemplateAreas: {
                xs: `"visual" "copy" "cta"`,
                md: `"visual copy" "visual cta"`,
              },
              columnGap: { md: 5 },
              rowGap: { xs: 3, md: 2 },
              alignItems: "center",
            }}
          >
            <Stack spacing={2.5} sx={{ gridArea: "copy" }}>
              <SectionHeading
                id="mission-heading"
                eyebrow={missionContent.eyebrow}
                title={missionContent.title}
                description={missionContent.description}
                rule={false}
              />
              <Stack component="ol" spacing={0} sx={{ m: 0, p: 0, listStyle: "none" }}>
                {missionContent.details.map((paragraph, index) => (
                  <Stack
                    key={paragraph}
                    component="li"
                    spacing={1}
                    sx={{ py: 2, borderTop: "1px solid", borderColor: "divider" }}
                  >
                    <Typography
                      component="p"
                      aria-hidden
                      sx={{ color: "primary.dark", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {paragraph}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Box
              sx={{
                gridArea: "visual",
                ...visualEnterSx(),
                overflow: "hidden",
                borderRadius: 1.5,
                border: 1,
                borderColor: "border.subtle",
                "& img": {
                  transition: `transform ${motion.duration.emphasis}ms ${motion.easing.standard}`,
                },
                "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                  "&:hover img": {
                    animation: "none",
                    transform: "scale(1.04)",
                  },
                },
              }}
            >
              <Box sx={{ position: "relative", aspectRatio: { xs: "4 / 3", md: "4 / 5" }, overflow: "hidden" }}>
                <Box sx={{ position: "absolute", inset: { xs: 0, md: "-6% 0" }, ...parallaxSx() }}>
                  <Tilt>
                    <Box sx={{ position: "relative", height: "100%" }}>
                      <Image
                        src="/images/temple-courtyard.jpg"
                        alt="A stone mandapa in an Indian temple, with daylight between carved pillars."
                        fill
                        sizes="(min-width: 900px) 46vw, 100vw"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Tilt>
                </Box>
              </Box>
            </Box>
            <AppButton
              href={missionContent.cta.href}
              variant="contained"
              trailingArrow
              sx={{
                gridArea: "cta",
                justifySelf: { xs: "stretch", sm: "start" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              {missionContent.cta.label}
            </AppButton>
          </Box>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
