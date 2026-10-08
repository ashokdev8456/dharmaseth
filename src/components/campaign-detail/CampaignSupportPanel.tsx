import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AppButton } from "@/components/ui/AppButton";
import { CampaignProgress } from "@/components/campaigns/CampaignProgress";
import { givePath, routes } from "@/config/routes";
import type { Campaign } from "@/types/domain";

type CampaignSupportPanelProps = {
  campaign: Campaign;
};

export function CampaignSupportPanel({ campaign }: CampaignSupportPanelProps) {
  const supporters =
    campaign.donorCount === 1 ? "1 supporter" : `${campaign.donorCount} supporters`;
  return (
    <Stack
      component="section"
      aria-label="Campaign progress"
      spacing={2.5}
      sx={{
        p: 3,
        borderRadius: 1.5,
        border: 1,
        borderColor: "border.subtle",
        bgcolor: "background.paper",
      }}
    >
      <CampaignProgress raised={campaign.raisedInr} goal={campaign.goalInr} />
      <Typography variant="body2" color="text.secondary">
        {supporters}
      </Typography>
      {campaign.status === "active" ? (
        <AppButton href={givePath(campaign.slug)} variant="contained" sx={{ width: "100%" }}>
          Support this campaign
        </AppButton>
      ) : null}
      {campaign.status === "upcoming" ? (
        <>
          <Typography variant="body1">This campaign has not opened.</Typography>
          <AppButton href={routes.explore} variant="outlined" sx={{ width: "100%" }}>
            Explore campaigns
          </AppButton>
        </>
      ) : null}
      {campaign.status === "completed" ? (
        <>
          <Typography variant="body1">Campaign completed</Typography>
          <AppButton href={routes.explore} variant="outlined" sx={{ width: "100%" }}>
            Explore other campaigns
          </AppButton>
        </>
      ) : null}
      {campaign.status === "active" ? (
        <Typography variant="body2" color="text.secondary">
          The next page explains the contribution step. It does not take a payment yet.
        </Typography>
      ) : null}
    </Stack>
  );
}
