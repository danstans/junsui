import { defineConfig } from '@pandacss/dev'
import { createJunsuiTheme } from '@junsui/themes'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [...createJunsuiTheme({ theme: 'tokyo' })],

  // Where to look for your css declarations
  include: ['./components/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],
  jsxFramework: 'solid',
  // The output directory for your css system
  outdir: 'styled-system',
})
