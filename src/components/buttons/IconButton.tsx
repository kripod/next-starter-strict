import { clsx } from "clsx";
import * as React from "react";

export type IconButtonOwnProps = {
  size?: "sm" | "md";
};

export type IconButtonProps = React.ComponentPropsWithRef<"button"> &
  IconButtonOwnProps;

export const IconButton = React.forwardRef(function IconButton(
  { size = "md", disabled, className, children, ...restProps }: IconButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center ring-offset-2 transition focus:outline-none focus-visible:ring dark:ring-offset-black",
        {
          "h-8 w-8 rounded-md": size === "sm",
          "h-12 w-12 rounded-lg": size === "md",
        },
        !disabled
          ? "text-black ring-gray-400/75 hover:bg-gray-300 dark:text-white dark:ring-gray-500/75 dark:hover:bg-gray-700"
          : "cursor-not-allowed text-gray-400 dark:text-gray-500",
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
    </button>
  );
});
