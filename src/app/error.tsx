"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { ErrorState } from "@/components/ui/ErrorState";
import { routes } from "@/config/routes";

export default function AppError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Section>
      <PageContainer>
        <ErrorState
          title="This page did not load"
          message="Something interrupted the page. Please try again."
          action={
            <Stack spacing={1.5} sx={{ flexDirection: { xs: "column", sm: "row" } }}>
              <Button variant="contained" onClick={reset}>
                Try again
              </Button>
              <Button href={routes.home} variant="outlined">
                Back to home
              </Button>
            </Stack>
          }
        />
      </PageContainer>
    </Section>
  );
}
