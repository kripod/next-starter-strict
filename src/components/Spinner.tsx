import { ArrowPathIcon as ArrowPathIconSm } from "@heroicons/react/20/solid";
import { ArrowPathIcon as ArrowPathIconMd } from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import * as React from "react";

import { useLiveRegionQueue } from "./LiveRegionQueueContext";

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
  const liveRegionQueue = useLiveRegionQueue();
  const removeLoadingCompleteRegion = React.useRef<() => void>();
  React.useEffect(() => {
    removeLoadingCompleteRegion.current?.();
    const removeLoadingRegion = liveRegionQueue.add("Loading…", {
      role: "status",
      "aria-live": "assertive",
    });
    return () => {
      removeLoadingRegion();
      removeLoadingCompleteRegion.current = liveRegionQueue.add(
        "Loading complete",
        {
          role: "status",
          "aria-live": "assertive",
        },
      );
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
