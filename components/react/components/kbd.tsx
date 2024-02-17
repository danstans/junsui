import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from '~/styled-system/jsx'
import { kbdRecipe } from '~/styled-system/recipes'

export const Kbd = styled(ark.kbd, kbdRecipe)
export interface KbdProps extends ComponentProps<typeof Kbd> {}
