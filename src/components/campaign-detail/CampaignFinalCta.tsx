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
    <Section aria-labelledby="campaign-next" sx={{ py: { xs: 3, md: 4 } }}>
      <PageContainer>
        <Stack
          spacing={2}
          sx={{
            alignItems: "flex-start",
            textAlign: "left",
            maxWidth: 720,
            p: { xs: 3, md: 4 },
            borderRadius: "24px",
            border: "1px solid",
            borderColor: "border.subtle",
            bgcolor: "background.paper",
            backgroundImage: "linear-gradient(120deg, rgba(255,246,229,0.9), rgba(255,253,248,0.2)), url(/images/home/sanctum-lamps.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography id="campaign-next" variant="h2" component="h2" sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" } }}>
            {active ? "Ready to support this cause?" : "Explore more ways to contribute."}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {active
              ? "The next step is a look at how support will work. It is not a payment."
              : campaign.status === "completed"
                ? "This campaign is marked completed."
                : "This campaign has not opened."}
          </Typography>
          <AppButton href={active ? givePath(campaign.slug) : routes.explore} variant="contained" sx={{ width: { xs: "100%", sm: "auto" } }}>
            {active ? "Support this campaign" : "Explore campaigns"}
          </AppButton>
        </Stack>
      </PageContainer>
    </Section>
  );
}
