import {
  PinInput as ArkPinInput,
  type PinInputRootProps,
} from "@ark-ui/react/pin-input";
import { forwardRef, type ReactNode } from "react";
import { css, cx } from "~/styled-system/css";
import { splitCssProps } from "~/styled-system/jsx";
import {
  pinInputRecipe,
  type PinInputRecipeVariantProps,
} from "~/styled-system/recipes";
import type { Assign, JsxStyleProps } from "~/styled-system/types";
import { Input } from "~/components/input";

export interface PinInputProps
  extends Assign<JsxStyleProps, PinInputRootProps>,
    PinInputRecipeVariantProps {
  children?: ReactNode;
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number;
}

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>(
  (props, ref) => {
    const [variantProps, pinInputProps] =
      pinInputRecipe.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(pinInputProps);
    const { children, className, length = 4, ...rootProps } = localProps;
    const styles = pinInputRecipe(variantProps);

    return (
      <ArkPinInput.Root
        ref={ref}
        // @ts-expect-error TODO cssProps is to complex to be typed
        className={cx(styles.root, css(cssProps), className)}
        {...rootProps}
      >
        {children && (
          <ArkPinInput.Label className={styles.label}>
            {children}
          </ArkPinInput.Label>
        )}
        <ArkPinInput.Control className={styles.control}>
          {Array.from({ length }, (_, index) => index).map((id, index) => (
            <ArkPinInput.Input
              className={styles.input}
              key={id}
              index={index}
              asChild
            >
              <Input size={variantProps.size} />
            </ArkPinInput.Input>
          ))}
        </ArkPinInput.Control>
      </ArkPinInput.Root>
    );
  }
);

PinInput.displayName = "PinInput";
