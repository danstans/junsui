import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from '~/styled-system/jsx'
import { badgeRecipe } from '~/styled-system/recipes'

export const Badge = styled(ark.div, badgeRecipe)
export interface BadgeProps extends ComponentProps<typeof Badge> {}
