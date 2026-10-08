import type { MetadataRoute } from "next";
import { legalNavigation, mainNavigation } from "@/config/navigation";
import { campaignPath } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { campaigns } from "@/data/campaigns";

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified: the project has no trustworthy modification dates.
  // Contribution URLs are omitted because those pages are noindex.
  const pages = [...mainNavigation, ...legalNavigation].map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
  }));

  const campaignPages = campaigns.map((campaign) => ({
    url: new URL(campaignPath(campaign.slug), siteConfig.url).toString(),
  }));

  return [...pages, ...campaignPages];
}
