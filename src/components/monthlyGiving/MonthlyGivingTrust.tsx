import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { monthlyTrust } from "@/data/monthlyGiving";

export function MonthlyGivingTrust() {
  return (
    <Section accent aria-labelledby="monthly-trust" sx={{ py: { xs: 3, md: 4 } }}>
      <PageContainer>
        <Reveal>
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ color: "primary.dark" }}>
              {monthlyTrust.eyebrow}
            </Typography>
            <Typography id="monthly-trust" variant="h2" component="h2">
              {monthlyTrust.title}
            </Typography>
            <Box
              component="ul"
              sx={{
                m: 0,
                p: 0,
                listStyle: "none",
                display: "grid",
                gap: 1.5,
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              }}
            >
              {monthlyTrust.points.map((point) => (
                <Typography
                  key={point}
                  component="li"
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    p: 2,
                    borderRadius: "18px",
                    border: "1px solid",
                    borderColor: "border.subtle",
                    bgcolor: "background.paper",
                    lineHeight: 1.55,
                  }}
                >
                  {point}
                </Typography>
              ))}
            </Box>
          </Stack>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
