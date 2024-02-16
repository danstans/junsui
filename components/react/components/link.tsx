import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { styled } from "~/styled-system/jsx";
import { linkRecipe } from "~/styled-system/recipes";

export const Link = styled(ark.a, linkRecipe);
export interface LinkProps extends ComponentProps<typeof Link> {}
