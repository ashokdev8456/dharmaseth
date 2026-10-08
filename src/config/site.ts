const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const siteConfig = {
  name: "DharmaSetHu Trust",
  description:
    "Dharmasethu is a place to read about seva and to review a gift for temples, teachers, living beings, and the people who serve them.",
  url: siteUrl,
  locale: "en_IN",
  contact: {
    // Replace before launch. This is a placeholder, not a live inbox.
    email: "hello@dharmasethu.org",
    hours: "Monday to Saturday, 10:00–18:00 IST",
  },
} as const;
