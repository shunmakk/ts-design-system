export const colors = {
  primary: "#1E40AF",
  secondary: "#64748B",
  danger: "#DC2626",
  success: "#16A34A",
} as const;

export type ColorKeys = keyof typeof colors;
