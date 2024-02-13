import { type BreakpointsPresetOptions, designSystemsArray } from './types'
import { systemBreakpoints } from './breakpoints'

const defaultOptions: Required<BreakpointsPresetOptions> = {
  system: 'chakra',
  extend: true,
}

const createSharedBreakpoints = (options?: BreakpointsPresetOptions): Record<string, string> => {
  const mergedOptions = Object.assign({}, defaultOptions, options)

  function isDesignSystem(s: string) {
    return designSystemsArray.includes(s)
  }

  const breakpoints =
    systemBreakpoints[
      isDesignSystem(mergedOptions.system) ? mergedOptions.system : defaultOptions.system
    ]

  return breakpoints
}

export default createSharedBreakpoints
