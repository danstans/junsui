import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from '../../styled-system/jsx'
import { button } from '../../styled-system/recipes'

const ArkButton = styled(ark.button, button)
export interface ButtonProps extends ComponentProps<typeof ArkButton> {}
