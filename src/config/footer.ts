import { legalNavigation } from "@/config/navigation";
import { routes } from "@/config/routes";
import type { NavigationItem } from "@/config/navigation";

export const footerBrand = {
  statement: "A place to read about seva and to review a gift for temples, teachers, living beings, and those who serve.",
  contactNote: "Write to us during the hours below.",
} as const;

export const footerExplore: NavigationItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Explore", href: routes.explore },
  { label: "FAQs", href: routes.faq },
];

export const footerGiving: NavigationItem[] = [
  { label: "Explore seva", href: routes.explore },
  { label: "Monthly giving", href: routes.monthly },
];

export const footerHelp: NavigationItem[] = [
  { label: "FAQs", href: routes.faq },
  { label: "Contact", href: routes.contact },
];

export const footerLegal = legalNavigation;
