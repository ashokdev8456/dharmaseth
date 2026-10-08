import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ContributionFormData } from "@/types/contribution";
import { maskEmail, maskPhone } from "@/utils/contribution";
import { formatInr } from "@/utils/money";

type ContributionReviewProps = {
  campaignTitle: string;
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

export function ContributionReview({
  campaignTitle,
  amount,
  data,
  onEditAmount,
  onEditDetails,
}: ContributionReviewProps) {
  const note = data.message.trim();

  return (
    <Stack spacing={2.5}>
      <Box
        component="dl"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "160px minmax(0, 1fr)" },
          gap: { xs: 0.5, sm: 1.5 },
          rowGap: 1.5,
          m: 0,
        }}
      >
        <ReviewRow label="Campaign" value={campaignTitle} />
        <ReviewRow label="Contribution" value={formatInr(amount)} />
        <ReviewRow label="Contributor" value={data.fullName.trim()} />
        <ReviewRow label="Email" value={maskEmail(data.email)} />
        <ReviewRow label="Phone" value={maskPhone(data.phone)} />
        <ReviewRow
          label="Public listing"
          value={
            data.anonymous
              ? "Name kept off the campaign page."
              : "Name can be shown with the campaign later."
          }
        />
        <ReviewRow label="Receipt" value={data.receiptRequested ? "Requested" : "Not requested"} />
        {note ? <ReviewRow label="Note" value={note} /> : null}
        <ReviewRow label="Total" value={formatInr(amount)} />
      </Box>
      <Typography variant="body2" color="text.secondary">
        No fee is added. The total is the contribution amount.
      </Typography>
      <Stack direction="row" spacing={1}>
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
