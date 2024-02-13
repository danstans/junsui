import type { BorderShadows, Colors, PresetOptions } from '../types';
export declare const createSemanticTokens: (options: PresetOptions, colors: Colors, shadows: BorderShadows) => {
    colors: {
        gray: any;
        accent: any;
        bg: {
            canvas: {
                value: string;
            };
            default: {
                value: {
                    base: string;
                    _dark: string;
                };
            };
            subtle: {
                value: {
                    base: string;
                    _dark: string;
                };
            };
            muted: {
                value: {
                    base: string;
                    _dark: string;
                };
            };
            emphasized: {
                value: {
                    base: string;
                    _dark: string;
                };
            };
            disabled: {
                value: {
                    base: string;
                    _dark: string;
                };
            };
        };
        fg: {
            default: {
                value: string;
            };
            muted: {
                value: string;
            };
            subtle: {
                value: string;
            };
            disabled: {
                value: string;
            };
        };
        border: {
            default: {
                value: string;
            };
            muted: {
                value: string;
            };
            subtle: {
                value: string;
            };
            disabled: {
                value: string;
            };
            outline: {
                value: string;
            };
        };
    };
    shadows: BorderShadows;
};
