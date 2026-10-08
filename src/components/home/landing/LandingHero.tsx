import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import TempleHinduOutlinedIcon from "@mui/icons-material/TempleHinduOutlined";
import Link from "next/link";
import { HeroBanner } from "@/components/home/landing/HeroBanner";
import { AppButton } from "@/components/ui/AppButton";
import { routes } from "@/config/routes";
import { enterSx } from "@/theme/motion";
import { formatInr } from "@/utils/money";

const gifts = [
  { amount: 500, label: "Annadanam" },
  { amount: 1500, label: "Vedic study" },
  { amount: 5000, label: "Sanctum care" },
  { amount: 11000, label: "Temple care" },
];

const assurances = [
  { icon: TempleHinduOutlinedIcon, label: "Temple and heritage" },
  { icon: PolicyOutlinedIcon, label: "Policies you can read" },
  { icon: MailOutlinedIcon, label: "A written contact" },
];

export function LandingHero() {
  return (
    <HeroBanner>
          <Stack spacing={{ xs: 1, md: 1.5 }} sx={{ ...enterSx(0), maxWidth: 720 }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignSelf: "flex-start",
                alignItems: "center",
                px: 1.5,
                py: 0.75,
                borderRadius: 999,
                border: "1px solid rgba(255,253,248,0.45)",
                bgcolor: "rgba(255,253,248,0.12)",
              }}
            >
              <TempleHinduOutlinedIcon sx={{ fontSize: 16, color: "#FFB347" }} />
              <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", color: "#FFFDF8" }}>
                A SACRED BRIDGE OF COMPASSION & FAITH
              </Typography>
            </Stack>
            <Typography
              id="hero-heading"
              component="h1"
              sx={{
                fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1.75rem, 0.55rem + 2.3vw, 3.35rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: "#FFFDF8",
                maxWidth: 640,
              }}
            >
              Building a{" "}
              <Box component="span" sx={{ fontStyle: "italic", color: "#FFB347" }}>
                Sacred Bridge
              </Box>{" "}
              of Hope & Dignity
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 560, color: "rgba(255,253,248,0.92)", fontSize: { xs: "0.92rem", md: "1rem" }, lineHeight: { xs: 1.45, md: 1.7 } }}>
              At DharmaSetHu Trust, a gift stands with stone sanctuaries and the daily lamp of a sanctum, with Annadanam for sadhus, pilgrims, and anyone who is hungry, and with food, shelter, and study for a pathashala. The work is worship, meals, learning, and care for living beings and the people who serve them.
            </Typography>
            <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", gap: 1, flexWrap: "wrap" }}>
              <Typography variant="overline" sx={{ color: "#FFD59A" }}>
                Direct seva amount
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  px: 1.25,
                  py: 0.5,
                  borderRadius: 999,
                  border: "1px solid #E7C48A",
                  color: "#FFFDF8",
                  fontWeight: 700,
                }}
              >
                Review before you give
              </Typography>
            </Stack>
            <Box
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, minmax(0, 1fr))" },
              }}
            >
              {gifts.map((gift, index) => (
                <Link key={gift.amount} href={routes.monthly} style={{ textDecoration: "none" }}>
                  <Stack
                    spacing={0.25}
                    sx={{
                      minHeight: { xs: 56, sm: 64 },
                      justifyContent: "center",
                      px: 1.25,
                      py: { xs: 0.75, sm: 1.25 },
                      borderRadius: "14px",
                      border: "1px solid",
                      borderColor: index === 0 ? "#C46E00" : "border.default",
                      bgcolor: index === 0 ? "primary.main" : "background.paper",
                      color: index === 0 ? "primary.contrastText" : "text.primary",
                      "&:hover": { borderColor: "primary.dark" },
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", lineHeight: 1.2 }}>
                      {formatInr(gift.amount)}
                    </Typography>
                    <Typography sx={{ fontSize: "0.75rem", lineHeight: 1.3, opacity: 0.9 }}>{gift.label}</Typography>
                  </Stack>
                </Link>
              ))}
            </Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 18, color: "#FFB347" }} />
              <Typography variant="body2" sx={{ color: "rgba(255,253,248,0.92)" }}>
                A meal, a year of study, or the lamps of a sanctum.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
              <AppButton
                href={routes.explore}
                variant="contained"
                startIcon={<FavoriteBorderOutlinedIcon />}
                sx={{ borderRadius: 999, px: 2.5 }}
              >
                Review a gift
              </AppButton>
              <AppButton
                href={routes.explore}
                variant="outlined"
                trailingArrow
                sx={{
                  "&&": {
                    borderRadius: 999,
                    bgcolor: "transparent",
                    color: "#FFFDF8",
                    borderColor: "rgba(255,253,248,0.8)",
                  },
                }}
              >
                Explore seva
              </AppButton>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap" }}>
              {assurances.map((item) => (
                <Stack key={item.label} direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                  <item.icon sx={{ fontSize: 18, color: "#FFB347" }} />
                  <Typography variant="caption" sx={{ fontWeight: 600, color: "#FFFDF8" }}>
                    {item.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
    </HeroBanner>
  );
}
