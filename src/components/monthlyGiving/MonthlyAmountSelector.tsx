import { ContributionAmount } from "@/components/contribution/ContributionAmount";
import { monthlyGiving } from "@/config/monthlyGiving";

type MonthlyAmountSelectorProps = {
  amount: string;
  error?: string;
  onAmountChange: (amount: string) => void;
};

export function MonthlyAmountSelector({ amount, error, onAmountChange }: MonthlyAmountSelectorProps) {
  return (
    <ContributionAmount
      amount={amount}
      error={error}
      onAmountChange={onAmountChange}
      presets={monthlyGiving.presetAmounts}
      minimumAmount={monthlyGiving.minimumAmount}
      labelSuffix={` ${monthlyGiving.cadence}`}
      fieldLabel="Enter a monthly amount"
      groupLabel="Monthly amounts"
      wide
    />
  );
}
