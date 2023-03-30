import { clsx } from "clsx";
import * as React from "react";

import { Button, type ButtonOwnProps } from "./_Button";

export type PrimaryButtonOwnProps = Pick<ButtonOwnProps, "size" | "loading"> & {
  sentiment?: "neutral" | "negative";
};

export type PrimaryButtonProps = React.ComponentPropsWithRef<"button"> &
  PrimaryButtonOwnProps;

export const PrimaryButton = React.forwardRef(function PrimaryButton(
  {
    sentiment = "neutral",
    disabled = false,
    loading = false,
    className,
    ...restProps
  }: PrimaryButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      loading={loading}
      disabled={disabled}
      className={clsx(
        "text-white dark:text-black",
        {
          [clsx(
            "bg-gray-900 ring-gray-900/75 dark:bg-gray-100 dark:ring-gray-100/75",
            !disabled && !loading && "hover:bg-gray-700 dark:hover:bg-gray-300",
          )]: sentiment === "neutral",
          [clsx(
            "bg-red-600 ring-red-600/75 dark:bg-red-400 dark:ring-red-400/75",
            !disabled && !loading && "hover:bg-red-500 dark:hover:bg-red-500",
          )]: sentiment === "negative",
        },
        className,
      )}
      {...restProps}
    />
  );
});
