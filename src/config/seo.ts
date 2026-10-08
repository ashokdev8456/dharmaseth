import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  /** Short page title. The root template appends the site name unless `absolute` is set. */
  title: string;
  description: string;
  /** Path on this site, such as `/explore`. Never a request host. */
  path: string;
  /** Homepage uses a full title and does not apply the template again. */
  absolute?: boolean;
  /** Crawlable pages that should not appear in search results. */
  index?: boolean;
  image?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
};

export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
  index = true,
  image,
}: PageMetadataInput): Metadata {
  const socialTitle = absolute ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: { index, follow: true },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      ...(image
        ? {
            images: [
              {
                url: image.url,
                alt: image.alt,
                width: image.width,
                height: image.height,
              },
            ],
          }
        : {}),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en",
  };
}
