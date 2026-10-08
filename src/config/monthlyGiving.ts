import { contributionLimits, currency, presetAmounts } from "@/config/contribution";

export const monthlyGiving = {
  currency,
  minimumAmount: contributionLimits.minimumAmount,
  presetAmounts,
  frequency: "monthly",
  frequencyLabel: "Every month",
  cadence: "/ month",
} as const;
