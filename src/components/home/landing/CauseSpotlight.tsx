import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AppButton } from "@/components/ui/AppButton";
import { liftCardSx } from "@/components/home/landing/cardMotion";
import { campaignPath } from "@/config/routes";
import { campaigns } from "@/data/campaigns";
import { campaignProgress, causeLabel } from "@/utils/campaignFilters";
import { formatInr } from "@/utils/money";

const spotlight = ["daily-lamps", "shared-meals", "year-of-study", "grove-care"];

const spotlightPhotos: Record<string, { src: string; alt: string }> = {
  "daily-lamps": {
    src: "/images/home/sanctum-lamps.jpg",
    alt: "A carved stone temple sanctum lined with oil lamps, with people seated before the shrine.",
  },
  "shared-meals": {
    src: "/images/home/annadanam-hall.jpg",
    alt: "People eating a meal served on banana leaves in a temple hall.",
  },
  "grove-care": {
    src: "/images/desi-cows.jpg",
    alt: "Indian cows resting in the shade of a banyan beside a tiled shelter.",
  },
  "year-of-study": {
    src: "/images/pathashala.jpg",
    alt: "A teacher reading a palm-leaf manuscript on an Indian verandah.",
  },
};

export function CauseSpotlight() {
  const items = spotlight.flatMap((slug) => {
    const campaign = campaigns.find((item) => item.slug === slug);
    return campaign ? [campaign] : [];
  });

  return (
    <Section
      screen
      accent
      tone="subtle"
      aria-labelledby="causes-heading"
      sx={{
        "&&": { height: "auto", minHeight: "auto", overflow: "visible" },
        "&& > .MuiContainer-root": { height: "auto", minHeight: "auto", flex: "none" },
      }}
    >
      <PageContainer>
        <Stack spacing={{ xs: 2.5, lg: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <SectionHeading
              id="causes-heading"
              eyebrow="Active seva"
              title="Support a cause. Change a life."
              description="Each card names a seva, shows the goal and the amount recorded, and opens the page where a gift can be reviewed."
              rule={false}
            />
            <AppButton href="/explore" variant="text" trailingArrow sx={{ flexShrink: 0 }}>
              View all seva
            </AppButton>
          </Box>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              alignItems: "stretch",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, minmax(0, 1fr))" },
              "& > *": { height: "100%" },
            }}
          >
            {items.map((campaign) => {
              const percent = campaignProgress(campaign.raisedInr, campaign.goalInr);
              const photo = spotlightPhotos[campaign.slug] ?? campaign.image;
              return (
                <Stack
                  key={campaign.slug}
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "22px",
                    border: "1px solid",
                    borderColor: "border.subtle",
                    bgcolor: "background.paper",
                    boxShadow: "0 12px 30px rgba(38, 33, 27, 0.06)",
                    ...liftCardSx,
                  }}
                >
                  <Box sx={{ position: "relative", height: { xs: 168, sm: 176 }, flexShrink: 0 }}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1200px) 23vw, (min-width: 600px) 46vw, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                    <Typography
                      component="p"
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        px: 1,
                        py: 0.4,
                        borderRadius: 999,
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {causeLabel(campaign.causeId)}
                    </Typography>
                  </Box>
                  <Stack spacing={1.25} sx={{ p: 2, flexGrow: 1 }}>
                    <Typography variant="h3" component="h3" sx={{ flexShrink: 0, lineHeight: 1.25 }}>
                      {campaign.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                      {campaign.summary}
                    </Typography>
                    <Stack spacing={1} sx={{ mt: "auto", flexShrink: 0 }}>
                      <LinearProgress
                        variant="determinate"
                        value={Math.min(100, percent)}
                        aria-label={`${percent} percent of the goal`}
                        sx={{ height: 8, borderRadius: 99, bgcolor: "background.subtle" }}
                      />
                      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "baseline", gap: 1 }}>
                        <Typography variant="body2">{formatInr(campaign.raisedInr)} raised</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          {percent}%
                        </Typography>
                      </Stack>
                      <Typography variant="caption" color="text.secondary">
                        Goal {formatInr(campaign.goalInr)} · {campaign.donorCount} supporters
                      </Typography>
                      <AppButton href={campaignPath(campaign.slug)} variant="contained" sx={{ borderRadius: 999 }}>
                        Support this seva
                      </AppButton>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </Box>
        </Stack>
      </PageContainer>
    </Section>
  );
}
