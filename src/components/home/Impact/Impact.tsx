import Box from "@mui/material/Box";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ImpactStatCard } from "@/components/home/Impact/ImpactStatCard";
import { impactContent, impactStats } from "@/data/home";

export function Impact() {
  return (
    <Section tone="subtle" aria-labelledby="impact-heading">
      <PageContainer>
        <Reveal>
          <SectionHeading
            id="impact-heading"
            eyebrow={impactContent.eyebrow}
            title={impactContent.title}
            description={impactContent.description}
            rule={false}
          />
        </Reveal>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            mt: { xs: 3, md: 4 },
            alignItems: "stretch",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
            "& > *": { height: "100%" },
          }}
        >
          {impactStats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 80}>
              <ImpactStatCard stat={stat} index={index} />
            </Reveal>
          ))}
        </Box>
      </PageContainer>
    </Section>
  );
}
