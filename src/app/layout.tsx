import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Box from "@mui/material/Box";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MainContent } from "@/components/layout/MainContent";
import { SkipLink } from "@/components/layout/SkipLink";
import { SiteMotion } from "@/components/motion/SiteMotion";
import { JsonLd } from "@/components/seo/JsonLd";
import { websiteJsonLd } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { ThemeRegistry } from "@/theme/ThemeRegistry";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <ThemeRegistry>
          <JsonLd data={websiteJsonLd()} />
          <SiteMotion />
          <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <SkipLink />
            <Header />
            <MainContent>{children}</MainContent>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
