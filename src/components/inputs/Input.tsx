import { ExclamationCircleIcon as ExclamationCircleIconSm } from "@heroicons/react/20/solid";
import { ExclamationCircleIcon as ExclamationCircleIconMd } from "@heroicons/react/24/solid";
import { clsx } from "clsx";

export type InputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "size"
> & {
  size?: "sm" | "md";
};

export function Input({
  size = "md",
  className,
  style,
  ...restProps
}: InputProps) {
  const ExclamationCircle =
    size === "sm" ? ExclamationCircleIconSm : ExclamationCircleIconMd;

  return (
    <span className={clsx("inline-grid", className)} style={style}>
      <input
        className={clsx(
          "peer col-start-1 row-start-1 appearance-none rounded-md bg-transparent ring-blue-500/50 ring-offset-1 transition-shadow placeholder:text-gray-600/80 invalid:ring-red-500/50 focus:outline-none focus:ring motion-reduce:transition-none dark:ring-blue-400/50 dark:ring-offset-black dark:placeholder:text-gray-400/80 dark:invalid:ring-red-400/50",
          {
            "h-8 px-2.5 text-sm invalid:pr-8": size === "sm",
            "h-11 px-3.5 invalid:pr-11": size === "md",
          },
        )}
        {...restProps}
      />
      <span
        className={clsx(
          "pointer-events-none col-start-1 row-start-1 rounded-md ring-1 ring-inset ring-gray-500 transition-shadow peer-invalid:ring-2 peer-invalid:ring-red-500 peer-focus:peer-valid:ring-blue-500 motion-reduce:transition-none dark:peer-invalid:ring-red-400 dark:peer-focus:peer-valid:ring-blue-400",
        )}
      />

      <ExclamationCircle
        aria-hidden
        className={clsx(
          "pointer-events-none invisible col-start-1 row-start-1 self-center justify-self-end text-red-500 peer-invalid:visible dark:text-red-400",
          {
            "h-5 px-2": size === "sm",
            "h-6 px-3": size === "md",
          },
        )}
      />
    </span>
  );
}
