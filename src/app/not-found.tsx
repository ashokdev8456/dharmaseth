import type { Metadata } from "next";
import Button from "@mui/material/Button";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That address is not part of Dharmasethu.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section>
      <PageContainer>
        <SectionHeading
          component="h1"
          title="Page not found"
          description="That address is not part of Dharmasethu."
        />
        <Button href={routes.home} variant="contained" sx={{ mt: 3 }}>
          Back to home
        </Button>
      </PageContainer>
    </Section>
  );
}
