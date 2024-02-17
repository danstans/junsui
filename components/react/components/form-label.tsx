import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from '~/styled-system/jsx'
import { formLabelRecipe } from '~/styled-system/recipes'

export const FormLabel = styled(ark.label, formLabelRecipe)
export interface FormLabelProps extends ComponentProps<typeof FormLabel> {}
