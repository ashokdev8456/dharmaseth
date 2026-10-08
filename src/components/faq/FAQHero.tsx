import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { routes } from "@/config/routes";

export function FAQHero() {
  return (
    <Box
      component="section"
      aria-labelledby="faq-heading"
      sx={{
        pt: { xs: 3, md: 6 },
        pb: { xs: 2, md: 3 },
        background: "radial-gradient(ellipse at 85% 0%, rgba(255, 159, 0, 0.14), transparent 52%)",
      }}
    >
      <PageContainer>
        <Breadcrumbs
          aria-label="Breadcrumb"
          sx={{
            mb: 3,
            "& a": {
              color: "text.secondary",
              "&:focus-visible": {
                outline: "2px solid",
                outlineColor: "primary.dark",
                outlineOffset: 2,
              },
            },
          }}
        >
          <Link href={routes.home}>Home</Link>
          <Typography color="text.primary">FAQs</Typography>
        </Breadcrumbs>
        <Stack spacing={2} sx={{ maxWidth: 720 }}>
          <Typography variant="overline" sx={{ color: "primary.dark" }}>
            Help & guidance
          </Typography>
          <Typography id="faq-heading" variant="h1" component="h1">
            Frequently Asked Questions
          </Typography>
          <Typography variant="bodyLarge" color="text.secondary">
            Clear answers about campaigns, one-time gifts, and monthly giving. Payment is not connected on this site.
          </Typography>
        </Stack>
      </PageContainer>
    </Box>
  );
}
