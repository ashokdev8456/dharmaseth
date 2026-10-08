import type { Metadata } from "next";
import { AuthForm } from "@/components/account/AuthForm";
import { pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";

const description = "Sign up. A sign-in service is not connected, so this page does not create an account.";

export const metadata: Metadata = pageMetadata({
  title: "Sign up",
  description,
  path: routes.signup,
  index: false,
});

export default function SignupPage() {
  return <AuthForm mode="signup" />;
}
