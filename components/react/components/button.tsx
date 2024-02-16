import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from '~/styled-system///jsx'
import { buttonRecipe } from '~/styled-system///recipes'

export const Button = styled(ark.button, buttonRecipe)
export interface ButtonProps extends ComponentProps<typeof Button> {}
