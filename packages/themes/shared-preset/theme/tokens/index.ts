import { defineTokens } from '@pandacss/dev'
import { animations } from './animations'
import { blurs } from './blurs'
import { borders } from './borders'
import { durations } from './durations'
import { easings } from './easings'
import { radii } from './radii'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography'
import { zIndex } from './z-index'
import type { PresetOptions } from '../../../../types'

const createSharedTokens = (options: PresetOptions) => {
  return defineTokens({
    animations,
    blurs,
    borders,
    durations,
    easings,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
    sizes,
    spacing,
    zIndex,
  })
}

export default createSharedTokens
