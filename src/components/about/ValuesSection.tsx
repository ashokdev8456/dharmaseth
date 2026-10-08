import type { ElementType } from "react";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import Box from "@mui/material/Box";
import { ValueCard } from "@/components/about/ValueCard";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { aboutValues, aboutValuesIntro } from "@/data/about";

const valueIcons: Record<string, ElementType> = {
  clarity: VisibilityOutlinedIcon,
  care: FavoriteBorderOutlinedIcon,
  restraint: BalanceOutlinedIcon,
  service: VolunteerActivismOutlinedIcon,
};

export function ValuesSection() {
  return (
    <Section aria-labelledby="values-heading" tone="subtle">
      <PageContainer>
        <Reveal>
          <SectionHeading
            id="values-heading"
            index="03"
            eyebrow={aboutValuesIntro.eyebrow}
            title={aboutValuesIntro.title}
            description={aboutValuesIntro.description}
          />
        </Reveal>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            mt: { xs: 4, md: 5 },
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
          }}
        >
          {aboutValues.map((value, index) => (
            <Reveal key={value.id} delay={index * 60}>
              <ValueCard title={value.title} description={value.description} icon={valueIcons[value.id]} />
            </Reveal>
          ))}
        </Box>
      </PageContainer>
    </Section>
  );
}
