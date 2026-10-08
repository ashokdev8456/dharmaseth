import { monthlyGiving } from "@/config/monthlyGiving";
import type { MonthlyGivingRequest } from "@/services/subscription/subscription.types";
import { parseContributionAmount, validateAmount } from "@/utils/contribution";

export function buildMonthlyGivingRequest(amountInput: string): MonthlyGivingRequest | null {
  if (validateAmount(amountInput, { minimumAmount: monthlyGiving.minimumAmount, monthly: true })) return null;
  const amount = parseContributionAmount(amountInput);
  if (amount === null) return null;

  return {
    amount,
    currency: monthlyGiving.currency.code,
    frequency: monthlyGiving.frequency,
  };
}
