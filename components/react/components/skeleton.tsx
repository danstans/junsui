import { ark } from "@ark-ui/react/factory";
import { forwardRef, type ReactNode } from "react";
import { styled, type HTMLStyledProps } from "~/styled-system/jsx";
import { skeletonRecipe } from "~/styled-system/recipes";

const StyledSkeleton = styled(ark.div, skeletonRecipe);

export interface SkeletonProps extends HTMLStyledProps<"div"> {
  children?: ReactNode;
  /**
   *
   * @default false
   */
  isLoaded?: boolean;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const { isLoaded, ...rest } = props;

    if (isLoaded) {
      return <styled.div animation="fade-in" ref={ref} {...rest} />;
    }
    return <StyledSkeleton ref={ref} {...rest} />;
  }
);

Skeleton.displayName = "Skeleton";
