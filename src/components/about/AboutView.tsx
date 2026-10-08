import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import TempleHinduOutlinedIcon from "@mui/icons-material/TempleHinduOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { liftCardSx } from "@/components/home/landing/cardMotion";
import { routes } from "@/config/routes";
import { aboutStory, aboutValues } from "@/data/about";
import { impactStats, missionContent } from "@/data/home";

const pillars = [
  {
    title: "Temple & heritage",
    text: "Lamps, repair, and the daily cost of keeping a sanctum open.",
    image: "/images/home/sanctum-lamps.jpg",
    alt: "A carved stone temple sanctum lined with oil lamps.",
    note: "Worship",
    icon: TempleHinduOutlinedIcon,
  },
  {
    title: "Daily Annadanam",
    text: "Sattvic meals offered to sadhus, pilgrims, and anyone who is hungry.",
    image: "/images/home/annadanam-hall.jpg",
    alt: "People eating a meal served on banana leaves in a temple hall.",
    note: "Meals",
    icon: RestaurantOutlinedIcon,
  },
  {
    title: "Vedic education",
    text: "Food, shelter, and study for a pathashala and its teacher.",
    image: "/images/pathashala.jpg",
    alt: "A teacher reading a palm-leaf manuscript on an Indian verandah.",
    note: "Study",
    icon: MenuBookOutlinedIcon,
  },
  {
    title: "Living beings",
    text: "Feed, shelter, and shade for animals and the land they live on.",
    image: "/images/desi-cows.jpg",
    alt: "Indian cows resting in the shade of a banyan beside a tiled shelter.",
    note: "Care",
    icon: ParkOutlinedIcon,
  },
];

const held = [
  {
    title: "Temple care",
    text: "The sanctum, the lamps, and the hands that keep worship open.",
    image: "/images/temple-sanctum.jpg",
    alt: "Brass oil lamps burning on a stone ledge in an Indian temple corridor.",
  },
  {
    title: "Annadanam",
    text: "A meal set out with dignity for those who come.",
    image: "/images/home/annadanam-courtyard.jpg",
    alt: "A meal being served to people seated in a row in a temple courtyard.",
  },
  {
    title: "Study",
    text: "A teacher and a student, and the year of learning between them.",
    image: "/images/pathashala.jpg",
    alt: "A teacher in a white veshti reading a palm-leaf manuscript.",
  },
  {
    title: "Service",
    text: "Sadhus and purohits who live by the work of the temple.",
    image: "/images/temple-service.jpg",
    alt: "A purohit carrying a brass vessel across an Indian temple courtyard.",
  },
];

const records = [
  { title: "Privacy", text: "How this site treats a visit.", href: routes.privacy, icon: PolicyOutlinedIcon },
  { title: "Terms", text: "The terms printed for this site.", href: routes.terms, icon: MenuBookOutlinedIcon },
  { title: "Cancellation", text: "What a visitor can read before a gift.", href: routes.cancellation, icon: PolicyOutlinedIcon },
  { title: "FAQs", text: "Answers about seva and monthly giving.", href: routes.faq, icon: VisibilityOutlinedIcon },
];

export function AboutView() {
  return (
    <>
      <Section aria-labelledby="about-heading" tone="subtle" sx={{ pt: { xs: 3, md: 5 } }}>
        <PageContainer>
          <Breadcrumbs aria-label="Breadcrumb" sx={{ mb: 3, "& a": { color: "text.secondary", textDecoration: "none" } }}>
            <Link href={routes.home}>Home</Link>
            <Typography color="text.primary">About</Typography>
          </Breadcrumbs>
          <Box
            sx={{
              display: "grid",
              gap: { xs: 3, md: 5 },
              alignItems: "start",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.15fr) minmax(280px, 0.85fr)" },
            }}
          >
            <Stack spacing={2}>
              <Typography
                id="about-heading"
                variant="h1"
                component="h1"
                sx={{ fontWeight: 600, fontSize: "clamp(2.2rem, 1.2rem + 2.4vw, 3.6rem)", lineHeight: 1.08, maxWidth: 640 }}
              >
                A sacred bridge between devotion and human welfare
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 620 }}>
                {missionContent.description}
              </Typography>
            </Stack>
            <Stack
              spacing={1.5}
              sx={{
                p: 2.5,
                borderRadius: "22px",
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "border.subtle",
                boxShadow: "0 16px 40px rgba(38, 33, 27, 0.06)",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignSelf: "flex-start",
                  alignItems: "center",
                  px: 1.25,
                  py: 0.6,
                  borderRadius: 999,
                  bgcolor: "#FFF3DE",
                }}
              >
                <TempleHinduOutlinedIcon sx={{ fontSize: 16, color: "primary.dark" }} />
                <Typography sx={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.08em", color: "primary.dark" }}>
                  ESTABLISHED IN LIVING DHARMA
                </Typography>
              </Stack>
              <Typography variant="h3" component="p">
                What this page shows
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The seva is named here: worship, Annadanam, study, and care for living beings. A gift can be reviewed from the pages linked below.
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              display: "grid",
              gap: 1.5,
              mt: 3,
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(5, minmax(0, 1fr))" },
            }}
          >
            {impactStats.map((stat) => (
              <Stack
                key={stat.id}
                spacing={0.5}
                sx={{ p: 2, height: "100%", borderRadius: "16px", bgcolor: "background.paper", border: "1px solid", borderColor: "border.subtle" }}
              >
                <Typography sx={{ color: "primary.dark", fontWeight: 800, fontSize: "1.35rem" }}>{stat.value}</Typography>
                <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: "0.04em" }}>
                  {stat.label}
                </Typography>
              </Stack>
            ))}
            <Link href={routes.explore} style={{ textDecoration: "none" }}>
              <Stack
                spacing={0.5}
                sx={{
                  p: 2,
                  height: "100%",
                  borderRadius: "16px",
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  border: "1px solid #C46E00",
                }}
              >
                <FavoriteBorderOutlinedIcon />
                <Typography sx={{ fontWeight: 800 }}>Review a gift</Typography>
              </Stack>
            </Link>
          </Box>
        </PageContainer>
      </Section>

      <Section aria-labelledby="origin-heading">
        <PageContainer>
          <Box
            sx={{
              display: "grid",
              gap: { xs: 3, md: 6 },
              alignItems: "center",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.05fr) minmax(0, 0.95fr)" },
            }}
          >
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ color: "primary.dark" }}>
                Purpose
              </Typography>
              <Typography id="origin-heading" variant="h2" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>
                Where sanctity meets compassionate action
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {missionContent.details[0]}
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ p: 2, borderRadius: "18px", bgcolor: "#FFF8EE", border: "1px solid #F3D7A6", alignItems: "flex-start" }}>
                <Box sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: "primary.main", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <TempleHinduOutlinedIcon sx={{ color: "primary.contrastText" }} />
                </Box>
                <Stack spacing={0.5}>
                  <Typography sx={{ fontWeight: 700 }}>The work a gift stands behind</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lamps, meals, study, and care for living beings. Each kind of seva is named before a contribution is asked for.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Box sx={{ position: "relative" }}>
              <Box sx={{ position: "relative", aspectRatio: "4 / 3", borderRadius: "24px", overflow: "hidden" }}>
                <Image
                  src="/images/temple-service.jpg"
                  alt="A purohit carrying a brass vessel across an Indian temple courtyard."
                  fill
                  sizes="(min-width: 900px) 46vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Stack
                spacing={1}
                sx={{
                  position: { md: "absolute" },
                  left: { md: 20 },
                  right: { md: 20 },
                  bottom: { md: -28 },
                  mt: { xs: 2, md: 0 },
                  p: 2,
                  borderRadius: "18px",
                  bgcolor: "background.paper",
                  boxShadow: "0 16px 40px rgba(38, 33, 27, 0.1)",
                }}
              >
                <Typography sx={{ color: "primary.dark", fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif", fontSize: "1.8rem", lineHeight: 1 }}>
                  “
                </Typography>
                <Typography variant="body1">Nar Seva is Narayan Seva. Service to a person is service offered in devotion.</Typography>
              </Stack>
            </Box>
          </Box>
        </PageContainer>
      </Section>

      <Section aria-labelledby="compass-heading" tone="subtle" sx={{ mt: { md: 2 } }}>
        <PageContainer>
          <Stack spacing={1} sx={{ textAlign: "center", alignItems: "center", mb: 3 }}>
            <Typography variant="overline" sx={{ color: "primary.dark" }}>
              A guiding compass
            </Typography>
            <Typography id="compass-heading" variant="h2" component="h2">
              Mission, vision, and values
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
              Rooted in the seva this site is built to carry.
            </Typography>
          </Stack>
          <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" } }}>
            <Stack spacing={1.5} sx={{ p: 2.5, height: "100%", borderRadius: "22px", bgcolor: "background.paper", border: "1px solid", borderColor: "border.subtle", ...liftCardSx }}>
              <TempleHinduOutlinedIcon sx={{ color: "primary.dark" }} />
              <Typography variant="overline" sx={{ color: "primary.dark" }}>Purpose</Typography>
              <Typography variant="h3" component="h3">Our mission</Typography>
              <Typography variant="body2" color="text.secondary">{missionContent.description}</Typography>
            </Stack>
            <Stack spacing={1.5} sx={{ p: 2.5, height: "100%", borderRadius: "22px", bgcolor: "background.paper", border: "1px solid", borderColor: "border.subtle", ...liftCardSx }}>
              <VisibilityOutlinedIcon sx={{ color: "primary.dark" }} />
              <Typography variant="overline" sx={{ color: "primary.dark" }}>Horizon</Typography>
              <Typography variant="h3" component="h3">Our vision</Typography>
              <Typography variant="body2" color="text.secondary">
                A visitor can see what a gift is for before they are asked to give. Worship, study, and care stay named in the open.
              </Typography>
            </Stack>
            <Stack spacing={1.5} sx={{ p: 2.5, height: "100%", borderRadius: "22px", bgcolor: "background.paper", border: "1px solid", borderColor: "border.subtle", ...liftCardSx }}>
              <MenuBookOutlinedIcon sx={{ color: "primary.dark" }} />
              <Typography variant="overline" sx={{ color: "primary.dark" }}>Values</Typography>
              <Typography variant="h3" component="h3">How we hold the work</Typography>
              <Stack component="ol" spacing={1} sx={{ m: 0, pl: 2.25 }}>
                {aboutValues.map((value, index) => (
                  <Typography key={value.id} component="li" variant="body2" color="text.secondary">
                    <Box component="span" sx={{ fontWeight: 700, color: "text.primary" }}>{index + 1}. {value.title}. </Box>
                    {value.description}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Box>
        </PageContainer>
      </Section>

      <Section aria-labelledby="pillars-heading">
        <PageContainer>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ justifyContent: "space-between", alignItems: { md: "flex-end" }, mb: 3 }}>
            <Stack spacing={1}>
              <Typography variant="overline" sx={{ color: "primary.dark" }}>Seva</Typography>
              <Typography id="pillars-heading" variant="h2" component="h2">The sacred pillars of seva</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360 }}>
              A gift is pointed at one of these kinds of care.
            </Typography>
          </Stack>
          <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, minmax(0, 1fr))" } }}>
            {pillars.map((pillar) => (
              <Stack key={pillar.title} sx={{ height: "100%", borderRadius: "22px", overflow: "hidden", bgcolor: "background.paper", border: "1px solid", borderColor: "border.subtle", ...liftCardSx }}>
                <Box sx={{ position: "relative", height: 180 }}>
                  <Image src={pillar.image} alt={pillar.alt} fill sizes="(min-width: 1200px) 22vw, 100vw" style={{ objectFit: "cover" }} />
                </Box>
                <Stack spacing={1} sx={{ p: 2, flexGrow: 1 }}>
                  <Typography variant="h3" component="h3">{pillar.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>{pillar.text}</Typography>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "primary.dark" }}>
                    <Typography variant="caption" sx={{ fontWeight: 800 }}>{pillar.note}</Typography>
                    <pillar.icon sx={{ fontSize: 18 }} />
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Box>
        </PageContainer>
      </Section>

      <Section aria-labelledby="held-heading" tone="subtle">
        <PageContainer>
          <Stack spacing={1} sx={{ textAlign: "center", alignItems: "center", mb: 3 }}>
            <Typography variant="overline" sx={{ color: "primary.dark" }}>Stewardship</Typography>
            <Typography id="held-heading" variant="h2" component="h2">How the work is held</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
              The care this site is built to carry, shown in the places and the people the photographs record.
            </Typography>
          </Stack>
          <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, minmax(0, 1fr))" } }}>
            {held.map((item) => (
              <Stack key={item.title} spacing={1.5} sx={{ p: 1.5, height: "100%", borderRadius: "22px", bgcolor: "background.paper", border: "1px solid", borderColor: "border.subtle", ...liftCardSx }}>
                <Box sx={{ position: "relative", aspectRatio: "4 / 3", borderRadius: "16px", overflow: "hidden" }}>
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1200px) 22vw, 50vw" style={{ objectFit: "cover" }} />
                </Box>
                <Typography variant="h3" component="h3">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.text}</Typography>
              </Stack>
            ))}
          </Box>
        </PageContainer>
      </Section>

      <Section aria-labelledby="record-heading">
        <PageContainer>
          <Box sx={{ display: "grid", gap: { xs: 3, md: 4 }, gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" } }}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ color: "primary.dark" }}>Open pages</Typography>
              <Typography id="record-heading" variant="h2" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
                What you can read before you give
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Privacy, terms, cancellation, and the answers on the FAQ page are linked here.
              </Typography>
            </Stack>
            <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
              {records.map((record) => (
                <Link key={record.href} href={record.href} style={{ textDecoration: "none", color: "inherit" }}>
                  <Stack spacing={1} sx={{ p: 2, height: "100%", borderRadius: "18px", bgcolor: "#FFF8EE", border: "1px solid #F3D7A6", ...liftCardSx }}>
                    <record.icon sx={{ color: "primary.dark" }} />
                    <Typography sx={{ fontWeight: 700 }}>{record.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{record.text}</Typography>
                  </Stack>
                </Link>
              ))}
            </Box>
          </Box>
        </PageContainer>
      </Section>

      <Section aria-labelledby="journey-heading" tone="subtle">
        <PageContainer>
          <Stack spacing={1} sx={{ textAlign: "center", alignItems: "center", mb: 3 }}>
            <Typography variant="overline" sx={{ color: "primary.dark" }}>The path</Typography>
            <Typography id="journey-heading" variant="h2" component="h2">The steps on this site</Typography>
          </Stack>
          <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, minmax(0, 1fr))" } }}>
            {aboutStory.milestones.map((step, index) => (
              <Stack key={step.id} spacing={1} sx={{ p: 2, height: "100%", borderRadius: "18px", bgcolor: "background.paper", border: "1px solid", borderColor: "border.subtle" }}>
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Typography sx={{ color: "primary.dark", fontWeight: 800 }}>{String(index + 1).padStart(2, "0")}</Typography>
                  <Box sx={{ width: 28, height: 28, borderRadius: "50%", display: "grid", placeItems: "center", bgcolor: index === aboutStory.milestones.length - 1 ? "primary.main" : "background.subtle", color: index === aboutStory.milestones.length - 1 ? "primary.contrastText" : "text.secondary", fontSize: "0.75rem", fontWeight: 700 }}>
                    {index + 1}
                  </Box>
                </Stack>
                <Typography variant="h3" component="h3">{step.title}</Typography>
                <Typography variant="body2" color="text.secondary">{step.description}</Typography>
              </Stack>
            ))}
          </Box>
        </PageContainer>
      </Section>
    </>
  );
}
