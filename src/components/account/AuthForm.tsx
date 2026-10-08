"use client";

import { useState, type FormEvent } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { AppButton } from "@/components/ui/AppButton";
import { routes } from "@/config/routes";

type AuthMode = "login" | "signup" | "forgot" | "reset";

const copy = {
  login: {
    eyebrow: "Account",
    title: "Log in",
    description: "Use the email and password for your account. A sign-in service is not connected on this page.",
    submit: "Log in",
  },
  signup: {
    eyebrow: "Account",
    title: "Sign up",
    description: "Create an account with your name, email, and a password. A sign-in service is not connected on this page.",
    submit: "Create account",
  },
  forgot: {
    eyebrow: "Account",
    title: "Forgot password",
    description: "Enter the email for your account. A reset message is not sent, because a sign-in service is not connected.",
    submit: "Send reset link",
  },
  reset: {
    eyebrow: "Account",
    title: "Reset password",
    description: "Choose a new password. This page does not change a saved password, because a sign-in service is not connected.",
    submit: "Reset password",
  },
} as const;

const notice =
  "A sign-in service is not connected. Nothing was saved, no one was signed in, and no reset message was sent.";

type Fields = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

const emptyFields: Fields = { name: "", email: "", password: "", confirm: "" };

function emailLooksValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function AuthForm({ mode }: { mode: AuthMode }) {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const page = copy[mode];

  function setField(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (mode === "signup" && fields.name.trim().length < 2) {
      next.name = "Enter your name.";
    }
    if (mode !== "reset") {
      if (!fields.email.trim()) next.email = "Enter your email.";
      else if (!emailLooksValid(fields.email.trim())) next.email = "Enter an email like name@example.com.";
    }
    if (mode !== "forgot") {
      if (fields.password.length < 8) next.password = "Use at least 8 characters.";
    }
    if (mode === "signup" || mode === "reset") {
      if (fields.confirm !== fields.password) next.confirm = "Enter the same password again.";
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  }

  return (
    <Section accent tone="subtle" sx={{ py: { xs: 3, md: 5 } }}>
      <PageContainer>
        <Box
          component="form"
          noValidate
          onSubmit={onSubmit}
          sx={{
            width: "100%",
            maxWidth: 480,
            mx: "auto",
            p: { xs: 2.5, sm: 4 },
            borderRadius: "28px",
            border: "1px solid",
            borderColor: "border.subtle",
            bgcolor: "background.paper",
            boxShadow: "0 18px 40px rgba(38, 33, 27, 0.08)",
          }}
        >
          <Stack spacing={2.25}>
            <Typography variant="overline" sx={{ color: "primary.dark", letterSpacing: "0.14em" }}>
              {page.eyebrow}
            </Typography>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: "2rem", md: "2.4rem" }, lineHeight: 1.15 }}>
              {page.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {page.description}
            </Typography>
            {mode === "signup" ? (
              <TextField
                label="Name"
                name="name"
                autoComplete="name"
                value={fields.name}
                onChange={(event) => setField("name", event.target.value)}
                error={Boolean(errors.name)}
                helperText={errors.name}
                fullWidth
                required
              />
            ) : null}
            {mode !== "reset" ? (
              <TextField
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={(event) => setField("email", event.target.value)}
                error={Boolean(errors.email)}
                helperText={errors.email}
                fullWidth
                required
              />
            ) : null}
            {mode !== "forgot" ? (
              <TextField
                label={mode === "reset" ? "New password" : "Password"}
                name="password"
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                value={fields.password}
                onChange={(event) => setField("password", event.target.value)}
                error={Boolean(errors.password)}
                helperText={errors.password ?? "At least 8 characters."}
                fullWidth
                required
              />
            ) : null}
            {mode === "signup" || mode === "reset" ? (
              <TextField
                label="Confirm password"
                name="confirm"
                type="password"
                autoComplete="new-password"
                value={fields.confirm}
                onChange={(event) => setField("confirm", event.target.value)}
                error={Boolean(errors.confirm)}
                helperText={errors.confirm}
                fullWidth
                required
              />
            ) : null}
            {submitted ? <Alert severity="info">{notice}</Alert> : null}
            <AppButton type="submit" variant="contained" sx={{ minHeight: 48, borderRadius: 999 }}>
              {page.submit}
            </AppButton>
            <AccountLinks mode={mode} />
          </Stack>
        </Box>
      </PageContainer>
    </Section>
  );
}

function AccountLinks({ mode }: { mode: AuthMode }) {
  return (
    <Stack spacing={1} sx={{ alignItems: "flex-start", "& a": { color: "primary.dark", fontWeight: 600 } }}>
      {mode === "login" ? (
        <Typography variant="body2">
          <Link href={routes.forgotPassword}>Forgot password</Link>
        </Typography>
      ) : null}
      {mode === "forgot" ? (
        <Typography variant="body2">
          <Link href={routes.resetPassword}>Reset password</Link>
        </Typography>
      ) : null}
      {mode === "login" ? (
        <Typography variant="body2">
          New here? <Link href={routes.signup}>Sign up</Link>
        </Typography>
      ) : (
        <Typography variant="body2">
          Already have an account? <Link href={routes.login}>Log in</Link>
        </Typography>
      )}
    </Stack>
  );
}
