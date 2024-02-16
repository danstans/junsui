import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { styled } from "~/styled-system/jsx";
import { iconButtonRecipe } from "~/styled-system/recipes";

export const IconButton = styled(ark.button, iconButtonRecipe);
export interface IconButtonProps extends ComponentProps<typeof IconButton> {}
