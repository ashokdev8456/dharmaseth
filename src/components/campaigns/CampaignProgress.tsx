import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { campaignProgress } from "@/utils/campaignFilters";
import { formatInr } from "@/utils/money";

type CampaignProgressProps = {
  raised: number;
  goal: number;
};

export function CampaignProgress({ raised, goal }: CampaignProgressProps) {
  const percent = campaignProgress(raised, goal);
  const hasGoal = Number.isFinite(goal) && goal > 0;
  const label = hasGoal ? `${formatInr(raised)} raised of ${formatInr(goal)}` : "No goal set";

  return (
    <Stack spacing={1}>
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", gap: 1, minHeight: 40 }}>
        <Typography variant="body2" sx={{ minWidth: 0 }}>
          {label}
        </Typography>
        <Typography variant="label" component="span" sx={{ flexShrink: 0, minWidth: "2.75rem", textAlign: "right" }}>
          {hasGoal ? `${percent}%` : "\u00a0"}
        </Typography>
      </Stack>
      <LinearProgress variant="determinate" value={percent} aria-hidden />
    </Stack>
  );
}
