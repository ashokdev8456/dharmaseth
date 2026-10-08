import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AppButton } from "@/components/ui/AppButton";
import { campaignPath } from "@/config/routes";
import { featuredStory } from "@/data/home";
import { motion } from "@/theme/motion";

const stories = [
  {
    id: "meals",
    label: "Annadanam",
    title: featuredStory.title,
    quote: featuredStory.description,
    note: "Rice and a simple side are set down on the leaf. The person who sits is not asked for a name, and the meal itself is the offering.",
    image: "/images/annadanam.jpg",
    imageAlt: "A sattvic meal of rice and sambar being served on a banana leaf.",
    href: campaignPath("shared-meals"),
  },
  {
    id: "lamps",
    label: "Temple care",
    title: "A lamp kept burning",
    quote:
      "Oil and wicks are set for the evening lamp, and the sanctum is swept before worship begins. Daily care is quiet work. A gift stands behind that rhythm, so the lamp is not left dark.",
    note: "The wick is trimmed, the oil is poured, and the stone is swept before anyone arrives. That repeated order is what keeps the sanctum ready.",
    image: "/images/morning-lamp.jpg",
    imageAlt: "A small oil lamp on a stone ledge in a quiet Indian temple verandah.",
    href: campaignPath("daily-lamps"),
  },
];

const ease = motion.easing.standard;

export function StoryCards() {
  return (
    <Section
      screen
      accent
      tone="subtle"
      aria-labelledby="stories-heading"
      sx={{
        "&&": { height: "auto", minHeight: "auto", overflow: "visible" },
        "&& > .MuiContainer-root": { height: "auto", minHeight: "auto", flex: "none" },
      }}
    >
      <PageContainer>
        <Stack spacing={{ xs: 2.5, lg: 3 }}>
          <SectionHeading
            id="stories-heading"
            eyebrow={featuredStory.eyebrow}
            title="Stories of dignity and hope"
            description="Two notes from the work this trust stands behind: a meal offered with dignity, and a lamp kept for daily worship."
            rule={false}
          />
          <Box
            sx={{
              display: "grid",
              gap: 2.5,
              alignItems: "stretch",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            {stories.map((story) => (
              <Box
                key={story.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "minmax(168px, 0.78fr) minmax(0, 1.22fr)" },
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "28px",
                  border: "1px solid",
                  borderColor: "border.subtle",
                  bgcolor: "background.paper",
                  boxShadow: "0 14px 36px rgba(38, 33, 27, 0.07)",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: "0 28px 56px rgba(163, 86, 0, 0.16)",
                    transform: "translateY(-8px)",
                    "& img": { transform: "scale(1.08)" },
                    "& .story-wash": { height: "78%" },
                    "& .story-sheen": { transform: "translateX(180%)" },
                    "& .story-rule": { width: 72 },
                  },
                  "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
                    transition: `transform ${motion.duration.emphasis}ms ${ease}, box-shadow ${motion.duration.emphasis}ms ${ease}, border-color ${motion.duration.fast}ms ${ease}`,
                    "& img": { transition: `transform ${motion.duration.reveal}ms ${ease}` },
                    "& .story-wash": { transition: `height ${motion.duration.emphasis}ms ${ease}` },
                    "& .story-sheen": { transition: `transform ${motion.duration.cinematic}ms ${ease}` },
                    "& .story-rule": { transition: `width ${motion.duration.emphasis}ms ${ease}` },
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    "&:hover": { transform: "none" },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: { xs: 210, sm: 280 },
                    height: { xs: 210, sm: "100%" },
                  }}
                >
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(min-width: 900px) 320px, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    className="story-wash"
                    aria-hidden
                    sx={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 0,
                      background:
                        "linear-gradient(to top, rgba(196, 110, 0, 0.72) 0%, rgba(255, 159, 0, 0.18) 62%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <Box
                    className="story-sheen"
                    aria-hidden
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: "46%",
                      transform: "translateX(-180%)",
                      background:
                        "linear-gradient(100deg, transparent 0%, rgba(255, 253, 248, 0.42) 48%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </Box>
                <Stack spacing={1.5} sx={{ p: { xs: 2.25, sm: 3 }, minWidth: 0 }}>
                  <Typography variant="overline" sx={{ color: "primary.dark", letterSpacing: "0.16em" }}>
                    {story.label}
                  </Typography>
                  <Box className="story-rule" aria-hidden sx={{ width: 28, height: 2, bgcolor: "primary.main", borderRadius: 1 }} />
                  <Typography variant="h3" component="h3" sx={{ lineHeight: 1.2 }}>
                    {story.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.65 }}>
                    {story.quote}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, flexGrow: 1 }}>
                    {story.note}
                  </Typography>
                  <AppButton href={story.href} variant="text" trailingArrow sx={{ alignSelf: "flex-start", px: 0, minHeight: 44 }}>
                    Read this seva
                  </AppButton>
                </Stack>
              </Box>
            ))}
          </Box>
        </Stack>
      </PageContainer>
    </Section>
  );
}
