import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Campaign } from "@/types/domain";

type CampaignNarrativeProps = {
  campaign: Campaign;
};

export function CampaignNarrative({ campaign }: CampaignNarrativeProps) {
  const paragraphs = campaign.story
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const objectives = campaign.objectives?.filter((item) => item.trim()) ?? [];

  return (
    <Stack spacing={{ xs: 3, md: 3.5 }}>
      {paragraphs.length > 0 ? (
        <Stack component="section" aria-labelledby="campaign-story" spacing={2}>
          <Typography id="campaign-story" variant="h2" component="h2" sx={{ fontSize: { xs: "1.35rem", md: "1.5rem" } }}>
            About this campaign
          </Typography>
          {paragraphs.map((paragraph) => (
            <Typography key={paragraph} variant="body1" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>
      ) : null}

      {objectives.length > 0 ? (
        <Stack component="section" aria-labelledby="campaign-aims" spacing={2}>
          <Typography id="campaign-aims" variant="h2" component="h2" sx={{ fontSize: { xs: "1.35rem", md: "1.5rem" } }}>
            What support is for
          </Typography>
          <Typography variant="body1" color="text.secondary">
            These are the purposes named for this seva.
          </Typography>
          <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 0, listStyle: "none" }}>
            {objectives.map((objective) => (
              <Stack key={objective} component="li" direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                <CheckIcon aria-hidden sx={{ mt: "2px", color: "primary.dark" }} />
                <Typography variant="body1">{objective}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      ) : null}

      <Stack component="section" aria-labelledby="campaign-trust" spacing={2}>
        <Typography id="campaign-trust" variant="h2" component="h2">
          Before you continue
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
          <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            The amounts on this page are the figures published for this seva.
          </Typography>
          <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            This page does not show awards, registrations, or partner marks.
          </Typography>
          <Typography component="li" variant="body1" color="text.secondary">
            A contact email and hours are printed in the footer. Review the amount before you continue.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
