import { treeViewAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const treeViewRecipe = defineSlotRecipe({
  className: 'treeView',
  slots: treeViewAnatomy.keys(),
  base: {},
})
