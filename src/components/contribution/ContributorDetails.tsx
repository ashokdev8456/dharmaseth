import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { contributionLimits } from "@/config/contribution";
import { routes } from "@/config/routes";
import type { ContributionFormData, ContributionFormErrors } from "@/types/contribution";

type ContributorDetailsProps = {
  data: ContributionFormData;
  errors: ContributionFormErrors;
  onChange: (patch: Partial<ContributionFormData>) => void;
  anonymousLabel?: string;
};

export function ContributorDetails({
  data,
  errors,
  onChange,
  anonymousLabel = "Keep my name off the public campaign page",
}: ContributorDetailsProps) {
  return (
    <Stack spacing={2.5}>
      <Typography variant="body2" color="text.secondary">
        These details stay in this browser until you leave or refresh. They are not sent to a server from this page.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Name, email, phone, and agreement are required. The note is optional.
      </Typography>
      <TextField
        id="contributor-name"
        name="name"
        label="Full name"
        required
        value={data.fullName}
        onChange={(event) => onChange({ fullName: event.target.value })}
        error={Boolean(errors.fullName)}
        helperText={errors.fullName}
        autoComplete="name"
        slotProps={{ htmlInput: { maxLength: contributionLimits.nameMaxLength } }}
      />
      <TextField
        id="contributor-email"
        name="email"
        type="email"
        label="Email address"
        required
        value={data.email}
        onChange={(event) => onChange({ email: event.target.value })}
        error={Boolean(errors.email)}
        helperText={errors.email}
        autoComplete="email"
        slotProps={{ htmlInput: { maxLength: 254, spellCheck: false } }}
      />
      <TextField
        id="contributor-phone"
        name="phone"
        type="tel"
        label="Phone number"
        required
        value={data.phone}
        onChange={(event) => onChange({ phone: event.target.value })}
        error={Boolean(errors.phone)}
        helperText={errors.phone ?? "A 10-digit Indian mobile number."}
        autoComplete="tel"
        slotProps={{ htmlInput: { inputMode: "tel" } }}
      />
      <TextField
        id="contribution-message"
        name="message"
        label="Note"
        value={data.message}
        onChange={(event) => onChange({ message: event.target.value })}
        error={Boolean(errors.message)}
        helperText={
          errors.message ??
          `Optional. ${data.message.length} / ${contributionLimits.messageMaxLength}`
        }
        multiline
        minRows={3}
        slotProps={{ htmlInput: { maxLength: contributionLimits.messageMaxLength } }}
      />
      <Stack spacing={1}>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
          <Checkbox
            checked={data.anonymous}
            onChange={(event) => onChange({ anonymous: event.target.checked })}
            slotProps={{
              input: { id: "contribution-anonymous", "aria-describedby": "contribution-anonymous-help" },
            }}
            sx={{ width: 44, height: 44 }}
          />
          <Box>
            <Typography component="label" htmlFor="contribution-anonymous" variant="body2">
              {anonymousLabel}
            </Typography>
            <FormHelperText id="contribution-anonymous-help" sx={{ mx: 0 }}>
              Your name is still used for this contribution. This page does not publish it.
            </FormHelperText>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
          <Checkbox
            checked={data.receiptRequested}
            onChange={(event) => onChange({ receiptRequested: event.target.checked })}
            slotProps={{
              input: { id: "contribution-receipt", "aria-describedby": "contribution-receipt-help" },
            }}
            sx={{ width: 44, height: 44 }}
          />
          <Box>
            <Typography component="label" htmlFor="contribution-receipt" variant="body2">
              I would like a contribution receipt
            </Typography>
            <FormHelperText id="contribution-receipt-help" sx={{ mx: 0 }}>
              Nothing is emailed from this page. This only records the request.
            </FormHelperText>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
          <Checkbox
            checked={data.consent}
            onChange={(event) => onChange({ consent: event.target.checked })}
            slotProps={{
              input: {
                id: "contribution-consent",
                required: true,
                "aria-invalid": Boolean(errors.consent) || undefined,
                "aria-describedby": errors.consent
                  ? "contribution-consent-help contribution-consent-error"
                  : "contribution-consent-help",
              },
            }}
            sx={{ width: 44, height: 44 }}
          />
          <Box>
            <Typography component="label" htmlFor="contribution-consent" variant="body2">
              I agree to the{" "}
              <Link component={NextLink} href={routes.terms}>
                terms
              </Link>{" "}
              and{" "}
              <Link component={NextLink} href={routes.privacy}>
                privacy policy
              </Link>
              .
            </Typography>
            <FormHelperText id="contribution-consent-help" sx={{ mx: 0 }}>
              Those pages are drafts for legal review. They are not an approved policy.
            </FormHelperText>
            {errors.consent ? (
              <FormHelperText id="contribution-consent-error" error sx={{ mx: 0 }}>
                {errors.consent}
              </FormHelperText>
            ) : null}
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
