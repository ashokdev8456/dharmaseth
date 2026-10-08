"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CampaignContributionSummary } from "@/components/contribution/CampaignContributionSummary";
import { ContributionAmount } from "@/components/contribution/ContributionAmount";
import { ContributionPayment } from "@/components/contribution/ContributionPayment";
import { ContributionReview } from "@/components/contribution/ContributionReview";
import { ContributionSteps } from "@/components/contribution/ContributionSteps";
import { ContributorDetails } from "@/components/contribution/ContributorDetails";
import { AppButton } from "@/components/ui/AppButton";
import { buildPaymentRequest } from "@/services/payment/payment.client";
import { motion } from "@/theme/motion";
import {
  contributionStepIds,
  emptyContributionForm,
  type ContributionFormData,
  type ContributionFormErrors,
  type ContributionCampaign,
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
  amount: "Contribution amount",
  details: "Contributor details",
  review: "Review your contribution",
  payment: "Payment",
};

const continueLabels: Record<ContributionStepId, string> = {
  amount: "Continue",
  details: "Continue to review",
  review: "Continue to payment",
  payment: "Continue to payment",
};

type PaymentPhase = "idle" | "preparing" | "unavailable";

type ContributionFlowProps = {
  campaign: ContributionCampaign;
};

export function ContributionFlow({ campaign }: ContributionFlowProps) {
  const [step, setStep] = useState<ContributionStepId>("amount");
  const [data, setData] = useState<ContributionFormData>(emptyContributionForm);
  const [errors, setErrors] = useState<ContributionFormErrors>({});
  const [paymentPhase, setPaymentPhase] = useState<PaymentPhase>("idle");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const opened = useRef(false);
  const prepareTimer = useRef<number | null>(null);
  const stepIndex = contributionStepIds.indexOf(step);
  const parsedAmount = parseContributionAmount(data.amount);
  const paymentRequest = step === "payment" ? buildPaymentRequest(campaign.slug, data.amount) : null;

  useEffect(() => {
    if (!opened.current) {
      opened.current = true;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  useEffect(() => {
    return () => {
      if (prepareTimer.current !== null) window.clearTimeout(prepareTimer.current);
    };
  }, []);

  function patch(next: Partial<ContributionFormData>) {
    setData((current) => ({ ...current, ...next }));
    setErrors((current) => withoutFieldError(current, next));
  }

  function goTo(next: ContributionStepId) {
    if (prepareTimer.current !== null) {
      window.clearTimeout(prepareTimer.current);
      prepareTimer.current = null;
    }
    setPaymentPhase("idle");
    setStep(next);
  }

  function continueFromAmount() {
    const amountError = validateAmount(data.amount);
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

  function proceedToPayment() {
    if (paymentPhase !== "idle" || !paymentRequest) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPaymentPhase("unavailable");
      return;
    }
    setPaymentPhase("preparing");
    prepareTimer.current = window.setTimeout(() => {
      prepareTimer.current = null;
      setPaymentPhase("unavailable");
    }, motion.duration.standard);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === "amount") continueFromAmount();
    else if (step === "details") continueFromDetails();
    else if (step === "review") goTo("payment");
    else proceedToPayment();
  }

  const continueLabel =
    step === "payment" && paymentPhase === "preparing"
      ? "Preparing secure payment..."
      : continueLabels[step];

  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "start",
        gap: { xs: 3, md: 5 },
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 320px" },
      }}
    >
      <Stack component="form" noValidate spacing={3} onSubmit={onSubmit} sx={{ minWidth: 0, maxWidth: 640 }}>
        <ContributionSteps step={step} onSelect={goTo} />
        <Box key={step}>
          <Typography
            id="contribution-step-title"
            ref={headingRef}
            tabIndex={-1}
            variant="h3"
            component="h2"
            sx={{ mb: 2, scrollMarginTop: 96 }}
          >
            <Box component="span" sx={{ display: { md: "none" } }}>
              Step {stepIndex + 1} of {contributionStepIds.length}.{" "}
            </Box>
            {stepTitles[step]}
          </Typography>
          {step === "amount" ? (
            <ContributionAmount amount={data.amount} error={errors.amount} onAmountChange={(amount) => patch({ amount })} />
          ) : null}
          {step === "details" ? <ContributorDetails data={data} errors={errors} onChange={patch} /> : null}
          {step === "review" && parsedAmount !== null ? (
            <ContributionReview
              campaignTitle={campaign.title}
              amount={parsedAmount}
              data={data}
              onEditAmount={() => goTo("amount")}
              onEditDetails={() => goTo("details")}
            />
          ) : null}
          {step === "payment" ? (
            <ContributionPayment request={paymentRequest} unavailable={paymentPhase === "unavailable"} />
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
            loading={paymentPhase === "preparing"}
            disabled={step === "payment" && (paymentPhase !== "idle" || !paymentRequest)}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            {continueLabel}
          </AppButton>
        </Stack>
      </Stack>
      <Box sx={{ position: { md: "sticky" }, top: { md: 80, lg: 96 } }}>
        <CampaignContributionSummary campaign={campaign} amount={data.amount} />
      </Box>
    </Box>
  );
}
