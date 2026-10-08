export type FAQCategoryId = "general" | "campaigns" | "contributions" | "monthly-giving" | "payments";

export type FAQFilter = FAQCategoryId | "all";

export type FAQSegment = { type: "text"; text: string } | { type: "link"; text: string; href: string };

export type FAQItem = {
  id: string;
  question: string;
  answer: FAQSegment[];
  category: FAQCategoryId;
  keywords?: string[];
};

export type FAQCategory = {
  id: FAQFilter;
  label: string;
};
