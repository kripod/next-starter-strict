import { ArrowPathIcon as ArrowPathIconSm } from "@heroicons/react/20/solid";
import { ArrowPathIcon as ArrowPathIconMd } from "@heroicons/react/24/solid";
import { announce } from "@react-aria/live-announcer";
import { clsx } from "clsx";
import * as React from "react";

export type SpinnerProps = {
  size?: "sm" | "md";
};

const iconBySize: {
  [key in NonNullable<SpinnerProps["size"]>]: React.JSXElementConstructor<
    React.ComponentPropsWithRef<"svg">
  >;
} = {
  sm: ArrowPathIconSm,
  md: ArrowPathIconMd,
};

export function Spinner({ size = "md" }: SpinnerProps) {
  React.useEffect(() => {
    announce("Loading…", "assertive");
    return () => {
      announce("Loading complete", "assertive");
    };
  });

  const Icon = iconBySize[size];
  return (
    <Icon
      className={clsx("animate-spin motion-reduce:animate-none", {
        "h-5": size === "sm",
        "h-6": size === "md",
      })}
    />
  );
}
