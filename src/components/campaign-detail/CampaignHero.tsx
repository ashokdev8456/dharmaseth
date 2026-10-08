import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { CampaignShare } from "@/components/campaign-detail/CampaignShare";
import { routes } from "@/config/routes";
import type { Campaign } from "@/types/domain";
import { campaignProgress, campaignStatusLabel, causeLabel } from "@/utils/campaignFilters";
import { formatCampaignDate } from "@/utils/dates";
import { formatInr } from "@/utils/money";

const statusColor = {
  active: "success",
  upcoming: "info",
  completed: "default",
} as const;

type CampaignHeroProps = {
  campaign: Campaign;
};

export function CampaignHero({ campaign }: CampaignHeroProps) {
  const endLabel = campaign.endDate ? formatCampaignDate(campaign.endDate) : null;
  const endPrefix = campaign.status === "completed" ? "Ended on" : "Ends on";

  const percent = campaignProgress(campaign.raisedInr, campaign.goalInr);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 460, md: 520 },
        borderRadius: "28px",
        border: "1px solid",
        borderColor: "border.subtle",
      }}
    >
      {campaign.image?.src ? (
        <Image
          src={campaign.image.src}
          alt={campaign.image.alt || campaign.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      ) : null}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(18,14,10,0.72) 0%, rgba(18,14,10,0.28) 58%, rgba(18,14,10,0.45) 100%)",
        }}
      />
      <Stack spacing={2} sx={{ position: "relative", zIndex: 1, minHeight: { xs: 460, md: 520 }, p: { xs: 2, md: 3 }, justifyContent: "space-between" }}>
        <Breadcrumbs
          aria-label="Breadcrumb"
          sx={{
            "& .MuiBreadcrumbs-ol": { flexWrap: "wrap" },
            "& .MuiBreadcrumbs-li, & .MuiBreadcrumbs-separator": { color: "#FFFDF8" },
            "& a": {
              color: "#FFFDF8",
              fontWeight: 700,
              "&:focus-visible": {
                outline: "2px solid",
                outlineColor: "#FF9F00",
                outlineOffset: 2,
              },
            },
          }}
        >
          <Link href={routes.home}>Home</Link>
          <Link href={routes.explore}>Explore</Link>
          <Typography sx={{ color: "#FFD59A", minWidth: 0, overflowWrap: "anywhere" }}>
            {campaign.title}
          </Typography>
        </Breadcrumbs>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            alignItems: "end",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 280px" },
          }}
        >
          <Stack spacing={1.5} sx={{ maxWidth: 640, color: "#FFFDF8" }}>
            <Typography variant="overline" sx={{ color: "#FFB347" }}>
              {causeLabel(campaign.causeId)}
            </Typography>
            <Typography variant="h1" component="h1" sx={{ color: "inherit", fontSize: { xs: "2rem", md: "2.6rem" }, lineHeight: 1.1 }}>
              {campaign.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255,253,248,0.9)" }}>
              {campaign.summary}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }} useFlexGap>
              <Chip size="small" label={campaignStatusLabel(campaign.status)} color={statusColor[campaign.status]} />
              {campaign.featured ? (
                <Chip size="small" label="Featured" sx={{ bgcolor: "#FF9F00", color: "#171717" }} />
              ) : null}
            </Stack>
            {campaign.location ? (
              <Typography variant="body2" sx={{ color: "rgba(255,253,248,0.86)" }}>
                {campaign.location}
              </Typography>
            ) : null}
            {endLabel ? (
              <Typography variant="body2" sx={{ color: "rgba(255,253,248,0.86)" }}>
                {endPrefix} {endLabel}
              </Typography>
            ) : null}
            <CampaignShare title={campaign.title} />
          </Stack>
          <Stack
            spacing={1}
            sx={{
              p: 2,
              borderRadius: "18px",
              bgcolor: "rgba(255,253,248,0.96)",
              color: "text.primary",
            }}
          >
            <Typography variant="overline" sx={{ color: "primary.dark" }}>
              Recorded amount
            </Typography>
            <Typography sx={{ fontWeight: 800, fontSize: "1.8rem", lineHeight: 1.1 }}>
              {formatInr(campaign.raisedInr)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {campaign.goalInr > 0 ? `${percent}% of ${formatInr(campaign.goalInr)}` : "No goal set"}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
