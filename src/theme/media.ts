export const mediaRatio = {
  hero: "16 / 9",
  campaign: "3 / 2",
  card: "4 / 3",
  avatar: "1 / 1",
} as const;

export type MediaRatio = keyof typeof mediaRatio;
