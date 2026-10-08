import type { NextConfig } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

if (!siteUrl) {
  console.warn(
    "NEXT_PUBLIC_SITE_URL is unset. Metadata, the sitemap, and robots.txt use http://localhost:3000. Set the public https origin before a public deployment.",
  );
}

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 only serves qualities in this list. 90 is the home banner.
    qualities: [75, 90],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // Browser source maps stay off. They are not needed to run the site and are not published.
  productionBrowserSourceMaps: false,
  // Public URLs have no trailing slash. Leave trailingSlash unset so `/explore` and `/explore/` are not both served.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
