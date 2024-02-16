import { paginationAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const paginationRecipe = defineSlotRecipe({
  className: 'pagination',
  slots: paginationAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      gap: '2.5',
    },
    item: {
      fontVariantNumeric: 'tabular-nums',
    },
    ellipsis: {
      alignItems: 'center',
      color: 'fg.default',
      display: 'inline-flex',
      fontWeight: 'semibold',
      px: '2',
    },
  },
})
