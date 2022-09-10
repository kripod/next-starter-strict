import { clsx } from "clsx";
import * as React from "react";

export type PrimaryButtonOwnProps = {
  size?: "sm" | "md";
  sentiment?: "neutral" | "negative";
};

export type PrimaryButtonProps = React.ComponentPropsWithRef<"button"> &
  PrimaryButtonOwnProps;

export const PrimaryButton = React.forwardRef(function PrimaryButton(
  {
    size = "md",
    sentiment = "neutral",
    className,
    ...restProps
  }: PrimaryButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={clsx(
        "font-medium leading-tight text-white ring-offset-2 transition focus:outline-none focus-visible:ring dark:text-black dark:ring-offset-black",
        {
          "h-8 rounded-md px-3 text-sm": size === "sm",
          "h-12 rounded-lg px-5 text-base": size === "md",
        },
        {
          "bg-gray-900 ring-gray-900/75 hover:bg-gray-700 dark:bg-gray-100 dark:ring-gray-100/75 dark:hover:bg-gray-300":
            sentiment === "neutral",
          "bg-red-600 ring-red-600/75 hover:bg-red-500 dark:bg-red-400 dark:ring-red-400/75 dark:hover:bg-red-500":
            sentiment === "negative",
        },
        className,
      )}
      {...restProps}
    />
  );
});