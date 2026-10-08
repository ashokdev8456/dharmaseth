import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CampaignShare } from "@/components/campaign-detail/CampaignShare";
import { routes } from "@/config/routes";
import type { Campaign } from "@/types/domain";
import { campaignStatusLabel, causeLabel } from "@/utils/campaignFilters";
import { formatCampaignDate } from "@/utils/dates";

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

  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        gap: { xs: 3, md: 6 },
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "3 / 2",
          borderRadius: 1.5,
          border: 1,
          borderColor: "border.subtle",
          bgcolor: "background.subtle",
        }}
      >
        {campaign.image?.src ? (
          <Image
            src={campaign.image.src}
            alt={campaign.image.alt || campaign.title}
            fill
            priority
            sizes="(min-width: 900px) 42vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        ) : null}
      </Box>
      <Stack spacing={2}>
        <Breadcrumbs
          aria-label="Breadcrumb"
          sx={{
            "& .MuiBreadcrumbs-ol": { flexWrap: "wrap" },
            "& .MuiBreadcrumbs-li": { minWidth: 0 },
            "& a": {
              color: "text.secondary",
              "&:focus-visible": {
                outline: "2px solid",
                outlineColor: "primary.dark",
                outlineOffset: 2,
              },
            },
          }}
        >
          <Link href={routes.home}>Home</Link>
          <Link href={routes.explore}>Explore</Link>
          <Typography color="text.primary" sx={{ minWidth: 0, overflowWrap: "anywhere" }}>
            {campaign.title}
          </Typography>
        </Breadcrumbs>
        <SectionHeading
          component="h1"
          eyebrow={causeLabel(campaign.causeId)}
          title={campaign.title}
          description={campaign.summary}
        />
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }} useFlexGap>
          <Chip
            size="small"
            label={campaignStatusLabel(campaign.status)}
            color={statusColor[campaign.status]}
            variant="outlined"
          />
          {campaign.featured ? (
            <Chip
              size="small"
              label="Featured"
              variant="outlined"
              sx={{ color: "primary.dark", borderColor: "primary.dark" }}
            />
          ) : null}
        </Stack>
        {campaign.location ? (
          <Typography variant="body2" color="text.secondary">
            {campaign.location}
          </Typography>
        ) : null}
        {endLabel ? (
          <Typography variant="body2" color="text.secondary">
            {endPrefix} {endLabel}
          </Typography>
        ) : null}
        <CampaignShare title={campaign.title} />
      </Stack>
    </Box>
  );
}
