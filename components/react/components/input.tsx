import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from '~/styled-system/jsx'
import { inputRecipe } from '~/styled-system/recipes'

export const Input = styled(ark.input, inputRecipe)
export interface InputProps extends ComponentProps<typeof Input> {}
