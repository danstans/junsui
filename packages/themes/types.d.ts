export interface PresetOptions {
    /**
     * @default 'neutral'
     */
    accentColor?: AccentColor;
    /**
     * @default 'neutral'
     */
    grayColor?: GrayColor;
    /**
     * @default 'sm'
     */
    borderRadius?: BorderRadius;
    /**
     * Defines additional colors to be included in the preset. Use '*' to include all colors.
     * By default, only the gray and accent colors are included.
     * @default [] - This means no additional colors are included unless specified.
     */
    additionalColors?: Color[] | (string[] & {});
}
export type Color = AccentColor | GrayColor;
export type BorderRadius = (typeof borderRadii)[number];
export declare const borderRadii: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl"];
declare const borderRadiusL: string[];
export type AccentColor = (typeof accentColors)[number];
export declare const accentColors: readonly ["neutral", "tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "bronze", "gold", "brown", "orange", "amber", "yellow", "lime", "mint", "sky"];
export type GrayColor = (typeof grayColors)[number];
export declare const grayColors: readonly ["neutral", "mauve", "olive", "sage", "sand", "slate"];
export type BorderShadow = (typeof borderShadows)[number];
export declare const borderShadows: string[];
export type Colors = Record<AccentColor | GrayColor, any>;
export type BorderShadows = Record<BorderShadow, {
    value: {
        base: string;
        _dark: string;
    };
}>;
export type Radius = Record<(typeof borderRadiusL)[number], {
    value: string;
}>;
export {};
