import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

type FAQSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function FAQSearch({ value, onChange, onClear }: FAQSearchProps) {
  return (
    <TextField
      label="Search questions"
      placeholder="Campaigns, monthly giving, or payment"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon aria-hidden />
            </InputAdornment>
          ),
          endAdornment: value ? (
            <InputAdornment position="end">
              <IconButton aria-label="Clear search" edge="end" onClick={onClear}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
    />
  );
}
