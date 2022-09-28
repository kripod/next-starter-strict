import { clsx } from "clsx";
import * as React from "react";

import { Spinner } from "../Spinner";

export type ButtonOwnProps = {
  size?: "sm" | "md";
  equilateral?: boolean;
  loading?: boolean;
};

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  ButtonOwnProps;

export const Button = React.forwardRef(function Button(
  {
    size = "md",
    equilateral = false,
    loading = false,
    disabled = false,
    className,
    children,
    ...restProps
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
      className={clsx(
        "inline-grid items-center justify-items-center font-medium ring-offset-2 transition focus:outline-none focus-visible:ring dark:ring-offset-black",
        {
          [clsx("h-8 rounded-md text-sm leading-4", equilateral && "w-8")]:
            size === "sm",
          [clsx("h-12 rounded-lg text-base leading-5", equilateral && "w-12")]:
            size === "md",
        },
        disabled
          ? "cursor-not-allowed opacity-40"
          : loading && "cursor-wait opacity-70",
        className,
      )}
      {...restProps}
    >
      <span
        className={clsx(
          "col-start-1 row-start-1 inline-flex items-center",
          !equilateral && {
            "gap-x-1.5 px-3": size === "sm",
            "gap-x-2 px-5": size === "md",
          },
          loading && "invisible",
        )}
      >
        {children}
      </span>

      {loading ? (
        <span className="col-start-1 row-start-1">
          <Spinner size={size} />
        </span>
      ) : null}
    </button>
  );
});
