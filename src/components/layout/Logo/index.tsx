import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

type LogoProps = {
  size?: "default" | "small";
};

const logoSrc = "/images/brand/dharmasethu-trust-logo.svg";

export function Logo({ size = "default" }: LogoProps) {
  const height = size === "small" ? 40 : 56;

  return (
    <Box
      sx={{
        flexShrink: 0,
        "& > a": {
          display: "inline-flex",
          alignItems: "center",
          minHeight: 44,
          px: 0.5,
          py: 0.5,
          borderRadius: 1,
          color: "inherit",
          textDecoration: "none",
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.dark",
            outlineOffset: 3,
          },
        },
      }}
    >
      <Link href={routes.home} aria-label={`${siteConfig.name}, home`}>
        <Image
          src={logoSrc}
          alt=""
          width={753}
          height={444}
          unoptimized
          style={{ height, width: "auto", display: "block" }}
        />
      </Link>
    </Box>
  );
}