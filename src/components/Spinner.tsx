import { ArrowPathIcon as ArrowPathIconSm } from "@heroicons/react/20/solid";
import { ArrowPathIcon as ArrowPathIconMd } from "@heroicons/react/24/solid";
import { clsx } from "clsx";

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
  const Icon = iconBySize[size];
  return (
    <span role="status" aria-live="assertive">
      <Icon
        className={clsx(
          "inline-block animate-spin motion-reduce:animate-none",
          {
            "h-5": size === "sm",
            "h-6": size === "md",
          },
        )}
      />
      <span className="sr-only">Loading…</span>
    </span>
  );
}
