"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { NotificationsProvider } from "@/components/ui/notifications";
import { theme } from "@/theme/theme";

type ThemeRegistryProps = {
  children: React.ReactNode;
};

export function ThemeRegistry({ children }: ThemeRegistryProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NotificationsProvider>{children}</NotificationsProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
