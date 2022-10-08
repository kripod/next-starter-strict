import { ArrowPathIcon as ArrowPathIconSm } from "@heroicons/react/20/solid";
import { ArrowPathIcon as ArrowPathIconMd } from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import * as React from "react";

export type SpinnerProps = {
  size?: "sm" | "md" | "lg";
};

const iconBySize: {
  [key in NonNullable<SpinnerProps["size"]>]: React.ComponentType<
    React.ComponentPropsWithRef<"svg">
  >;
} = {
  sm: ArrowPathIconSm,
  md: ArrowPathIconSm,
  lg: ArrowPathIconMd,
};

export function Spinner({ size = "md" }: SpinnerProps) {
  const Icon = iconBySize[size];
  return (
    <Icon
      className={clsx("animate-spin motion-reduce:animate-none", {
        "h-4": size === "sm",
        "h-5": size === "md",
        "h-6": size === "lg",
      })}
    />
  );
}
