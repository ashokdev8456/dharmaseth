import type { Metadata } from "next";
import { AuthForm } from "@/components/account/AuthForm";
import { pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";

const description = "Choose a new password. A sign-in service is not connected, so no saved password is changed.";

export const metadata: Metadata = pageMetadata({
  title: "Reset password",
  description,
  path: routes.resetPassword,
  index: false,
});

export default function ResetPasswordPage() {
  return <AuthForm mode="reset" />;
}
