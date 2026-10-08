import { currency } from "@/config/contribution";

const inr = new Intl.NumberFormat(currency.locale, {
  style: "currency",
  currency: currency.code,
  maximumFractionDigits: 0,
});

export function formatInr(amount: number) {
  const safe = Number.isFinite(amount) ? Math.round(amount) : 0;
  return inr.format(safe);
}
