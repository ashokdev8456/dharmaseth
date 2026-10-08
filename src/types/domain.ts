export const causeIds = [
  "heritage",
  "vedic-education",
  "living-beings",
  "seva-support",
  "annadanam",
  "sacred-events",
  "other",
] as const;

export type CauseId = (typeof causeIds)[number];

export type Cause = {
  id: CauseId;
  label: string;
  summary: string;
};

export type CampaignImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CampaignUpdate = {
  id: string;
  date: string;
  title: string;
  body: string;
};

export type CampaignStatus = "active" | "upcoming" | "completed";

export type Campaign = {
  slug: string;
  title: string;
  summary: string;
  story: string;
  objectives?: string[];
  causeId: CauseId;
  location?: string;
  image: CampaignImage;
  goalInr: number;
  raisedInr: number;
  donorCount: number;
  featured: boolean;
  status: CampaignStatus;
  createdAt: string;
  endDate?: string;
  /** Development sample. Not a live appeal or a verified total. */
  sample: boolean;
  updates: CampaignUpdate[];
};

/** Fields the explore listing renders and filters. Stories and updates stay on the server. */
export type CampaignListingItem = Pick<
  Campaign,
  | "slug"
  | "title"
  | "summary"
  | "causeId"
  | "location"
  | "image"
  | "goalInr"
  | "raisedInr"
  | "donorCount"
  | "featured"
  | "status"
  | "createdAt"
  | "endDate"
  | "sample"
>;
