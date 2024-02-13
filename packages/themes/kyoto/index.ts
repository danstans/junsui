import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import type { PresetOptions, Radius } from '../utils/types'
import { createKyotoSemanticTokens } from './createKyotoSemanticTokens'
import { sharedTheme } from '../utils/shared-preset/theme';
import { conditions } from '../utils/shared-preset/conditions';


const defaultOptions: PresetOptions = {
  accentColor: 'neutral',
  additionalColors: [],
  borderRadius: 'sm',
  grayColor: 'neutral',
}

const createKyotoPreset = (options: PresetOptions = defaultOptions): Preset => {
    const kyotoSemanticTokens = createKyotoSemanticTokens()
        
    return definePreset({
      theme: {
        extend: {
          ...sharedTheme({breakpointOptions: {system: 'chakra'}, tokenOptions: options}),
          semanticTokens: kyotoSemanticTokens
        },
      },
      conditions,
    })
  }
  
  const kyotoPreset = createKyotoPreset()
  
  export { createKyotoPreset, kyotoPreset as default }