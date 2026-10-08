export const routes = {
  home: "/",
  about: "/about",
  explore: "/explore",
  monthly: "/monthly",
  faq: "/faq",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  cancellation: "/cancellation",
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
} as const;

export function campaignPath(slug: string) {
  return `/explore/${slug}`;
}

export function givePath(slug: string) {
  return `/explore/${slug}/give`;
}
