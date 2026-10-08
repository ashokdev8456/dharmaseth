import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Section>
      <PageContainer>
        <SectionHeading component="h1" title={title} description={description} />
      </PageContainer>
    </Section>
  );
}
