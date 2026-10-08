import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FlareOutlinedIcon from "@mui/icons-material/FlareOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import TempleHinduOutlinedIcon from "@mui/icons-material/TempleHinduOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import Link from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { liftCardSx } from "@/components/home/landing/cardMotion";
import { sevaAreas, sevaAreasContent } from "@/data/home";
import { motion } from "@/theme/motion";
import type { SevaIconName } from "@/types/home";

const further: Record<string, string> = {
  heritage: "The evening lamp and the open sanctum are the work a gift stands behind.",
  "vedic-education": "Palm leaf, paper, and a place to stay are named with that year of study.",
  "living-beings": "Fodder, water, and a simple shelter are what the gift covers.",
  "seva-support": "The need is written down before a gift is asked.",
  annadanam: "Anyone who comes hungry can sit for that meal.",
  "sacred-events": "The gathering is served by what is ready when people arrive.",
};

const icons: Record<SevaIconName, typeof TempleHinduOutlinedIcon> = {
  temple: TempleHinduOutlinedIcon,
  learning: MenuBookOutlinedIcon,
  beings: ParkOutlinedIcon,
  service: VolunteerActivismOutlinedIcon,
  meals: RestaurantOutlinedIcon,
  events: FlareOutlinedIcon,
};

export function ServiceGrid() {
  return (
    <Section
      screen
      accent
      aria-labelledby="seva-heading"
      sx={{
        bgcolor: "background.default",
        "&&": { height: "auto", minHeight: "auto", overflow: "visible" },
        "&& > .MuiContainer-root": { height: "auto", minHeight: "auto", flex: "none" },
      }}
    >
      <PageContainer>
        <Stack spacing={{ xs: 2.5, lg: 3 }}>
          <SectionHeading
            id="seva-heading"
            eyebrow={sevaAreasContent.eyebrow}
            title="Where your support creates change"
            description={sevaAreasContent.description}
            rule={false}
          />
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
            }}
          >
            {sevaAreas.map((area) => {
              const Icon = icons[area.icon];
              return (
                <Stack
                  key={area.id}
                  spacing={1.25}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    p: 2.5,
                    borderRadius: "22px",
                    border: "1px solid",
                    borderColor: "border.subtle",
                    bgcolor: "background.paper",
                    color: "text.primary",
                    ...liftCardSx,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 0,
                      bgcolor: "primary.main",
                      zIndex: 0,
                      pointerEvents: "none",
                      "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
                        transition: `height ${motion.duration.emphasis}ms ${motion.easing.standard}`,
                      },
                    },
                    "& > *": { position: "relative", zIndex: 1 },
                    "&:hover::before, &:focus-within::before": { height: "100%" },
                    "&:hover, &:focus-within": {
                      color: "#171717",
                      "& .seva-icon": { color: "#171717", bgcolor: "rgba(255,253,248,0.72)" },
                      "& .seva-link": { color: "#171717" },
                    },
                  }}
                >
                  <Box
                    className="seva-icon"
                    aria-hidden
                    sx={{
                      width: 44,
                      height: 44,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "14px",
                      color: "primary.dark",
                      bgcolor: "background.subtle",
                    }}
                  >
                    <Icon />
                  </Box>
                  <Typography variant="h3" component="h3">
                    {area.title}
                  </Typography>
                  <Typography variant="body2" sx={{ flexGrow: 1, lineHeight: 1.55 }}>
                    {area.description} {further[area.id]}
                  </Typography>
                  {area.href ? (
                    <Link href={area.href} style={{ textDecoration: "none" }}>
                      <Typography
                        className="seva-link"
                        variant="label"
                        sx={{ color: "primary.dark", minHeight: 44, display: "inline-flex", alignItems: "center" }}
                      >
                        Explore
                      </Typography>
                    </Link>
                  ) : null}
                </Stack>
              );
            })}
          </Box>
        </Stack>
      </PageContainer>
    </Section>
  );
}
