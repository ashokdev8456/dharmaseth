import { monthlyGiving } from "@/config/monthlyGiving";
import { formatInr } from "@/utils/money";

export function formatMonthlyAmount(amount: number) {
  return `${formatInr(amount)} ${monthlyGiving.cadence}`;
}
