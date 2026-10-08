import { routes } from "@/config/routes";

export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export const mainNavigation: NavigationItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Explore", href: routes.explore },
  { label: "Monthly giving", href: routes.monthly },
  { label: "FAQs", href: routes.faq },
  { label: "Contact", href: routes.contact },
];

export const legalNavigation: NavigationItem[] = [
  { label: "Privacy", href: routes.privacy },
  { label: "Terms", href: routes.terms },
  { label: "Cancellation", href: routes.cancellation },
];

export const headerAction = {
  label: "Log in",
  href: routes.login,
} as const;
