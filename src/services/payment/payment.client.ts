import { currency } from "@/config/contribution";
import type { PaymentRequest } from "@/services/payment/payment.types";
import { parseContributionAmount, validateAmount } from "@/utils/contribution";

export function buildPaymentRequest(campaignSlug: string, amountInput: string): PaymentRequest | null {
  if (validateAmount(amountInput)) return null;
  const amount = parseContributionAmount(amountInput);
  if (amount === null) return null;

  return {
    campaignSlug,
    amount,
    currency: currency.code,
  };
}
