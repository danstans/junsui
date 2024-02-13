import radixPreset, { type ColorRadixPresetOptions } from '@amandaguthrie/panda-preset-color-radix'
import createKyotoPreset from './kyoto'
import createTokyoPreset from './tokyo'

const radixPresetConfig: ColorRadixPresetOptions = {
  colors: '*',
  colorModeConditions: { default: 'dark', light: ['_light'], dark: ['_dark'] },
  semanticColorMap: { primary: { color: 'grass', default: 'dark' } },
}

type JunsuiThemeType = {
  theme: 'tokyo' | 'kyoto'
}

export const createJunsuiTheme = (options: JunsuiThemeType) => {
  if (options.theme === 'tokyo') {
    return createTokyoPreset()
  }
  return createKyotoPreset()
}
