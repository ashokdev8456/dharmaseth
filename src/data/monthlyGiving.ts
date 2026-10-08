import { routes } from "@/config/routes";
import type { MonthlyGivingLevel } from "@/types/monthlyGiving";

export const monthlyHero = {
  eyebrow: "Monthly giving",
  title: "A gift that returns each month",
  description:
    "Choose an amount to set aside every month. You can review it here before any payment. A subscription provider is not connected, so this page does not charge you or start a recurring payment.",
  primaryCta: "Start monthly giving",
  secondaryCta: {
    label: "Explore seva",
    href: routes.explore,
  },
  image: "/images/morning-lamp.jpg",
  imageAlt: "A small oil lamp on a stone ledge in a quiet Indian temple verandah.",
} as const;

export const monthlyExplanation = {
  eyebrow: "How it works",
  title: "How a monthly gift moves forward",
  description: "A monthly contribution is not a one-time gift. The amount below is meant to repeat each month.",
  steps: [
    "Choose a monthly amount.",
    "Add the details needed for the contribution.",
    "Review the amount and the monthly frequency.",
    "Continue toward secure payment.",
    "A recurring payment provider will be connected later. Nothing is charged on this page.",
  ],
} as const;

export const monthlyImpact = {
  eyebrow: "Amount, not outcome",
  title: "Ways to think about a monthly amount",
  description: "These notes describe the size of the gift. They are not a count of people helped, and they are not a promise of what the money will buy.",
  levels: [
    {
      amount: 500,
      title: "A steady smaller gift",
      description: "A modest amount, repeated each month. No result is attached to this figure.",
    },
    {
      amount: 1000,
      title: "A consistent monthly amount",
      description: "A steady monthly gift for ongoing seva.",
    },
    {
      amount: 2500,
      title: "A larger recurring gift",
      description: "A higher monthly amount on this page. It does not guarantee a particular seva.",
    },
  ] satisfies MonthlyGivingLevel[],
} as const;

export const monthlyTrust = {
  eyebrow: "Before you continue",
  title: "What this page does",
  points: [
    "The amount is a monthly contribution, shown in rupees per month.",
    "Your details stay in this browser until you leave or refresh. They are not sent to a server.",
    "No card number, UPI PIN, or bank account is collected here.",
    "No fee is added. The monthly total is the amount you choose.",
    "The terms, privacy, and cancellation pages are drafts for legal review. They are not approved policies.",
  ],
} as const;

export const monthlyClose = {
  title: "Choose a monthly amount when you are ready.",
  description: "You can also look through the seva and give once, when that campaign is open.",
  primary: "Start monthly giving",
  secondary: {
    label: "Explore seva",
    href: routes.explore,
  },
} as const;
