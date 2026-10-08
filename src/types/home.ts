export type HomeLink = {
  label: string;
  href: string;
};

export type FeaturedCause = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type ImpactStat = {
  id: string;
  value: number | string;
  suffix?: string;
  label: string;
  description?: string;
};

export type SevaIconName = "temple" | "learning" | "beings" | "service" | "meals" | "events";

export type SevaArea = {
  id: string;
  title: string;
  description: string;
  icon: SevaIconName;
  href?: string;
};

export type FeaturedStory = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: HomeLink;
};

export type TrustIconName = "purpose" | "contact" | "policies" | "plain";

export type TrustPoint = {
  id: string;
  title: string;
  description: string;
  icon: TrustIconName;
};
