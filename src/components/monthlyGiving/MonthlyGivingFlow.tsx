"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ContributionPayment } from "@/components/contribution/ContributionPayment";
import { ContributionSteps } from "@/components/contribution/ContributionSteps";
import { ContributorDetails } from "@/components/contribution/ContributorDetails";
import { MonthlyAmountSelector } from "@/components/monthlyGiving/MonthlyAmountSelector";
import { MonthlyGivingReview } from "@/components/monthlyGiving/MonthlyGivingReview";
import { MonthlyGivingSummary } from "@/components/monthlyGiving/MonthlyGivingSummary";
import { AppButton } from "@/components/ui/AppButton";
import { monthlyGiving } from "@/config/monthlyGiving";
import { buildMonthlyGivingRequest } from "@/services/subscription/subscription.client";
import {
  contributionStepIds,
  emptyContributionForm,
  type ContributionFormData,
  type ContributionFormErrors,
  type ContributionStepId,
} from "@/types/contribution";
import {
  focusContributorField,
  hasErrors,
  parseContributionAmount,
  validateAmount,
  validateContributorDetails,
  withoutFieldError,
} from "@/utils/contribution";

const stepTitles: Record<ContributionStepId, string> = {
  amount: "Monthly amount",
  details: "Contributor details",
  review: "Review your monthly contribution",
  payment: "Payment",
};

const continueLabels: Record<ContributionStepId, string> = {
  amount: "Continue",
  details: "Continue to review",
  review: "Continue to secure payment",
  payment: "Continue to secure payment",
};

export function MonthlyGivingFlow() {
  const [step, setStep] = useState<ContributionStepId>("amount");
  const [data, setData] = useState<ContributionFormData>(emptyContributionForm);
  const [errors, setErrors] = useState<ContributionFormErrors>({});
  const [stopped, setStopped] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const opened = useRef(false);
  const stepIndex = contributionStepIds.indexOf(step);
  const amountOptions = { minimumAmount: monthlyGiving.minimumAmount, monthly: true as const };
  const parsedAmount = validateAmount(data.amount, amountOptions) ? null : parseContributionAmount(data.amount);
  const paymentRequest = step === "payment" ? buildMonthlyGivingRequest(data.amount) : null;

  useEffect(() => {
    if (!opened.current) {
      opened.current = true;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  function patch(next: Partial<ContributionFormData>) {
    setData((current) => ({ ...current, ...next }));
    setErrors((current) => withoutFieldError(current, next));
  }

  function goTo(next: ContributionStepId) {
    setStopped(false);
    setStep(next);
  }

  function continueFromAmount() {
    const amountError = validateAmount(data.amount, amountOptions);
    setErrors({ amount: amountError });
    if (amountError) {
      document.getElementById("contribution-amount")?.focus();
      return;
    }
    goTo("details");
  }

  function continueFromDetails() {
    const nextErrors = validateContributorDetails(data);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      focusContributorField(nextErrors);
      return;
    }
    goTo("review");
  }

  function proceed() {
    if (stopped || !paymentRequest) return;
    setStopped(true);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === "amount") continueFromAmount();
    else if (step === "details") continueFromDetails();
    else if (step === "review") goTo("payment");
    else proceed();
  }

  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "start",
        gap: { xs: 2, md: 3 },
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 300px" },
      }}
    >
      <Stack component="form" noValidate spacing={2} onSubmit={onSubmit} sx={{ minWidth: 0 }}>
        <ContributionSteps step={step} onSelect={goTo} label="Monthly contribution steps" />
        <Box key={step}>
          <Typography
            id="monthly-step-title"
            ref={headingRef}
            tabIndex={-1}
            variant="h3"
            component="h3"
            sx={{ mb: 2, scrollMarginTop: 96 }}
          >
            <Box component="span" sx={{ display: { md: "none" } }}>
              Step {stepIndex + 1} of {contributionStepIds.length}.{" "}
            </Box>
            {stepTitles[step]}
          </Typography>
          {step === "amount" ? (
            <MonthlyAmountSelector amount={data.amount} error={errors.amount} onAmountChange={(amount) => patch({ amount })} />
          ) : null}
          {step === "details" ? (
            <ContributorDetails
              data={data}
              errors={errors}
              onChange={patch}
              anonymousLabel="Keep my name off a public list of monthly gifts"
            />
          ) : null}
          {step === "review" && parsedAmount !== null ? (
            <MonthlyGivingReview
              amount={parsedAmount}
              data={data}
              onEditAmount={() => goTo("amount")}
              onEditDetails={() => goTo("details")}
            />
          ) : null}
          {step === "payment" ? (
            <ContributionPayment request={paymentRequest} unavailable={stopped} cadence={monthlyGiving.cadence} />
          ) : null}
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "flex-end" }}>
          {contributionStepIds[stepIndex - 1] ? (
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                const previous = contributionStepIds[stepIndex - 1];
                if (previous) goTo(previous);
              }}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Back
            </Button>
          ) : null}
          <AppButton
            type="submit"
            variant="contained"
            disabled={step === "payment" && (stopped || !paymentRequest)}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            {continueLabels[step]}
          </AppButton>
        </Stack>
      </Stack>
      <Box sx={{ position: { md: "sticky" }, top: { md: 80, lg: 96 } }}>
        <MonthlyGivingSummary amount={data.amount} />
      </Box>
    </Box>
  );
}
