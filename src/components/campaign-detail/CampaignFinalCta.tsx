import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { AppButton } from "@/components/ui/AppButton";
import { givePath, routes } from "@/config/routes";
import type { Campaign } from "@/types/domain";

type CampaignFinalCtaProps = {
  campaign: Campaign;
};

export function CampaignFinalCta({ campaign }: CampaignFinalCtaProps) {
  const active = campaign.status === "active";

  return (
    <Section aria-labelledby="campaign-next" sx={active ? { bgcolor: "primary.main", color: "primary.contrastText" } : undefined}>
      <PageContainer>
        <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center", maxWidth: 640, mx: "auto" }}>
          <Typography id="campaign-next" variant="h2" component="h2" sx={{ color: "inherit" }}>
            {active ? "Ready to support this cause?" : "Explore more ways to contribute."}
          </Typography>
          <Typography variant="bodyLarge" sx={{ color: "inherit" }}>
            {active
              ? "The next step is a look at how support will work. It is not a payment."
              : campaign.status === "completed"
                ? "This campaign is marked completed."
                : "This campaign has not opened."}
          </Typography>
          <AppButton
            href={active ? givePath(campaign.slug) : routes.explore}
            variant="contained"
            sx={
              active
                ? {
                    width: { xs: "100%", sm: "auto" },
                    bgcolor: "background.paper",
                    color: "primary.dark",
                    "&:hover": { bgcolor: "background.default" },
                    "&:focus-visible": { outlineColor: "background.paper" },
                  }
                : { width: { xs: "100%", sm: "auto" } }
            }
          >
            {active ? "Support this campaign" : "Explore campaigns"}
          </AppButton>
        </Stack>
      </PageContainer>
    </Section>
  );
}
