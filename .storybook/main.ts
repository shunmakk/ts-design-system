import { mergeConfig } from "vite";
import tailwind from "@tailwindcss/vite";

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  async viteFinal(configBase) {
    return mergeConfig(configBase, {
      plugins: [tailwind()],
    });
  },
};

export default config;
