import type { Metadata } from "next";
import { AuthForm } from "@/components/account/AuthForm";
import { pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";

const description = "Request a password reset. A sign-in service is not connected, so no reset message is sent.";

export const metadata: Metadata = pageMetadata({
  title: "Forgot password",
  description,
  path: routes.forgotPassword,
  index: false,
});

export default function ForgotPasswordPage() {
  return <AuthForm mode="forgot" />;
}
