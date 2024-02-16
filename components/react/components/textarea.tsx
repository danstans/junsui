import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { styled } from "~/styled-system/jsx";
import { textareaRecipe } from "~/styled-system/recipes";

export const Textarea = styled(ark.textarea, textareaRecipe);
export interface TextareaProps extends ComponentProps<typeof Textarea> {}
