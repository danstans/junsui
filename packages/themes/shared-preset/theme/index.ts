import type { PresetOptions } from '../../types'
import createSharedBreakpoints from './breakpoints'
import type { BreakpointsPresetOptions } from './breakpoints/types'
import keyframes from './keyframes'
import { recipes } from './recipes'
import createSharedSemanticTokens from './semantic-tokens'
import textStyles from './text-styles'
import createSharedTokens from './tokens'

type SharedThemeType = {
  breakpointOptions?: BreakpointsPresetOptions
  tokenOptions?: PresetOptions
}

const sharedTheme = (options?: SharedThemeType) => ({
  keyframes,
  textStyles,
  tokens: createSharedTokens(options?.tokenOptions ?? {}),
  semanticTokens: createSharedSemanticTokens(),
  breakpoints: createSharedBreakpoints(options?.breakpointOptions),
  recipes,
})

export default sharedTheme
