import { defineRecipe } from '@pandacss/dev'
import deepmerge from 'deepmerge'
import { buttonRecipe } from './button'

export const iconButtonRecipe = deepmerge(
  buttonRecipe,
  defineRecipe({
    className: 'iconButton',
    variants: {
      size: {
        xs: {
          px: '0',
        },
        sm: {
          px: '0',
        },
        md: {
          px: '0',
        },
        lg: {
          px: '0',
        },
        xl: {
          px: '0',
        },
        '2xl': {
          px: '0',
        },
      },
    },
  }),
)
