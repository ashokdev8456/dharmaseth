import type { ReactNode } from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import TempleHinduOutlinedIcon from "@mui/icons-material/TempleHinduOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { FooterLink } from "@/components/layout/Footer/FooterLink";
import { Logo } from "@/components/layout/Logo";
import { AppButton } from "@/components/ui/AppButton";
import { footerBrand } from "@/config/footer";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { homepageCta } from "@/data/home";

function IconLink({ href, icon, children }: { href: string; icon: ReactNode; children: ReactNode }) {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
      <Stack
        direction="row"
        spacing={1.25}
        sx={{
          alignItems: "center",
          minHeight: 40,
          color: "text.primary",
          "&:hover": { color: "primary.dark" },
        }}
      >
        <Box aria-hidden sx={{ display: "flex", color: "primary.dark" }}>
          {icon}
        </Box>
        <Typography variant="body2">{children}</Typography>
      </Stack>
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ mt: "auto" }}>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          color: "#FFFFFF",
          background: "linear-gradient(180deg, #E39A1A 0%, #C46E00 55%, #A35600 100%)",
        }}
      >
        <PageContainer>
          <Stack spacing={2.5} sx={{ alignItems: "center", textAlign: "center", maxWidth: 760, mx: "auto" }}>
            <Box
              aria-hidden
              sx={{
                width: 52,
                height: 52,
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.16)",
              }}
            >
              <TempleHinduOutlinedIcon />
            </Box>
            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 1.2rem + 2.2vw, 3.4rem)",
                lineHeight: 1.08,
                color: "#FFFFFF",
              }}
            >
              Awaken the sacred spirit of giving
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.92)", maxWidth: 560 }}>
              {homepageCta.description}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <AppButton
                href={routes.explore}
                variant="contained"
                sx={{
                  "&&": { borderRadius: 999, bgcolor: "#FFFFFF", color: "#171717", borderColor: "#FFFFFF" },
                  "&&:hover": { bgcolor: "#F8F5EE", borderColor: "#F8F5EE" },
                }}
              >
                Review a gift
              </AppButton>
              <AppButton
                href={routes.monthly}
                variant="contained"
                sx={{
                  "&&": { borderRadius: 999, bgcolor: "#3A2410", color: "#FFFFFF", borderColor: "#3A2410" },
                  "&&:hover": { bgcolor: "#2A1A0C", borderColor: "#2A1A0C" },
                }}
              >
                Give monthly
              </AppButton>
            </Stack>
          </Stack>
        </PageContainer>
      </Box>

      <Box sx={{ bgcolor: "#FFFdf8", color: "text.primary" }}>
        <PageContainer sx={{ py: { xs: 5, md: 6 } }}>
          <Box
            sx={{
              display: "grid",
              gap: { xs: 4, md: 5 },
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "minmax(220px, 1.15fr) 1fr 1fr minmax(240px, 1.05fr)" },
            }}
          >
            <Stack spacing={1.5}>
              <Logo size="small" />
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280, lineHeight: 1.7 }}>
                {footerBrand.statement}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {footerBrand.contactNote}
              </Typography>
              <FooterLink href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</FooterLink>
              <Typography variant="body2" color="text.secondary">
                {siteConfig.contact.hours}
              </Typography>
            </Stack>

            <Stack spacing={0.5} component="nav" aria-label="Our programs">
              <Typography component="h2" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Our programs
              </Typography>
              <IconLink href={routes.explore} icon={<TempleHinduOutlinedIcon sx={{ fontSize: 18 }} />}>
                Temple & heritage
              </IconLink>
              <IconLink href={routes.explore} icon={<RestaurantOutlinedIcon sx={{ fontSize: 18 }} />}>
                Annadanam
              </IconLink>
              <IconLink href={routes.explore} icon={<MenuBookOutlinedIcon sx={{ fontSize: 18 }} />}>
                Vedic education
              </IconLink>
              <IconLink href={routes.explore} icon={<ParkOutlinedIcon sx={{ fontSize: 18 }} />}>
                Living beings
              </IconLink>
              <IconLink href={routes.explore} icon={<VolunteerActivismOutlinedIcon sx={{ fontSize: 18 }} />}>
                Sacred events
              </IconLink>
            </Stack>

            <Stack spacing={0.5} component="nav" aria-label="Transparency and trust">
              <Typography component="h2" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Transparency & trust
              </Typography>
              <IconLink href={routes.privacy} icon={<PolicyOutlinedIcon sx={{ fontSize: 18 }} />}>
                Privacy
              </IconLink>
              <IconLink href={routes.terms} icon={<GavelOutlinedIcon sx={{ fontSize: 18 }} />}>
                Terms
              </IconLink>
              <IconLink href={routes.cancellation} icon={<ArticleOutlinedIcon sx={{ fontSize: 18 }} />}>
                Cancellation
              </IconLink>
              <IconLink href={routes.faq} icon={<HelpOutlinedIcon sx={{ fontSize: 18 }} />}>
                FAQs
              </IconLink>
              <IconLink href={routes.about} icon={<InfoOutlinedIcon sx={{ fontSize: 18 }} />}>
                About
              </IconLink>
            </Stack>

            <Stack spacing={1.5} component="nav" aria-label="Direct seva">
              <Typography component="h2" variant="subtitle1" sx={{ fontWeight: 700 }}>
                Direct seva
              </Typography>
              <Stack
                spacing={1.5}
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  border: "1px solid",
                  borderColor: "#F3D7A6",
                  bgcolor: "#FFF8EE",
                }}
              >
                <Typography variant="overline" sx={{ color: "primary.dark" }}>
                  Review a gift
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Choose a seva, then review a gift.
                </Typography>
                <AppButton href={routes.explore} variant="contained" sx={{ borderRadius: 999, alignSelf: "flex-start" }}>
                  Review a gift
                </AppButton>
              </Stack>
              <IconLink href={routes.monthly} icon={<VolunteerActivismOutlinedIcon sx={{ fontSize: 18 }} />}>
                Monthly giving
              </IconLink>
              <IconLink href={routes.contact} icon={<InfoOutlinedIcon sx={{ fontSize: 18 }} />}>
                Contact
              </IconLink>
            </Stack>
          </Box>
        </PageContainer>

        <Box sx={{ borderTop: "1px solid", borderColor: "border.subtle" }}>
          <PageContainer sx={{ py: 2 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              sx={{ justifyContent: "space-between", alignItems: { sm: "center" } }}
            >
              <Typography variant="body2" color="text.secondary">
                {siteConfig.name} © {year}. All rights reserved.
              </Typography>
              <Typography variant="overline" sx={{ color: "primary.dark", letterSpacing: "0.14em" }}>
                Dharma · Compassion · Service · Transparency · Impact
              </Typography>
            </Stack>
          </PageContainer>
        </Box>
      </Box>
    </Box>
  );
}
