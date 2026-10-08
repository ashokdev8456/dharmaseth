import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import { CampaignProgress } from "@/components/campaigns/CampaignProgress";
import { campaignPath } from "@/config/routes";
import type { ContributionCampaign } from "@/types/contribution";
import { parseContributionAmount, validateAmount } from "@/utils/contribution";
import { formatInr } from "@/utils/money";

type CampaignContributionSummaryProps = {
  campaign: ContributionCampaign;
  amount: string;
};

export function CampaignContributionSummary({ campaign, amount }: CampaignContributionSummaryProps) {
  const parsed = validateAmount(amount) ? null : parseContributionAmount(amount);

  return (
    <Stack
      component="section"
      aria-label="Campaign summary"
      spacing={2}
      sx={{
        p: { xs: 2, sm: 2.5 },
        borderRadius: 1.5,
        border: 1,
        borderColor: "border.subtle",
        bgcolor: "background.paper",
      }}
    >
      <Stack direction={{ xs: "row", md: "column" }} spacing={2}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
            width: { xs: 96, md: "100%" },
            aspectRatio: { xs: "1 / 1", md: "3 / 2" },
            borderRadius: 1,
            bgcolor: "background.subtle",
          }}
        >
          {campaign.imageSrc ? (
            <Image
              src={campaign.imageSrc}
              alt={campaign.imageAlt}
              fill
              sizes="(min-width: 900px) 320px, 96px"
              style={{ objectFit: "cover" }}
            />
          ) : null}
        </Box>
        <Stack spacing={1} sx={{ minWidth: 0 }}>
          <Typography variant="overline" sx={{ color: "primary.dark" }}>
            {campaign.causeLabel}
          </Typography>
          <Typography variant="h3" component="p" sx={{ overflowWrap: "anywhere" }}>
            {campaign.title}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        {campaign.summary}
      </Typography>
      <CampaignProgress raised={campaign.raisedInr} goal={campaign.goalInr} />
      <Stack spacing={0.5}>
        <Typography variant="body2" color="text.secondary">
          Your contribution
        </Typography>
        <Typography variant="h3" component="p">
          {parsed === null ? "Not chosen yet" : formatInr(parsed)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {parsed === null ? "The total appears after a valid amount." : `Total ${formatInr(parsed)}. No fee is added.`}
        </Typography>
      </Stack>
      <Link component={NextLink} href={campaignPath(campaign.slug)} variant="body2">
        View campaign
      </Link>
    </Stack>
  );
}
