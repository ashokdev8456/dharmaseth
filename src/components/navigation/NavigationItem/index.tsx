"use client";

import Button from "@mui/material/Button";
import Link from "next/link";
import type { NavigationItem } from "@/config/navigation";
import { motion } from "@/theme/motion";

type NavigationLinkProps = {
  item: NavigationItem;
  pathname: string;
  onNavigate?: () => void;
  layout?: "row" | "drawer";
};

function isCurrent(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavigationLink({
  item,
  pathname,
  onNavigate,
  layout = "row",
}: NavigationLinkProps) {
  const current = isCurrent(pathname, item.href);

  return (
    <Button
      component={Link}
      href={item.href}
      color="inherit"
      aria-current={current ? "page" : undefined}
      onClick={onNavigate}
      sx={{
        minHeight: 44,
        px: 1.5,
        justifyContent: layout === "drawer" ? "flex-start" : "center",
        width: layout === "drawer" ? "100%" : "auto",
        position: "relative",
        color: current ? "primary.dark" : "text.primary",
        fontWeight: current ? 600 : 500,
        whiteSpace: "nowrap",
        transition: (theme) =>
          theme.transitions.create("color", {
            duration: theme.transitions.duration.shorter,
          }),
        "&::after": {
          content: '""',
          position: "absolute",
          left: 12,
          right: 12,
          bottom: 8,
          height: "1px",
          bgcolor: "primary.main",
          transform: current ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left center",
          transition: `transform ${motion.duration.standard}ms ${motion.easing.standard}`,
        },
        "&:hover": {
          color: "primary.dark",
          bgcolor: "transparent",
        },
        "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
          "&:hover::after": { transform: "scaleX(1)" },
        },
      }}
    >
      {item.label}
    </Button>
  );
}
