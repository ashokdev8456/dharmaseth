import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { PaymentRequest } from "@/services/payment/payment.types";
import { formatInr } from "@/utils/money";

type ContributionPaymentProps = {
  request: Pick<PaymentRequest, "amount" | "currency"> | null;
  unavailable: boolean;
  cadence?: string;
};

export function ContributionPayment({ request, unavailable, cadence }: ContributionPaymentProps) {
  return (
    <Stack spacing={2}>
      <Typography variant="body1" color="text.secondary">
        No payment provider is connected yet. Continuing does not charge a card, a bank account, or a UPI app.
      </Typography>
      {request ? (
        <Typography variant="body1">
          Prepared amount: {formatInr(request.amount)}
          {cadence ? ` ${cadence}` : ""} ({request.currency})
        </Typography>
      ) : (
        <Typography variant="body1">The amount could not be prepared. Go back and enter it again.</Typography>
      )}
      <Typography variant="body2" color="text.secondary">
        No fee is added. Card numbers and bank details are not collected on this page.
      </Typography>
      {unavailable ? (
        <Alert severity="info" role="status">
          No payment was started. A provider is not connected to this page.
        </Alert>
      ) : null}
    </Stack>
  );
}
