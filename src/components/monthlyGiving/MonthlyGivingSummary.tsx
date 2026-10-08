import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { monthlyGiving } from "@/config/monthlyGiving";
import { parseContributionAmount, validateAmount } from "@/utils/contribution";
import { formatMonthlyAmount } from "@/utils/monthlyGiving";

type MonthlyGivingSummaryProps = {
  amount: string;
};

export function MonthlyGivingSummary({ amount }: MonthlyGivingSummaryProps) {
  const parsed = validateAmount(amount, { minimumAmount: monthlyGiving.minimumAmount, monthly: true })
    ? null
    : parseContributionAmount(amount);

  return (
    <Stack
      component="section"
      aria-label="Monthly contribution summary"
      spacing={1.5}
      sx={{
        p: 2,
        borderRadius: "22px",
        border: "1px solid",
        borderColor: "border.subtle",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="overline" sx={{ color: "primary.dark" }}>
        Monthly contribution
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Frequency
      </Typography>
      <Typography variant="body1">{monthlyGiving.frequencyLabel}</Typography>
      <Typography variant="body2" color="text.secondary">
        Amount
      </Typography>
      <Typography variant="h3" component="p">
        {parsed === null ? "Not chosen yet" : formatMonthlyAmount(parsed)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {parsed === null
          ? "A valid monthly amount appears here."
          : `Each month: ${formatMonthlyAmount(parsed)}. No fee is added.`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Status: no payment has been started.
      </Typography>
    </Stack>
  );
}
