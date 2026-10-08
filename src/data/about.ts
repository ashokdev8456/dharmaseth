import { routes } from "@/config/routes";
import type { AboutValue, StoryMilestone } from "@/types/about";

export const aboutHero = {
  eyebrow: "About",
  title: "A bridge, named plainly",
  description:
    "Dharmasethu is a place to read about seva and to review a gift. A formal history, registrations, and results are not published here yet.",
  primary: { label: "Explore seva", href: routes.explore },
  secondary: { label: "Give monthly", href: routes.monthly },
  image: "/images/temple-courtyard.jpg",
  imageAlt: "A stone mandapa in an Indian temple, with daylight between carved pillars.",
} as const;

export const whoWeAre = {
  eyebrow: "Who we are",
  title: "A clear way to stand with living tradition",
  paragraphs: [
    "Dharmasethu connects people who wish to give with temples, teachers, living beings, and those who serve them.",
    "This page describes that purpose. It does not name founders, a founding year, or a registered office, because those details have not been published.",
  ],
} as const;

export const aboutStory = {
  eyebrow: "Our story",
  title: "What can be said today",
  description:
    "A dated history is not invented here. These notes describe the site as it stands, and they can be replaced when a true account is ready.",
  milestones: [
    {
      id: "purpose",
      title: "The purpose is named",
      description: "The site says which kinds of seva a gift is meant to stand behind: worship, study, care for living beings, and the people who serve.",
    },
    {
      id: "samples",
      title: "Seva you can read",
      description: "The explore page lists the seva. Each one shows its purpose, status, and the amount recorded for it.",
    },
    {
      id: "review",
      title: "A gift can be reviewed",
      description: "A visitor can walk through a one-time or monthly contribution. No payment or subscription is started from these pages.",
    },
    {
      id: "ahead",
      title: "A history is still open",
      description: "Founders, places, and dates belong in this story when they can be stated accurately. Until then, this section stays a frame, not a chronicle.",
    },
  ] satisfies StoryMilestone[],
} as const;

export const aboutVision = {
  eyebrow: "Vision",
  title: "A future we would rather not invent",
  statement: "A visitor should be able to see what a gift is for before they are asked to give.",
  description:
    "That is a direction for this site, not a forecast and not a result already achieved. Worship, study, and care continue in the world whether or not this page can yet point to a finished record of them.",
} as const;

export const aboutValuesIntro = {
  eyebrow: "How the page behaves",
  title: "Guides for this site",
  description: "These are not a published charter. They describe choices already visible in the pages you can open.",
} as const;

export const aboutValues: AboutValue[] = [
  {
    id: "clarity",
    title: "Clarity",
    description: "Each page says what the seva is for before a gift is asked.",
  },
  {
    id: "care",
    title: "Care",
    description: "The seva is named before a visitor is pointed toward a gift.",
  },
  {
    id: "restraint",
    title: "Restraint",
    description: "Seals, scores, partner marks, and totals stay off the page until they can be checked.",
  },
  {
    id: "service",
    title: "Service",
    description: "The work named here is worship, study, meals, care for living beings, and support for people who serve.",
  },
];

export const aboutApproach = {
  eyebrow: "How a visit works",
  title: "What you can do here",
  description: "This is the path the site actually offers. It is not an operations manual for a field program.",
  steps: [
    "Read the purpose on this page.",
    "Look through the seva and filter by cause.",
    "Open one campaign and read what the gift is for.",
    "Review a one-time or monthly amount. Payment is not connected yet.",
  ],
} as const;

export const aboutFocus = {
  eyebrow: "Areas of care",
  title: "The same seva named elsewhere",
  description:
    "These are the causes used on the explore page. They name a direction for support. They are not a list of finished programs.",
} as const;

export const aboutTrust = {
  eyebrow: "Trust",
  title: "What is withheld on purpose",
  points: [
    "No founding date, founder, or office address is shown, because none has been published.",
    "Each campaign shows the goal and the amount recorded for that seva.",
    "Contribution pages do not charge a card, a bank account, or a UPI app.",
    "The footer lists an email address and hours.",
    "Privacy, terms, and cancellation are linked. Those pages are drafts for legal review, not approved policies.",
  ],
} as const;

export const aboutCta = {
  title: "Be part of the sacred legacy",
  description: "Stand with a sanctum, an Annadanam, or a year of study. Your hands can keep that work going.",
  primary: { label: "Review a gift", href: routes.explore },
  secondary: { label: "Give monthly", href: routes.monthly },
} as const;
