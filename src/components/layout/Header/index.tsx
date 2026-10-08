"use client";

import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageContainer } from "@/components/common/PageContainer";
import { Logo } from "@/components/layout/Logo";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { headerAction } from "@/config/navigation";

export function Header() {
  const pathname = usePathname();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [elevated, setElevated] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuOpen = openPath === pathname;

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setElevated(!entry.isIntersecting);
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Box ref={sentinelRef} aria-hidden sx={{ height: 1, mb: "-1px" }} />
      <AppBar
        position="fixed"
        component="header"
        sx={{
          bgcolor: "background.default",
          borderBottom: 1,
          borderColor: elevated ? "border.subtle" : "transparent",
          boxShadow: elevated ? 1 : "none",
          transition: (theme) =>
            theme.transitions.create(["background-color", "box-shadow", "border-color", "backdrop-filter"], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeOut,
            }),
        }}
      >
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, lg: 72 } }}>
          <PageContainer
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, lg: 4 },
              width: "100%",
            }}
          >
            <Logo />
            <DesktopNavigation pathname={pathname} />
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", ml: { xs: "auto", lg: 0 } }}>
              <Button
                component={Link}
                href={headerAction.href}
                variant="contained"
                sx={{ display: { xs: "none", sm: "inline-flex" }, flexShrink: 0, whiteSpace: "nowrap" }}
              >
                {headerAction.label}
              </Button>
              <IconButton
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-controls={menuOpen ? "mobile-navigation" : undefined}
                aria-expanded={menuOpen}
                onClick={() => setOpenPath(pathname)}
                sx={{ display: { lg: "none" }, width: 44, height: 44 }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </PageContainer>
        </Toolbar>
      </AppBar>
      <Box aria-hidden sx={{ height: { xs: 64, lg: 72 } }} />
      <MobileNavigation open={menuOpen} pathname={pathname} onClose={() => setOpenPath(null)} />
    </>
  );
}
