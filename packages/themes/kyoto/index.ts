import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { createKyotoSemanticTokens } from './createKyotoSemanticTokens'
import radixPreset, { type ColorRadixPresetOptions } from '@amandaguthrie/panda-preset-color-radix'
import type { PresetOptions } from '../types'
import { conditions, sharedTheme } from '../shared-preset'

const defaultOptions: PresetOptions = {
  accentColor: 'neutral',
  additionalColors: [],
  borderRadius: 'sm',
  grayColor: 'neutral',
}

const radixPresetConfig: ColorRadixPresetOptions = {
  colors: '*',
  colorModeConditions: { default: 'dark', light: ['_light'], dark: ['_dark'] },
  semanticColorMap: { primary: { color: 'grass', default: 'dark' } },
}

const createKyotoPreset = (options: PresetOptions = defaultOptions): Preset[] => {
  const semanticTokens = createKyotoSemanticTokens()
  const kyotoPreset = definePreset({
    theme: {
      extend: {
        ...sharedTheme({ breakpointOptions: { system: 'chakra' }, tokenOptions: options }),
        semanticTokens,
      },
    },
    conditions,
  })

  return [radixPreset(radixPresetConfig), kyotoPreset]
}

export default createKyotoPreset
