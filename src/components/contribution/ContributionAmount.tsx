import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { currency, contributionLimits, presetAmounts } from "@/config/contribution";
import { formatInr } from "@/utils/money";
import { matchingPreset } from "@/utils/contribution";

type ContributionAmountProps = {
  amount: string;
  error?: string;
  onAmountChange: (amount: string) => void;
  presets?: readonly number[];
  minimumAmount?: number;
  labelSuffix?: string;
  fieldLabel?: string;
  groupLabel?: string;
  wide?: boolean;
};

export function ContributionAmount({
  amount,
  error,
  onAmountChange,
  presets = presetAmounts,
  minimumAmount = contributionLimits.minimumAmount,
  labelSuffix = "",
  fieldLabel = "Enter an amount",
  groupLabel = "Preset amounts",
  wide = false,
}: ContributionAmountProps) {
  const selected = matchingPreset(amount, presets);

  return (
    <Box sx={{ display: "grid", gap: 2.5 }}>
      <FormControl component="fieldset" error={Boolean(error)} sx={{ m: 0, border: 0, p: 0, minWidth: 0 }}>
        <RadioGroup
          aria-label={groupLabel}
          name="contribution-preset"
          value={selected}
          onChange={(event) => onAmountChange(event.target.value)}
          sx={{
            display: "grid",
            gap: 1.5,
            gridTemplateColumns: wide
              ? { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, minmax(0, 1fr))", lg: "repeat(5, minmax(0, 1fr))" }
              : { xs: "1fr 1fr", sm: "repeat(3, minmax(0, 1fr))" },
          }}
        >
          {presets.map((preset) => {
            const value = String(preset);
            const checked = selected === value;
            return (
              <FormControlLabel
                key={preset}
                value={value}
                control={<Radio />}
                label={`${formatInr(preset)}${labelSuffix}`}
                sx={{
                  m: 0,
                  minWidth: 0,
                  minHeight: 48,
                  px: 1.5,
                  color: "#171717",
                  "& .MuiFormControlLabel-label": {
                    overflowWrap: "anywhere",
                    fontWeight: checked ? 700 : 500,
                  },
                  border: "1px solid",
                  borderRadius: 999,
                  borderColor: checked ? "#C46E00" : "border.default",
                  bgcolor: checked ? "primary.main" : "background.paper",
                  "&:focus-within": {
                    outline: "2px solid",
                    outlineColor: "primary.dark",
                    outlineOffset: 2,
                  },
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <TextField
        id="contribution-amount"
        name="amount"
        label={fieldLabel}
        value={amount}
        onChange={(event) => onAmountChange(event.target.value)}
        error={Boolean(error)}
        helperText={error ?? `At least ${formatInr(minimumAmount)}${labelSuffix ? " each month" : ""}.`}
        autoComplete="off"
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">{currency.symbol}</InputAdornment>,
          },
          htmlInput: {
            inputMode: "numeric",
            required: true,
            "aria-required": true,
          },
        }}
      />
    </Box>
  );
}
