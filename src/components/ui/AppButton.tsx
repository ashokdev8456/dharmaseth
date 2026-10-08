"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircularProgress from "@mui/material/CircularProgress";
import Button, { type ButtonProps } from "@mui/material/Button";
import Link from "next/link";
import { motion } from "@/theme/motion";

type AppButtonProps = ButtonProps & {
  loading?: boolean;
  trailingArrow?: boolean;
};

export function AppButton({
  loading = false,
  disabled,
  children,
  startIcon,
  endIcon,
  href,
  trailingArrow = false,
  sx,
  ...props
}: AppButtonProps) {
  return (
    <Button
      {...props}
      {...(href ? { component: Link, href } : {})}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      startIcon={loading ? <CircularProgress color="inherit" size={16} /> : startIcon}
      endIcon={trailingArrow && !loading ? <ArrowForwardIcon aria-hidden sx={{ fontSize: 18 }} /> : endIcon}
      sx={[
        trailingArrow
          ? {
              "& .MuiButton-endIcon": {
                transition: `transform ${motion.duration.standard}ms ${motion.easing.standard}`,
              },
              "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
                "&:hover .MuiButton-endIcon": { transform: "translateX(4px)" },
              },
            }
          : {},
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Button>
  );
}
