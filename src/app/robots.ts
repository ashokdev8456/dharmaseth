import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Contribution pages stay crawlable so their page-level noindex can be seen.
    // Do not disallow /explore/*/give here.
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
