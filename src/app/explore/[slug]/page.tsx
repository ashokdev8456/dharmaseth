import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { CampaignFinalCta } from "@/components/campaign-detail/CampaignFinalCta";
import { CampaignHero } from "@/components/campaign-detail/CampaignHero";
import { CampaignNarrative } from "@/components/campaign-detail/CampaignNarrative";
import { CampaignSupportPanel } from "@/components/campaign-detail/CampaignSupportPanel";
import { RelatedCampaigns } from "@/components/campaign-detail/RelatedCampaigns";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/config/seo";
import { campaignPath, routes } from "@/config/routes";
import { campaigns, getCampaignBySlug, getRelatedCampaigns } from "@/data/campaigns";

type CampaignPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return campaigns.map((campaign) => ({ slug: campaign.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CampaignPageProps): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) {
    return {
      title: "Campaign not found",
      description:
        "The campaign you are looking for may have been removed, or this address is not on this site.",
      robots: { index: false, follow: true },
    };
  }

  const path = campaignPath(campaign.slug);

  return pageMetadata({
    title: campaign.title,
    description: campaign.summary,
    path,
    image: {
      url: campaign.image.src,
      alt: campaign.image.alt,
      width: campaign.image.width,
      height: campaign.image.height,
    },
  });
}

export default async function CampaignPage({ params }: CampaignPageProps) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();

  const related = getRelatedCampaigns(campaign);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Explore", path: routes.explore },
          { name: campaign.title, path: campaignPath(campaign.slug) },
        ])}
      />
      <Section component="header" accent tone="subtle" sx={{ py: { xs: 2, md: 3 } }}>
        <PageContainer>
          <Reveal>
            <CampaignHero campaign={campaign} />
          </Reveal>
        </PageContainer>
      </Section>
      <Section aria-label="Campaign detail" sx={{ py: { xs: 2, md: 4 } }}>
        <PageContainer>
          <Box
            sx={{
              display: "grid",
              alignItems: "start",
              gap: { xs: 2.5, lg: 3 },
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 300px" },
              gridTemplateAreas: {
                xs: `"story" "support"`,
                md: `"story support"`,
              },
            }}
          >
            <Box sx={{ gridArea: "story", minWidth: 0 }}>
              <CampaignNarrative campaign={campaign} />
            </Box>
            <Box sx={{ gridArea: "support", position: { md: "sticky" }, top: { md: 80, lg: 96 } }}>
              <CampaignSupportPanel campaign={campaign} />
            </Box>
          </Box>
        </PageContainer>
      </Section>
      <RelatedCampaigns campaign={campaign} related={related} />
      <CampaignFinalCta campaign={campaign} />
    </>
  );
}
