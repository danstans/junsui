import { createKyotoPreset } from "./kyoto"
import radixPreset, { type ColorRadixPresetOptions } from '@amandaguthrie/panda-preset-color-radix';

const radixPresetConfig: ColorRadixPresetOptions = {
  colors: '*',
  colorModeConditions: { default: 'dark', light: ['_light'], dark: ['_dark'] },
  semanticColorMap: { primary: { color: 'grass', default: 'dark' } },
};


export const createJunsuiTheme = () => {


    return [radixPreset(radixPresetConfig), createKyotoPreset()];
}