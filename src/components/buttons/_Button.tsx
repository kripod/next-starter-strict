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
        "inline-grid place-items-center font-medium ring-offset-2 transition focus:outline-none focus-visible:ring dark:ring-offset-black",
        {
          [clsx("h-7 rounded-md text-sm leading-3", equilateral && "w-7")]:
            size === "sm",
          [clsx("h-9 rounded-lg leading-4", equilateral && "w-9")]:
            size === "md",
        },
        disabled
          ? "cursor-not-allowed opacity-40"
          : loading && "cursor-wait opacity-80",
        className,
      )}
      {...restProps}
    >
      <span
        className={clsx(
          "col-start-1 row-start-1 inline-flex items-center",
          !equilateral && {
            "gap-x-1 px-3": size === "sm",
            "gap-x-1.5 px-4": size === "md",
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
