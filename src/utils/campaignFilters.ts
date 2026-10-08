import { causes } from "@/data/causes";
import {
  causeIds,
  type CampaignListingItem,
  type CampaignStatus,
  type CauseId,
} from "@/types/domain";

export const campaignSorts = ["featured", "newest", "ending", "supporters", "progress"] as const;

export type CampaignSort = (typeof campaignSorts)[number];

export const campaignStatuses = ["active", "upcoming", "completed"] as const;

export type CampaignQuery = {
  q: string;
  cause: CauseId | "";
  status: CampaignStatus | "";
  featured: boolean;
  sort: CampaignSort;
};

export const defaultCampaignQuery: CampaignQuery = {
  q: "",
  cause: "",
  status: "",
  featured: false,
  sort: "featured",
};

const sortLabels: Record<CampaignSort, string> = {
  featured: "Featured",
  newest: "Newest",
  ending: "Ending soon",
  supporters: "Most supporters",
  progress: "Progress",
};

export function campaignSortLabel(sort: CampaignSort) {
  return sortLabels[sort];
}

export function campaignStatusLabel(status: CampaignStatus) {
  if (status === "active") return "Active";
  if (status === "upcoming") return "Upcoming";
  return "Completed";
}

export function causeLabel(id: CauseId) {
  return causes.find((cause) => cause.id === id)?.label ?? id;
}

function firstParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function isCauseId(value: string): value is CauseId {
  return causeIds.some((id) => id === value);
}

function isStatus(value: string): value is CampaignStatus {
  return campaignStatuses.some((status) => status === value);
}

function isSort(value: string): value is CampaignSort {
  return campaignSorts.some((sort) => sort === value);
}

export function parseCampaignQuery(
  params: Record<string, string | string[] | undefined>,
): CampaignQuery {
  const cause = firstParam(params.cause);
  const status = firstParam(params.status);
  const sort = firstParam(params.sort);

  return {
    q: firstParam(params.q).trim(),
    cause: isCauseId(cause) ? cause : "",
    status: isStatus(status) ? status : "",
    featured: firstParam(params.featured) === "1",
    sort: isSort(sort) ? sort : "featured",
  };
}

export function campaignQueryToSearch(query: CampaignQuery) {
  const params = new URLSearchParams();
  if (query.q) params.set("q", query.q);
  if (query.cause) params.set("cause", query.cause);
  if (query.status) params.set("status", query.status);
  if (query.featured) params.set("featured", "1");
  if (query.sort !== "featured") params.set("sort", query.sort);
  return params;
}

export function campaignProgress(raised: number, goal: number) {
  if (!Number.isFinite(raised) || !Number.isFinite(goal) || goal <= 0 || raised <= 0) {
    return 0;
  }
  const ratio = (raised / goal) * 100;
  if (!Number.isFinite(ratio)) return 0;
  return Math.min(100, Math.max(0, Math.round(ratio)));
}

function matchesSearch(campaign: CampaignListingItem, q: string) {
  const needle = q.trim().toLowerCase();
  if (!needle) return true;
  const haystack = [campaign.title, campaign.summary, causeLabel(campaign.causeId), campaign.location ?? ""]
    .join(" ")
    .toLowerCase();
  return haystack.includes(needle);
}

function progressRatio(campaign: CampaignListingItem) {
  if (!Number.isFinite(campaign.goalInr) || campaign.goalInr <= 0) return 0;
  if (!Number.isFinite(campaign.raisedInr) || campaign.raisedInr <= 0) return 0;
  return campaign.raisedInr / campaign.goalInr;
}

export function filterCampaigns(campaigns: CampaignListingItem[], query: CampaignQuery) {
  const filtered = campaigns.filter((campaign) => {
    if (query.cause && campaign.causeId !== query.cause) return false;
    if (query.status && campaign.status !== query.status) return false;
    if (query.featured && !campaign.featured) return false;
    return matchesSearch(campaign, query.q);
  });

  if (query.sort === "ending") {
    const today = new Date().toISOString().slice(0, 10);
    const rank = (campaign: CampaignListingItem) => {
      if (!campaign.endDate) return 2;
      return campaign.endDate < today ? 1 : 0;
    };
    return filtered.sort((a, b) => {
      const rankDiff = rank(a) - rank(b);
      if (rankDiff !== 0) return rankDiff;
      if (a.endDate && b.endDate) return a.endDate.localeCompare(b.endDate);
      return 0;
    });
  }

  return filtered.sort((a, b) => {
    if (query.sort === "newest") return b.createdAt.localeCompare(a.createdAt);
    if (query.sort === "supporters") return b.donorCount - a.donorCount;
    if (query.sort === "progress") return progressRatio(b) - progressRatio(a);
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.createdAt.localeCompare(a.createdAt);
  });
}

export function activeFilterCount(query: CampaignQuery) {
  return Number(Boolean(query.cause)) + Number(Boolean(query.status)) + Number(query.featured);
}
