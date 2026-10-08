export const currency = {
  code: "INR",
  symbol: "₹",
  locale: "en-IN",
} as const;

export const contributionLimits = {
  minimumAmount: 500,
  messageMaxLength: 250,
  nameMaxLength: 80,
} as const;

export const presetAmounts = [500, 1000, 2500, 5000, 10000] as const;
