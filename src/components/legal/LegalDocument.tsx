import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { routes } from "@/config/routes";
import type { LegalDocument as LegalDocumentContent } from "@/types/legal";

type LegalDocumentProps = {
  document: LegalDocumentContent;
  breadcrumb: string;
};

export function LegalDocument({ document, breadcrumb }: LegalDocumentProps) {
  const showContents = document.sections.length >= 6;

  return (
    <Section aria-labelledby="legal-heading" sx={{ pt: { xs: 3, md: 6 } }}>
      <PageContainer maxWidth="md">
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
          <NextLink href={routes.home}>Home</NextLink>
          <Typography color="text.primary">{breadcrumb}</Typography>
        </Breadcrumbs>
        <Alert severity="warning" sx={{ mb: 4, alignItems: "flex-start" }}>
          <AlertTitle>Legal review required</AlertTitle>
          {document.notice}
        </Alert>
        <Stack spacing={2} sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography id="legal-heading" variant="h1" component="h1">
            {document.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            No approved review date. This draft will be replaced before it is treated as policy.
          </Typography>
          <Typography variant="bodyLarge" color="text.secondary">
            {document.summary}
          </Typography>
        </Stack>
        {showContents ? (
          <Box component="nav" aria-label="On this page" sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography variant="subtitle2" component="h2" sx={{ mb: 1.5 }}>
              On this page
            </Typography>
            <Stack component="ol" spacing={1} sx={{ m: 0, pl: 2.5 }}>
              {document.sections.map((section) => (
                <Typography key={section.id} component="li" variant="body1">
                  <Link
                    href={`#${section.id}`}
                    underline="hover"
                    sx={{
                      color: "primary.dark",
                      "&:focus-visible": {
                        outline: "2px solid",
                        outlineColor: "primary.dark",
                        outlineOffset: 2,
                      },
                    }}
                  >
                    {section.title}
                  </Link>
                </Typography>
              ))}
            </Stack>
          </Box>
        ) : null}
        <Stack spacing={{ xs: 4, md: 5 }}>
          {document.sections.map((section) => (
            <Stack
              key={section.id}
              component="section"
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              spacing={1.5}
              sx={{ scrollMarginTop: { xs: 80, md: 96 } }}
            >
              <Typography id={`${section.id}-heading`} variant="h2" component="h2">
                {section.title}
              </Typography>
              {section.paragraphs.map((paragraph) => (
                <Typography key={paragraph} variant="body1" color="text.secondary">
                  {paragraph}
                </Typography>
              ))}
              {section.items ? (
                <Box component="ul" sx={{ m: 0, pl: 2.5, display: "grid", gap: 1 }}>
                  {section.items.map((item) => (
                    <Typography key={item} component="li" variant="body1" color="text.secondary">
                      {item}
                    </Typography>
                  ))}
                </Box>
              ) : null}
            </Stack>
          ))}
        </Stack>
      </PageContainer>
    </Section>
  );
}
