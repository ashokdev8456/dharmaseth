import type { Metadata } from "next";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { ExploreHero } from "@/components/campaigns/ExploreHero";
import { ExploreListing } from "@/components/campaigns/ExploreListing";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";
import { campaignListings } from "@/data/campaigns";
import { defaultCampaignQuery, parseCampaignQuery } from "@/utils/campaignFilters";

const description =
  "Browse seva by cause and status. Open one to read the purpose and review a gift.";

type ExplorePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: ExplorePageProps): Promise<Metadata> {
  const query = parseCampaignQuery(await searchParams);
  const filtered =
    query.q !== defaultCampaignQuery.q ||
    query.cause !== defaultCampaignQuery.cause ||
    query.status !== defaultCampaignQuery.status ||
    query.featured !== defaultCampaignQuery.featured ||
    query.sort !== defaultCampaignQuery.sort;

  // Filtered URLs stay canonical to /explore and are not indexed.
  return pageMetadata({
    title: "Explore seva",
    description,
    path: routes.explore,
    index: !filtered,
  });
}

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const query = parseCampaignQuery(await searchParams);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Explore", path: routes.explore },
        ])}
      />
      <Section accent tone="subtle" aria-label="Campaign results" sx={{ py: { xs: 2.5, md: 3 } }}>
        <PageContainer>
          <ExploreListing campaigns={campaignListings} initialQuery={query}>
            <ExploreHero />
          </ExploreListing>
        </PageContainer>
      </Section>
    </>
  );
}
