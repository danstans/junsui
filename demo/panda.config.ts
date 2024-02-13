import { defineConfig } from '@pandacss/dev'
import { createJunsuiTheme } from '../packages/themes'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [...createJunsuiTheme({ theme: 'kyoto' })],

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],


  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outExtension: 'js',
  outdir: 'styled-system',
  jsxFramework: 'react',
})
