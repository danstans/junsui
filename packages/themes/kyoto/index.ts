import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import type { PresetOptions, Radius } from '../types'
import { createSemanticTokens } from '../utils/createSemanticTokens'
import {colors} from './colors';
import { shadows } from './shadows';
import { createTokens } from './tokens';
import { breakpoints } from './breakpoints';
import { keyframes } from './keyframes';
import { recipes } from './recipes';
import { textStyles } from './text-styles';
import { conditions } from './conditions';
import { globalCss } from './global-css';

const defaultOptions: PresetOptions = {
  accentColor: 'neutral',
  additionalColors: [],
  borderRadius: 'sm',
  grayColor: 'neutral',
}

const createKyotoPreset = (options: PresetOptions = defaultOptions): Preset => {
    const semanticTokens = createSemanticTokens(options, colors, shadows);
    const tokens = createTokens(options)
  
    return definePreset({
      theme: {
        extend: {
          breakpoints,
          keyframes,
          recipes,
          semanticTokens,
          textStyles,
          tokens,
        },
      },
      conditions,
      globalCss,
    })
  }
  
  const kyotoPreset = createKyotoPreset()
  
  export { createKyotoPreset, kyotoPreset as default }