import { clsx } from "clsx";
import * as React from "react";

export type ButtonOwnProps = {
  size?: "sm" | "md";
  equilateral?: boolean;
};

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  ButtonOwnProps;

export const Button = React.forwardRef(function Button(
  { size = "md", equilateral, disabled, className, ...restProps }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center font-medium ring-offset-2 transition focus:outline-none focus-visible:ring dark:ring-offset-black",
        {
          [clsx(
            "h-8 gap-x-1.5 rounded-md text-sm leading-4",
            equilateral ? "w-8" : "px-3",
          )]: size === "sm",
          [clsx(
            "h-12 gap-x-2 rounded-lg text-base leading-5",
            equilateral ? "w-12" : "px-5",
          )]: size === "md",
        },
        disabled && "cursor-not-allowed",
        className,
      )}
      {...restProps}
    />
  );
});
