import { defineConfig } from "@pandacss/dev";
import { createKyotoPreset } from "./packages/themes/kyoto";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [createKyotoPreset()],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outExtension: 'js',
  outdir: "styled-system",
  jsxFramework: 'react'
});
