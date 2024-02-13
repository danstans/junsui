export interface PresetOptions {
  /**
   * @default 'neutral'
   */
  accentColor?: AccentColor
  /**
   * @default 'neutral'
   */
  grayColor?: GrayColor
  /**
   * @default 'sm'
   */
  borderRadius?: BorderRadius
  /**
   * Defines additional colors to be included in the preset. Use '*' to include all colors.
   * By default, only the gray and accent colors are included.
   * @default [] - This means no additional colors are included unless specified.
   */
  additionalColors?: Color[] | (string[] & {})
}

export type Color = AccentColor | GrayColor

export type BorderRadius = (typeof borderRadii)[number]
export const borderRadii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
const borderRadiusL = ['l1', 'l2', 'l3']

export type AccentColor = (typeof accentColors)[number]
export const accentColors = [
  'neutral',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
] as const

export type GrayColor = (typeof grayColors)[number]
export const grayColors = ['neutral', 'mauve', 'olive', 'sage', 'sand', 'slate'] as const

export type BorderShadow = (typeof borderShadows)[number]
export const borderShadows = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

// Fix this type
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type Colors = Record<AccentColor | GrayColor, any>
export type BorderShadows = Record<BorderShadow, { value: { base: string; _dark: string } }>
export type Radius = Record<(typeof borderRadiusL)[number], { value: string }>
