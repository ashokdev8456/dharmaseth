import type { Metadata } from "next";
import Button from "@mui/material/Button";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Campaign not found",
  description:
    "The campaign you are looking for may have been removed, or this address is not on this site.",
  robots: { index: false, follow: true },
};

export default function CampaignNotFound() {
  return (
    <Section>
      <PageContainer>
        <SectionHeading
          component="h1"
          title="Campaign not found"
          description="The campaign you are looking for may have been removed, or this address is not on this site."
        />
        <Button href={routes.explore} variant="contained" sx={{ mt: 3 }}>
          Explore campaigns
        </Button>
      </PageContainer>
    </Section>
  );
}
