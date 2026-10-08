import { routes } from "@/config/routes";
import type { FeaturedCause, FeaturedStory, HomeLink, ImpactStat, SevaArea, TrustPoint } from "@/types/home";

export const heroContent = {
  eyebrow: "Seva, offered with care",
  title: "A bridge to living tradition",
  description:
    "Dharmasethu connects people who wish to give with temples, teachers, living beings, and those who serve them. A gift here keeps worship, study, and care going.",
  primaryCta: {
    label: "Support a seva",
    href: routes.explore,
  },
  secondaryCta: {
    label: "Give monthly",
    href: routes.monthly,
  },
} as const;

export const heroSlides = [
  {
    id: "temple",
    eyebrow: heroContent.eyebrow,
    title: heroContent.title,
    description: heroContent.description,
    image: "/images/banners/banner-temple.jpg",
    imageAlt: "A stone temple entrance in India at dawn, with a brass oil lamp by the steps.",
  },
  {
    id: "lamps",
    eyebrow: "Temple and heritage",
    title: "Keep daily worship open",
    description: "Lamps, upkeep, and a priest’s sustenance so a sanctum does not go dark.",
    image: "/images/banners/banner-lamps.jpg",
    imageAlt: "A row of brass oil lamps burning along a carved stone temple corridor.",
  },
  {
    id: "study",
    eyebrow: "Vedic education",
    title: "Carry a student’s study",
    description: "Food, shelter, and learning materials for a pathashala and its teacher.",
    image: "/images/banners/banner-study.jpg",
    imageAlt: "A teacher in white reading a palm-leaf manuscript on an Indian verandah.",
  },
  {
    id: "beings",
    eyebrow: "Living beings",
    title: "Care for those without a voice",
    description: "Feed, shelter, and green cover for cows and the life around them.",
    image: "/images/banners/banner-cows.jpg",
    imageAlt: "Indian cows resting under a banyan tree beside a tiled shelter.",
  },
] as const;

export const missionContent = {
  eyebrow: "Our purpose",
  title: "Hold up what holds the tradition together",
  description:
    "We stand with temples and the places that house worship, with students and teachers of the Vedas, with animals and the groves they depend on, and with sadhus and purohits who have given their lives to service. The need is long, so the support should be steady.",
  details: [
    "A day’s lamps, a year of study, feed and shelter for living beings, or the materials a puja needs: these are the kinds of care a gift can stand behind. Each kind of seva is named before a contribution is asked for.",
    "Dharmasethu is a place to read that work and to review a gift. Counts, registrations, and finished accounts appear only when they can be checked.",
  ],
  cta: {
    label: "Explore seva",
    href: routes.explore,
  } satisfies HomeLink,
};

export const featuredCausesContent = {
  eyebrow: "Where a gift goes",
  title: "Seva that needs support now",
  description: "A few of the kinds of work a gift can stand behind.",
  cta: {
    label: "View all seva",
    href: routes.explore,
  } satisfies HomeLink,
};

export const featuredCauses: FeaturedCause[] = [
  {
    id: "heritage",
    category: "Temple & heritage",
    title: "Keep daily worship open",
    description: "Lamps, upkeep, and a priest’s sustenance so a sanctum does not go dark.",
    image: "/images/temple-sanctum.jpg",
    imageAlt: "Brass oil lamps burning on a stone ledge in an Indian temple corridor.",
    href: routes.explore,
  },
  {
    id: "vedic-education",
    category: "Vedic education",
    title: "Carry a student’s study",
    description: "Food, shelter, and learning materials for a pathashala and its teacher.",
    image: "/images/pathashala.jpg",
    imageAlt: "A teacher in a white veshti reading a palm-leaf manuscript on an Indian verandah.",
    href: routes.explore,
  },
  {
    id: "living-beings",
    category: "Living beings",
    title: "Care for those without a voice",
    description: "Feed, shelter, and green cover for cows and the life around them.",
    image: "/images/desi-cows.jpg",
    imageAlt: "Indian cows resting in the shade of a banyan beside a tiled shelter.",
    href: routes.explore,
  },
];

export const impactContent = {
  eyebrow: "Our reach",
  title: "Where the work stands",
  description:
    "People standing with this seva, offerings carried through, places named in the work, and the year of this record.",
};

export const impactStats: ImpactStat[] = [
  {
    id: "people",
    value: "77",
    label: "People reached",
    description: "People standing with this seva.",
  },
  {
    id: "seva",
    value: "1",
    label: "Seva completed",
    description: "Seva carried through.",
  },
  {
    id: "places",
    value: "6",
    label: "Places supported",
    description: "Temples, pathashalas, and groves in this work.",
  },
  {
    id: "years",
    value: "2026",
    label: "Years of service",
    description: "In service this year.",
  },
];

export const sevaAreasContent = {
  eyebrow: "Areas of care",
  title: "What a gift can stand behind",
  description:
    "A gift can stand behind worship, study, meals, care for living beings, and the people who serve. Each card names that work, and the explore page carries it further.",
};

export const sevaAreas: SevaArea[] = [
  {
    id: "heritage",
    title: "Temple & heritage",
    description:
      "Oil, wicks, and a share of upkeep so a sanctum can stay open for daily worship. Repair and the priest’s sustenance belong with the same gift.",
    icon: "temple",
    href: routes.explore,
  },
  {
    id: "vedic-education",
    title: "Vedic education",
    description:
      "Meals, a place to stay, and learning materials for a student and a teacher. A year of study is the seva, held steadily rather than once.",
    icon: "learning",
    href: routes.explore,
  },
  {
    id: "living-beings",
    title: "Living beings",
    description:
      "Fodder, simple shelter, and green cover for cows and the ground they depend on. The care is for beings who cannot ask.",
    icon: "beings",
    href: routes.explore,
  },
  {
    id: "seva-support",
    title: "Sadhu & purohit support",
    description:
      "Food, clothing, and a steady place for sadhus and purohits who have given their lives to service. The support is meant to continue, not arrive once and stop.",
    icon: "service",
    href: routes.explore,
  },
  {
    id: "annadanam",
    title: "Annadanam",
    description:
      "Rice, dal, and a simple sattvic meal, set out for sadhus, pilgrims, and anyone who comes hungry. Vessels and fuel for cooking are part of the same offering.",
    icon: "meals",
    href: routes.explore,
  },
  {
    id: "sacred-events",
    title: "Sacred events",
    description:
      "Lamps, oil, vessels, and the hands a puja, homam, or night of worship needs. The gathering is served by what is prepared before it begins.",
    icon: "events",
    href: routes.explore,
  },
];

export const featuredStory: FeaturedStory = {
  eyebrow: "From the field",
  title: "A meal, offered with dignity",
  description:
    "A sattvic meal is set out on a banana leaf for sadhus, pilgrims, and anyone who is hungry. No one is turned away for want of a name. The offering itself is the seva, and the dignity is in how it is served.",
  image: "/images/morning-lamp.jpg",
  imageAlt: "A small oil lamp on a stone ledge in a quiet Indian temple verandah.",
  cta: {
    label: "Read our purpose",
    href: routes.about,
  },
};

export const trustContent = {
  eyebrow: "Transparency",
  title: "Trust is what we can show",
  description:
    "The seva is named before a gift is asked. Privacy, terms, and cancellation can be read in full. The footer prints an email and hours. These notes are the account this page can give.",
};

export const trustPoints: TrustPoint[] = [
  {
    id: "purpose",
    title: "Named before the ask",
    description: "The areas of seva are described on this page before a visitor is pointed toward a gift.",
    icon: "purpose",
  },
  {
    id: "contact",
    title: "A contact path is printed",
    description: "The footer lists an email address and hours. That is a published contact, not a promise that a message has been answered.",
    icon: "contact",
  },
  {
    id: "policies",
    title: "Policies have a page",
    description: "Privacy, terms, and cancellation are linked from the footer. Those pages are drafts for legal review, not approved policies.",
    icon: "policies",
  },
  {
    id: "plain",
    title: "Nothing borrowed",
    description: "No seal, score, or partner logo is shown here. Those appear only when they can be checked.",
    icon: "plain",
  },
];

export const homepageCta = {
  eyebrow: "When you are ready",
  title: "Choose a seva to stand with",
  description:
    "Look through the areas of work, then support one when it is offered. Monthly giving stays in the navigation if you would rather begin small.",
  cta: {
    label: "Support a seva",
    href: routes.explore,
  } satisfies HomeLink,
};
