import { contributionLimits, presetAmounts } from "@/config/contribution";
import type { ContributionFormData, ContributionFormErrors } from "@/types/contribution";
import { formatInr } from "@/utils/money";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[\p{L}][\p{L}\s.'-]*$/u;

export function parseContributionAmount(raw: string) {
  const normalized = raw.trim().replace(/[₹,\s]/g, "");
  if (!/^\d+$/.test(normalized)) return null;
  const amount = Number(normalized);
  if (!Number.isSafeInteger(amount)) return null;
  return amount;
}

export function matchingPreset(raw: string, presets: readonly number[] = presetAmounts) {
  const amount = parseContributionAmount(raw);
  if (amount === null) return "";
  return presets.some((preset) => preset === amount) ? String(amount) : "";
}

type AmountValidationOptions = {
  minimumAmount?: number;
  monthly?: boolean;
};

export function validateAmount(raw: string, options?: AmountValidationOptions) {
  const minimum = options?.minimumAmount ?? contributionLimits.minimumAmount;
  const trimmed = raw.trim();
  if (!trimmed) return options?.monthly ? "Enter a monthly amount." : "Enter an amount.";
  const normalized = trimmed.replace(/[₹,\s]/g, "");
  if (!/^\d+$/.test(normalized)) return "Enter a whole amount in rupees.";
  const amount = Number(normalized);
  if (!Number.isSafeInteger(amount)) return "Enter a smaller whole amount.";
  if (amount < minimum) {
    const lead = options?.monthly ? "Enter a monthly contribution of at least" : "Enter an amount of at least";
    return `${lead} ${formatInr(minimum)}.`;
  }
  return undefined;
}

export function validateEmail(value: string) {
  const email = value.trim();
  if (!email) return "Enter an email address.";
  if (email.length > 254 || !emailPattern.test(email)) return "Enter a valid email address.";
  return undefined;
}

export function validatePhone(value: string) {
  const compact = value.trim().replace(/[\s()-]/g, "");
  if (!compact) return "Enter a phone number.";
  let digits = compact;
  if (digits.startsWith("+91")) digits = digits.slice(3);
  else if (digits.startsWith("91") && digits.length === 12) digits = digits.slice(2);
  else if (digits.startsWith("0") && digits.length === 11) digits = digits.slice(1);
  if (!/^[6-9]\d{9}$/.test(digits)) return "Enter a 10-digit Indian mobile number.";
  return undefined;
}

export function validateFullName(value: string) {
  const name = value.trim();
  if (name.length < 2) return "Enter your full name.";
  if (name.length > contributionLimits.nameMaxLength) return "Enter a shorter name.";
  if (!namePattern.test(name)) return "Use letters in your name.";
  return undefined;
}

export function validateMessage(value: string) {
  if (value.length > contributionLimits.messageMaxLength) {
    return `Keep the note to ${contributionLimits.messageMaxLength} characters.`;
  }
  return undefined;
}

export function validateContributorDetails(data: ContributionFormData): ContributionFormErrors {
  return {
    fullName: validateFullName(data.fullName),
    email: validateEmail(data.email),
    phone: validatePhone(data.phone),
    message: validateMessage(data.message),
    consent: data.consent ? undefined : "Agree to the terms and privacy policy to continue.",
  };
}

export function hasErrors(errors: ContributionFormErrors) {
  return Object.values(errors).some(Boolean);
}

export function withoutFieldError(
  current: ContributionFormErrors,
  next: Partial<ContributionFormData>,
): ContributionFormErrors {
  return {
    ...current,
    ...("amount" in next ? { amount: undefined } : {}),
    ...("fullName" in next ? { fullName: undefined } : {}),
    ...("email" in next ? { email: undefined } : {}),
    ...("phone" in next ? { phone: undefined } : {}),
    ...("message" in next ? { message: undefined } : {}),
    ...("consent" in next ? { consent: undefined } : {}),
  };
}

export const contributorDetailFields = [
  ["fullName", "contributor-name"],
  ["email", "contributor-email"],
  ["phone", "contributor-phone"],
  ["message", "contribution-message"],
  ["consent", "contribution-consent"],
] as const;

export function focusContributorField(errors: ContributionFormErrors) {
  const field = contributorDetailFields.find(([key]) => errors[key]);
  if (field) document.getElementById(field[1])?.focus();
}

export function maskEmail(email: string) {
  const [local, domain] = email.trim().split("@");
  if (!local || !domain) return "";
  return `${local.slice(0, 1)}***@${domain}`;
}

export function maskPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const last = digits.slice(-4);
  return last ? `Ending in ${last}` : "";
}
