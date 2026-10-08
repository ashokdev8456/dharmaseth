import type { Campaign, CampaignListingItem } from "@/types/domain";

const image = {
  heritage: {
    src: "/images/temple-sanctum.jpg",
    alt: "Brass oil lamps burning on a stone ledge in an Indian temple corridor.",
    width: 1200,
    height: 900,
  },
  learning: {
    src: "/images/pathashala.jpg",
    alt: "A teacher in a white veshti reading a palm-leaf manuscript on an Indian verandah.",
    width: 1200,
    height: 900,
  },
  beings: {
    src: "/images/desi-cows.jpg",
    alt: "Indian cows resting in the shade of a banyan beside a tiled shelter.",
    width: 1200,
    height: 900,
  },
  meals: {
    src: "/images/annadanam.jpg",
    alt: "A sattvic meal of rice and sambar being served on a banana leaf.",
    width: 1200,
    height: 900,
  },
  service: {
    src: "/images/temple-service.jpg",
    alt: "A purohit carrying a brass vessel across an Indian temple courtyard.",
    width: 1200,
    height: 900,
  },
  events: {
    src: "/images/puja-homam.jpg",
    alt: "A homam fire in a brick altar, with flowers and brass vessels beside it.",
    width: 1200,
    height: 900,
  },
} as const;

/**
 * Development samples for explore and campaign detail.
 * Amounts, dates, places, supporter counts, and aims are placeholders.
 */
export const campaigns: Campaign[] = [
  {
    slug: "daily-lamps",
    title: "Lamps for a daily sanctum",
    summary: "Oil, wicks, and the cost of keeping a sanctum open.",
    story:
      "A sanctum needs oil and wicks so a lamp can be lit each day.\n\nA gift covers that daily cost and a share of the upkeep that keeps worship possible.",
    objectives: [
      "Oil and wicks for a daily lamp",
      "A share of upkeep for the sanctum",
      "Small repairs that keep worship possible",
    ],
    causeId: "heritage",
    image: image.heritage,
    goalInr: 100000,
    raisedInr: 45000,
    donorCount: 12,
    featured: true,
    status: "active",
    createdAt: "2026-08-02",
    endDate: "2026-10-18",
    sample: true,
    updates: [],
  },
  {
    slug: "year-of-study",
    title: "A student's year of study",
    summary: "Food, shelter, and learning materials for a year of study.",
    story:
      "A year of food, shelter, and study for a student and a teacher.\n\nThe goal covers meals, a place to stay, and materials for learning.",
    objectives: ["Meals through the year", "A place to stay", "Books and materials for study"],
    causeId: "vedic-education",
    image: image.learning,
    goalInr: 80000,
    raisedInr: 0,
    donorCount: 4,
    featured: true,
    status: "active",
    createdAt: "2026-06-11",
    endDate: "2026-12-20",
    sample: true,
    updates: [],
  },
  {
    slug: "grove-care",
    title: "Feed and shade for a grove",
    summary: "Fodder, shelter, and green cover for living beings.",
    story:
      "Fodder, shelter, and shade for animals and the ground they live on.\n\nThe amount recorded for this seva is published on this page.",
    objectives: ["Fodder for the animals", "Simple shelter", "Trees and cover for the ground"],
    causeId: "living-beings",
    image: image.beings,
    goalInr: 100000,
    raisedInr: 125000,
    donorCount: 30,
    featured: false,
    status: "active",
    createdAt: "2026-07-19",
    endDate: "2026-11-02",
    sample: true,
    updates: [],
  },
  {
    slug: "shared-meals",
    title: "Meals for a gathering",
    summary: "Sattvic meals for a gathering.",
    story:
      "Sattvic meals for a gathering: rice, dal, vessels, and fuel.\n\nA share is set aside for whoever is hungry.",
    objectives: ["Rice, dal, and a simple meal", "Vessels and fuel for cooking", "A share set aside for whoever is hungry"],
    causeId: "annadanam",
    image: image.meals,
    goalInr: 50000,
    raisedInr: 0,
    donorCount: 0,
    featured: false,
    status: "upcoming",
    createdAt: "2026-04-16",
    sample: true,
    updates: [],
  },
  {
    slug: "resident-care",
    title: "Care for a resident sadhu",
    summary: "Daily care for a resident sadhu.",
    story:
      "Food, clothing, and a steady place for someone who lives by service.\n\nThis seva is marked complete.",
    objectives: ["Food and daily care", "Clothing and simple medicines", "A steady place to stay"],
    causeId: "seva-support",
    image: image.service,
    goalInr: 60000,
    raisedInr: 60000,
    donorCount: 22,
    featured: false,
    status: "completed",
    createdAt: "2026-02-01",
    endDate: "2026-03-01",
    sample: true,
    updates: [],
  },
  {
    slug: "night-puja",
    title: "Vessels, lamps, and hands for a night-long puja",
    summary:
      "Vessels, lamps, and the hands needed for one night of worship.",
    story:
      "Materials for one night of worship: vessels, lamps, and oil, and the practical cost of people gathering to serve.",
    objectives: ["Lamps and oil for the night", "Vessels for the offering", "The practical cost of people gathering to serve"],
    causeId: "sacred-events",
    image: image.events,
    goalInr: 75000,
    raisedInr: 15000,
    donorCount: 9,
    featured: false,
    status: "active",
    createdAt: "2026-09-12",
    endDate: "2026-10-30",
    sample: true,
    updates: [],
  },
  {
    slug: "pathashala-roof",
    title: "A pathashala roof before the rains",
    summary: "A roof for a place of study, before the rains.",
    story:
      "Materials and labour for a roof, so a room of study stays dry.\n\nThis seva has not opened yet.",
    objectives: ["Materials for a roof", "Labour to put it in place", "A dry room for study"],
    causeId: "vedic-education",
    image: image.learning,
    goalInr: 200000,
    raisedInr: 0,
    donorCount: 0,
    featured: false,
    status: "upcoming",
    createdAt: "2026-05-04",
    endDate: "2027-01-15",
    sample: true,
    updates: [],
  },
  {
    slug: "goal-unset",
    title: "A goal still being set",
    summary: "A seva whose goal is still being set.",
    story:
      "This seva is listed while the goal is still being set.\n\nYou can read the purpose here. A goal amount is not published yet.",
    causeId: "other",
    image: image.heritage,
    goalInr: 0,
    raisedInr: 0,
    donorCount: 0,
    featured: false,
    status: "upcoming",
    createdAt: "2026-09-28",
    sample: true,
    updates: [],
  },
];

export const campaignListings: CampaignListingItem[] = campaigns.map((campaign) => ({
  slug: campaign.slug,
  title: campaign.title,
  summary: campaign.summary,
  causeId: campaign.causeId,
  location: campaign.location,
  image: campaign.image,
  goalInr: campaign.goalInr,
  raisedInr: campaign.raisedInr,
  donorCount: campaign.donorCount,
  featured: campaign.featured,
  status: campaign.status,
  createdAt: campaign.createdAt,
  endDate: campaign.endDate,
  sample: campaign.sample,
}));

export function getCampaignBySlug(slug: string) {
  return campaigns.find((campaign) => campaign.slug === slug);
}

export function getRelatedCampaigns(campaign: Campaign, limit = 3) {
  return campaigns
    .filter((item) => item.slug !== campaign.slug && item.causeId === campaign.causeId)
    .slice(0, limit);
}
