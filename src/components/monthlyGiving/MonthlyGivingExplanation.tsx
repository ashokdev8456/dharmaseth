import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { monthlyExplanation } from "@/data/monthlyGiving";

export function MonthlyGivingExplanation() {
  return (
    <Section accent tone="subtle" aria-labelledby="monthly-how" sx={{ py: { xs: 3, md: 4 } }}>
      <PageContainer>
        <Reveal>
          <Stack spacing={2.5}>
            <Stack spacing={1} sx={{ maxWidth: 720 }}>
              <Typography variant="overline" sx={{ color: "primary.dark" }}>
                {monthlyExplanation.eyebrow}
              </Typography>
              <Typography id="monthly-how" variant="h2" component="h2">
                {monthlyExplanation.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {monthlyExplanation.description}
              </Typography>
            </Stack>
            <Box
              component="ol"
              sx={{
                m: 0,
                p: 0,
                listStyle: "none",
                display: "grid",
                gap: 1.5,
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              }}
            >
              {monthlyExplanation.steps.map((step, index) => (
                <Stack
                  key={step}
                  component="li"
                  direction="row"
                  spacing={1.5}
                  sx={{
                    alignItems: "flex-start",
                    p: 2,
                    borderRadius: "18px",
                    border: "1px solid",
                    borderColor: "border.subtle",
                    bgcolor: "background.paper",
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "#171717",
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="body1" sx={{ pt: 0.25 }}>
                    {step}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Stack>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
