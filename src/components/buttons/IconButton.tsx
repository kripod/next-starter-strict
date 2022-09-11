import { clsx } from "clsx";
import * as React from "react";

import { Button, ButtonOwnProps } from "./_Button";

export type IconButtonOwnProps = Pick<ButtonOwnProps, "size">;

export type IconButtonProps = React.ComponentPropsWithRef<"button"> &
  IconButtonOwnProps;

export const IconButton = React.forwardRef(function IconButton(
  { size = "md", disabled, className, children, ...restProps }: IconButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      size={size}
      equilateral
      disabled={disabled}
      className={clsx(
        !disabled
          ? "text-black ring-gray-400/75 hover:bg-gray-200 dark:text-white dark:ring-gray-500/75 dark:hover:bg-gray-800"
          : "text-gray-400 dark:text-gray-500",
        className,
      )}
      {...restProps}
    >
      <span
        className={clsx({
          "w-5": size === "sm",
          "w-6": size === "md",
        })}
      >
        {children}
      </span>
    </Button>
  );
});
