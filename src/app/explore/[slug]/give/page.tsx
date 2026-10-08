import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContributionClosed } from "@/components/contribution/ContributionClosed";
import { ContributionFlow } from "@/components/contribution/ContributionFlow";
import { pageMetadata } from "@/config/seo";
import { givePath } from "@/config/routes";
import { campaigns, getCampaignBySlug } from "@/data/campaigns";
import type { ContributionCampaign } from "@/types/contribution";
import { causeLabel } from "@/utils/campaignFilters";

type GivePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return campaigns.map((campaign) => ({ slug: campaign.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: GivePageProps): Promise<Metadata> {
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

  // Transactional review with no payment. Crawlable so noindex is visible, and omitted from the sitemap.
  // Canonical is this URL so the form does not compete with the campaign page.
  return pageMetadata({
    title: `Support ${campaign.title}`,
    description: "Choose an amount and review a contribution. This page does not take a payment.",
    path: givePath(campaign.slug),
    index: false,
  });
}

export default async function GivePage({ params }: GivePageProps) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) notFound();

  if (campaign.status !== "active") {
    return <ContributionClosed slug={campaign.slug} status={campaign.status} />;
  }

  const summary: ContributionCampaign = {
    slug: campaign.slug,
    title: campaign.title,
    summary: campaign.summary,
    causeLabel: causeLabel(campaign.causeId),
    imageSrc: campaign.image.src,
    imageAlt: campaign.image.alt || campaign.title,
    goalInr: campaign.goalInr,
    raisedInr: campaign.raisedInr,
    sample: campaign.sample,
  };

  return (
    <Section sx={{ py: { xs: 4, md: 6 } }}>
      <PageContainer>
        <SectionHeading
          component="h1"
          eyebrow="Seva"
          title="Support this campaign"
          description="Choose an amount and review the gift."
        />
        <Box sx={{ mt: { xs: 3, md: 4 } }}>
          <ContributionFlow campaign={summary} />
        </Box>
      </PageContainer>
    </Section>
  );
}
