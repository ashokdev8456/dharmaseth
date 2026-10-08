import Box from "@mui/material/Box";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SevaPosterCard } from "@/components/home/SevaAreas/SevaPosterCard";
import { Tilt } from "@/components/motion/Tilt";
import { sevaAreas, sevaAreasContent } from "@/data/home";

const posters: Record<string, { image: string; imageAlt: string }> = {
  heritage: {
    image: "/images/temple-tower.jpg",
    imageAlt: "Overhead view of a South Indian temple tower rebuilt, with the tiers and sculptures in good shape.",
  },
  "vedic-education": {
    image: "/images/pathashala.jpg",
    imageAlt: "A teacher in a white veshti reading a palm-leaf manuscript on a kept Indian verandah.",
  },
  "living-beings": {
    image: "/images/desi-cows.jpg",
    imageAlt: "Indian cows resting in the shade of a banyan beside a sound tiled shelter.",
  },
  "seva-support": {
    image: "/images/temple-service.jpg",
    imageAlt: "A purohit carrying a brass vessel across a kept Indian temple courtyard.",
  },
  annadanam: {
    image: "/images/annadanam.jpg",
    imageAlt: "A sattvic meal of rice and sambar served properly on a banana leaf.",
  },
  "sacred-events": {
    image: "/images/puja-homam.jpg",
    imageAlt: "A homam fire set properly in a brick altar, with flowers and brass vessels beside it.",
  },
};

export function SevaAreas() {
  return (
    <Section aria-labelledby="seva-heading">
      <PageContainer>
        <Reveal>
          <SectionHeading
            id="seva-heading"
            eyebrow={sevaAreasContent.eyebrow}
            title={sevaAreasContent.title}
            description={`${sevaAreasContent.description} Photographs of the kinds of seva named here. They are not a record of a finished campaign.`}
            rule={false}
          />
        </Reveal>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            mt: { xs: 3, md: 4 },
            alignItems: "stretch",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            "& > *": { height: "100%" },
          }}
        >
          {sevaAreas.map((area, index) => {
            const poster = posters[area.id];
            if (!poster) {
              return null;
            }
            return (
              <Reveal key={area.id} delay={index * 80}>
                <Tilt>
                  <SevaPosterCard area={area} image={poster.image} imageAlt={poster.imageAlt} index={index} />
                </Tilt>
              </Reveal>
            );
          })}
        </Box>
      </PageContainer>
    </Section>
  );
}
