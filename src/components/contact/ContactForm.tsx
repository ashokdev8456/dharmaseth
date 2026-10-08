"use client";

import { useState, type FormEvent } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { AppButton } from "@/components/ui/AppButton";
import { siteConfig } from "@/config/site";

const placeholderPhone = "+91 00000 00000";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim().length < 2 || !email.includes("@") || message.trim().length < 8) {
      setError("Add a name, an email, and a short message.");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <Section accent tone="subtle" aria-labelledby="contact-heading" sx={{ py: { xs: 3, md: 5 } }}>
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.8fr) minmax(0, 1.2fr)" },
          }}
        >
          <Stack spacing={2} sx={{ justifyContent: "center" }}>
            <Typography variant="overline" sx={{ color: "primary.dark" }}>
              Contact
            </Typography>
            <Typography id="contact-heading" variant="h1" component="h1" sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>
              Write to us
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This form does not send a message. The address and number below are printed placeholders.
            </Typography>
            <Stack spacing={0.5} sx={{ p: 2, borderRadius: "18px", bgcolor: "background.paper", border: "1px solid", borderColor: "border.subtle" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {siteConfig.contact.email}
              </Typography>
              <Typography variant="body2">{placeholderPhone}</Typography>
              <Typography variant="body2" color="text.secondary">
                {siteConfig.contact.hours}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                The phone number is not a live line.
              </Typography>
            </Stack>
          </Stack>
          <Box
            component="form"
            noValidate
            onSubmit={onSubmit}
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRadius: "24px",
              border: "1px solid",
              borderColor: "border.subtle",
              bgcolor: "background.paper",
            }}
          >
            <Stack spacing={2}>
              <TextField label="Name" name="name" value={name} onChange={(event) => setName(event.target.value)} fullWidth required />
              <TextField label="Email" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} fullWidth required />
              <TextField label="Message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} fullWidth required multiline minRows={4} />
              {error ? <Alert severity="warning">{error}</Alert> : null}
              {submitted ? (
                <Alert severity="info">Nothing was sent. A contact service is not connected on this page.</Alert>
              ) : null}
              <AppButton type="submit" variant="contained" sx={{ minHeight: 48, borderRadius: 999, width: { xs: "100%", sm: "auto" } }}>
                Review message
              </AppButton>
            </Stack>
          </Box>
        </Box>
      </PageContainer>
    </Section>
  );
}
