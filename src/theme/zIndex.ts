/** Stacking order for the shell. Use these instead of raw z-index values. */
export const zIndex = {
  content: 1,
  header: 1100,
  dropdown: 1150,
  drawer: 1200,
  modal: 1300,
  notification: 1400,
  tooltip: 1500,
} as const;
