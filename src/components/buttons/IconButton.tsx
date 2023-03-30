import { clsx } from "clsx";
import * as React from "react";

import { Button, type ButtonOwnProps } from "./_Button";

export type IconButtonOwnProps = Pick<ButtonOwnProps, "size">;

export type IconButtonProps = React.ComponentPropsWithRef<"button"> &
  IconButtonOwnProps;

export const IconButton = React.forwardRef(function IconButton(
  { size = "md", disabled = false, className, ...restProps }: IconButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      size={size}
      equilateral
      disabled={disabled}
      className={clsx(
        "text-black mix-blend-luminosity ring-gray-400/75 dark:text-white dark:ring-gray-500/75",
        !disabled && "hover:bg-gray-200 dark:hover:bg-gray-800",
        className,
      )}
      {...restProps}
    />
  );
});
