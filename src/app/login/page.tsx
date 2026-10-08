import type { Metadata } from "next";
import { AuthForm } from "@/components/account/AuthForm";
import { pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";

const description = "Log in. A sign-in service is not connected, so this page does not sign anyone in.";

export const metadata: Metadata = pageMetadata({
  title: "Log in",
  description,
  path: routes.login,
  index: false,
});

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
