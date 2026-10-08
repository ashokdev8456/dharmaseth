import Box from "@mui/material/Box";
import { CampaignCard } from "@/components/campaigns/CampaignCard";
import type { CampaignListingItem } from "@/types/domain";

type CampaignGridProps = {
  campaigns: CampaignListingItem[];
};

export function CampaignGrid({ campaigns }: CampaignGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        alignItems: "stretch",
        "& > *": { height: "100%" },
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, minmax(0, 1fr))" },
      }}
    >
      {campaigns.map((campaign, index) => (
        <CampaignCard key={campaign.slug} campaign={campaign} eager={index < 4} />
      ))}
    </Box>
  );
}
