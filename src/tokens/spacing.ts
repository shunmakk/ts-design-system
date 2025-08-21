export const spacing = {
  sm: "4px",
  md: "8px",
  lg: "16px",
} as const;

export type SpacingKeys = keyof typeof spacing;
