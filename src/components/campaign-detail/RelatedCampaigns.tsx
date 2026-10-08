import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { CampaignCard } from "@/components/campaigns/CampaignCard";
import type { Campaign } from "@/types/domain";
import { causeLabel } from "@/utils/campaignFilters";

type RelatedCampaignsProps = {
  campaign: Campaign;
  related: Campaign[];
};

export function RelatedCampaigns({ campaign, related }: RelatedCampaignsProps) {
  if (related.length === 0) return null;

  return (
    <Section tone="subtle" aria-labelledby="related-campaigns">
      <PageContainer>
        <Typography id="related-campaigns" variant="h2" component="h2" sx={{ mb: { xs: 3, md: 4 } }}>
          More in {causeLabel(campaign.causeId)}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
          }}
        >
          {related.map((item) => (
            <CampaignCard key={item.slug} campaign={item} titleComponent="h3" />
          ))}
        </Box>
      </PageContainer>
    </Section>
  );
}
