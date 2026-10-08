import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contributionStepIds, type ContributionStepId } from "@/types/contribution";

const stepLabels: Record<ContributionStepId, string> = {
  amount: "Amount",
  details: "Details",
  review: "Review",
  payment: "Payment",
};

type ContributionStepsProps = {
  step: ContributionStepId;
  onSelect: (step: ContributionStepId) => void;
  label?: string;
};

export function ContributionSteps({ step, onSelect, label = "Contribution steps" }: ContributionStepsProps) {
  const stepIndex = contributionStepIds.indexOf(step);

  return (
    <Box
      component="ol"
      aria-label={label}
      sx={{
        display: { xs: "none", md: "flex" },
        flexWrap: "wrap",
        gap: 1,
        m: 0,
        p: 0,
        listStyle: "none",
      }}
    >
      {contributionStepIds.map((id, index) => {
        const current = index === stepIndex;
        const done = index < stepIndex;
        return (
          <Box component="li" key={id} aria-current={current ? "step" : undefined}>
            {done ? (
              <Button type="button" variant="text" color="inherit" onClick={() => onSelect(id)}>
                {index + 1}. {stepLabels[id]}
              </Button>
            ) : (
              <Typography
                variant="body2"
                component="span"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  px: 1,
                  fontWeight: current ? 600 : 400,
                  color: current ? "text.primary" : "text.secondary",
                }}
              >
                {index + 1}. {stepLabels[id]}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
