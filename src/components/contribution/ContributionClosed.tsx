import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AppButton } from "@/components/ui/AppButton";
import { campaignPath, routes } from "@/config/routes";
import type { CampaignStatus } from "@/types/domain";

type ContributionClosedProps = {
  slug: string;
  status: Exclude<CampaignStatus, "active">;
};

export function ContributionClosed({ slug, status }: ContributionClosedProps) {
  const description =
    status === "completed"
      ? "This campaign is marked completed."
      : "This campaign has not opened.";

  return (
    <Section>
      <PageContainer>
        <SectionHeading
          component="h1"
          title="This campaign is not currently accepting contributions."
          description={description}
        />
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
          <AppButton href={routes.explore} variant="contained">
            Explore other campaigns
          </AppButton>
          <AppButton href={campaignPath(slug)} variant="outlined">
            Back to campaign
          </AppButton>
        </Stack>
      </PageContainer>
    </Section>
  );
}
