import { defineSemanticTokens } from '@pandacss/dev'
import type { BorderShadows, Colors, PresetOptions, Radius } from '../types'

export const createKyotoSemanticTokens = (options?: PresetOptions) => {
  return defineSemanticTokens({
    colors: {
      bg: {
        canvas: { value: '{colors.radix.gray.1}' },
        default: { value: { base: '{colors.radix.gray.1}', _dark: '{colors.radix.gray.2}' } },
        subtle: { value: { base: '{colors.radix.gray.2}', _dark: '{colors.radix.gray.3}' } },
        muted: { value: { base: '{colors.radix.gray.3}', _dark: '{colors.radix.gray.4}' } },
        emphasized: { value: { base: '{colors.radix.gray.4}', _dark: '{colors.radix.gray.5}' } },
        disabled: { value: { base: '{colors.radix.gray.3}', _dark: '{colors.radix.gray.4}' } },
      },
      fg: {
        default: { value: '{colors.radix.gray.12}' },
        muted: { value: '{colors.radix.gray.11}' },
        subtle: { value: '{colors.radix.gray.10}' },
        disabled: { value: '{colors.radix.gray.7}' },
      },
      border: {
        default: { value: '{colors.radix.gray.7}' },
        muted: { value: '{colors.radix.gray.6}' },
        subtle: { value: '{colors.radix.gray.4}' },
        disabled: { value: '{colors.radix.gray.5}' },
        outline: { value: '{colors.radix.gray.9}' },
      },
    },
  })
}
