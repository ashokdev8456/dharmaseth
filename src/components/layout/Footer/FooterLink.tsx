import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import { motion } from "@/theme/motion";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

const linkSx = {
  alignSelf: "flex-start",
  minHeight: 44,
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  textDecoration: "underline",
  textUnderlineOffset: "0.2em",
  transition: `text-decoration-color ${motion.duration.fast}ms ${motion.easing.standard}`,
  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "currentColor",
    outlineOffset: 3,
  },
} as const;

export function FooterLink({ href, children }: FooterLinkProps) {
  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <Box component="a" href={href} sx={linkSx}>
        {children}
      </Box>
    );
  }

  return (
    <Box sx={{ alignSelf: "flex-start", "& > a": linkSx }}>
      <Link href={href}>{children}</Link>
    </Box>
  );
}
