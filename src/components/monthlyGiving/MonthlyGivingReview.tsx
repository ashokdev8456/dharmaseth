import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { monthlyGiving } from "@/config/monthlyGiving";
import type { ContributionFormData } from "@/types/contribution";
import { maskEmail, maskPhone } from "@/utils/contribution";
import { formatMonthlyAmount } from "@/utils/monthlyGiving";

type MonthlyGivingReviewProps = {
  amount: number;
  data: ContributionFormData;
  onEditAmount: () => void;
  onEditDetails: () => void;
};

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <>
      <Typography component="dt" variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography component="dd" variant="body1" sx={{ m: 0, overflowWrap: "anywhere" }}>
        {value}
      </Typography>
    </>
  );
}

export function MonthlyGivingReview({ amount, data, onEditAmount, onEditDetails }: MonthlyGivingReviewProps) {
  const note = data.message.trim();
  const monthlyAmount = formatMonthlyAmount(amount);

  return (
    <Stack spacing={2.5}>
      <Typography variant="body2" color="text.secondary">
        This is a monthly contribution, not a one-time gift.
      </Typography>
      <Box
        component="dl"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "180px minmax(0, 1fr)" },
          gap: { xs: 0.5, sm: 1.5 },
          rowGap: 1.5,
          m: 0,
        }}
      >
        <ReviewRow label="Monthly contribution" value={monthlyAmount} />
        <ReviewRow label="Frequency" value={monthlyGiving.frequencyLabel} />
        <ReviewRow label="Contributor" value={data.fullName.trim()} />
        <ReviewRow label="Email" value={maskEmail(data.email)} />
        <ReviewRow label="Phone" value={maskPhone(data.phone)} />
        <ReviewRow
          label="Public listing"
          value={data.anonymous ? "Name kept off a public list." : "Name can be shown with monthly gifts later."}
        />
        <ReviewRow label="Receipt" value={data.receiptRequested ? "Requested" : "Not requested"} />
        {note ? <ReviewRow label="Note" value={note} /> : null}
        <ReviewRow label="Consent" value="Agreed" />
        <ReviewRow label="Each month" value={monthlyAmount} />
      </Box>
      <Typography variant="body2" color="text.secondary">
        No fee is added. Nothing has been charged, and no subscription is active.
      </Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
        <Button type="button" variant="text" onClick={onEditAmount}>
          Edit amount
        </Button>
        <Button type="button" variant="text" onClick={onEditDetails}>
          Edit details
        </Button>
      </Stack>
    </Stack>
  );
}
