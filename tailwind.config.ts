import type { Config } from "tailwindcss";
import { colors } from "./src/tokens/colors";
import { spacing } from "./src/tokens/spacing";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      spacing,
    },
  },
} satisfies Config;
