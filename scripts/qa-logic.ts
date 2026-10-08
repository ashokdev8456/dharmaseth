import { campaignListings, campaigns, getCampaignBySlug } from "../src/data/campaigns";
import { campaignProgress, filterCampaigns, parseCampaignQuery } from "../src/utils/campaignFilters";
import { filterFaqItems } from "../src/utils/faq";
import { faqItems } from "../src/data/faq";
import { formatInr } from "../src/utils/money";
import { formatCampaignDate } from "../src/utils/dates";
import {
  parseContributionAmount,
  validateAmount,
  validateEmail,
  validatePhone,
  validateFullName,
} from "../src/utils/contribution";
import { existsSync } from "node:fs";

const failures: string[] = [];
function check(name: string, ok: boolean, detail = "") {
  if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
}

const slugs = campaigns.map((c) => c.slug);
check("unique slugs", new Set(slugs).size === slugs.length, slugs.join(","));
check("listing count", campaignListings.length === campaigns.length);

for (const campaign of campaigns) {
  check(`lookup ${campaign.slug}`, getCampaignBySlug(campaign.slug)?.title === campaign.title);
  check(`sample ${campaign.slug}`, campaign.sample === true);
  check(`amounts ${campaign.slug}`, campaign.goalInr >= 0 && campaign.raisedInr >= 0 && campaign.donorCount >= 0);
  const percent = campaignProgress(campaign.raisedInr, campaign.goalInr);
  check(`progress cap ${campaign.slug}`, percent >= 0 && percent <= 100, String(percent));
  if (campaign.goalInr === 0) check(`zero goal ${campaign.slug}`, percent === 0);
  if (campaign.raisedInr > campaign.goalInr && campaign.goalInr > 0) {
    check(`overfund ${campaign.slug}`, percent === 100);
  }
  check(`image ${campaign.image.src}`, existsSync(`public${campaign.image.src}`));
  if (campaign.endDate) check(`end date ${campaign.slug}`, formatCampaignDate(campaign.endDate) !== null);
}

check("missing slug", getCampaignBySlug("not-real") === undefined);
check("inr lakh", formatInr(100000) === "₹1,00,000", formatInr(100000));
check("inr zero", formatInr(0) === "₹0", formatInr(0));
check("inr nan", formatInr(Number.NaN) === "₹0");
check("inr inf", formatInr(Number.POSITIVE_INFINITY) === "₹0");

const badAmounts = ["", " ", "0", "-1", "499", "500.5", "₹500", "abc", "NaN", "Infinity", "1e5", "  500  "];
for (const value of badAmounts) {
  const parsed = parseContributionAmount(value);
  const error = validateAmount(value);
  if (value.trim() === "500" || value.replace(/[₹,\s]/g, "") === "500") {
    check(`amount accept ${JSON.stringify(value)}`, error === undefined && parsed === 500, String(error));
  } else {
    check(`amount reject ${JSON.stringify(value)}`, Boolean(error) && parsed !== 500, `error=${error} parsed=${parsed}`);
  }
}
check("amount 500", validateAmount("500") === undefined);
check("amount 100000", validateAmount("100000") === undefined);
check("unsafe int", Boolean(validateAmount("9007199254740993")));

const emails: Array<[string, boolean]> = [
  ["test@example.com", true],
  ["user.name@example.com", true],
  ["user+tag@example.com", true],
  ["missing@", false],
  ["@example.com", false],
  ["user@", false],
  ["user@example", false],
  ["user..name@example.com", true],
  [" user@example.com ", true],
  ["user @example.com", false],
];
for (const [value, valid] of emails) {
  const error = validateEmail(value);
  check(`email ${JSON.stringify(value)}`, valid ? error === undefined : Boolean(error), String(error));
}

const phones: Array<[string, boolean]> = [
  ["9876543210", true],
  ["+91 98765 43210", true],
  ["+919876543210", true],
  ["919876543210", true],
  ["09876543210", true],
  ["98765-43210", true],
  ["12345", false],
  ["5876543210", false],
  ["", false],
  ["98765abc10", false],
  ["987654321", false],
  ["98765432101", false],
];
for (const [value, valid] of phones) {
  const error = validatePhone(value);
  check(`phone ${JSON.stringify(value)}`, valid ? error === undefined : Boolean(error), String(error));
}

check("name ok", validateFullName("Asha Rao") === undefined);
check("name short", Boolean(validateFullName("A")));
check("name empty", Boolean(validateFullName("  ")));
check("name digits", Boolean(validateFullName("Asha 2")));

const all = filterCampaigns(campaignListings, parseCampaignQuery({}));
check("default count", all.length === 8, String(all.length));
check(
  "case search",
  filterCampaigns(campaignListings, parseCampaignQuery({ q: "  LAMPS  " })).length === 2,
  "daily-lamps and night-puja both contain lamps",
);
check("location", filterCampaigns(campaignListings, parseCampaignQuery({ q: "sample region" })).length >= 1);
check("none", filterCampaigns(campaignListings, parseCampaignQuery({ q: "zzzz-not-a-campaign" })).length === 0);
check("cause", filterCampaigns(campaignListings, parseCampaignQuery({ cause: "vedic-education" })).every((c) => c.causeId === "vedic-education"));
check("status", filterCampaigns(campaignListings, parseCampaignQuery({ status: "completed" })).every((c) => c.status === "completed"));
check("bad cause ignored", filterCampaigns(campaignListings, parseCampaignQuery({ cause: "nope" })).length === 8);
check("symbols", filterCampaigns(campaignListings, parseCampaignQuery({ q: "<script>" })).length === 0);

const faqAll = filterFaqItems(faqItems, "", "all");
check("faq all", faqAll.length === faqItems.length);
check("faq case", filterFaqItems(faqItems, "  WHAT IS DHARMASETHU  ", "all").length >= 1);
check("faq none", filterFaqItems(faqItems, "zzzz-no-question", "all").length === 0);
check("faq category", filterFaqItems(faqItems, "", "payments").every((item) => item.category === "payments"));

const badDate = formatCampaignDate("not-a-date");
check("bad date", badDate === null);
check("good date", formatCampaignDate("2026-10-18") !== null);

console.log(failures.length === 0 ? "LOGIC PASS" : `LOGIC FAIL ${failures.length}`);
for (const failure of failures) console.log("FAIL", failure);
process.exit(failures.length === 0 ? 0 : 1);
