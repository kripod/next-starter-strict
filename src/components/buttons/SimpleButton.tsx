import { clsx } from "clsx";

export type SimpleButtonOwnProps = {
  loading?: string | boolean;
};

export type SimpleButtonProps = React.ComponentPropsWithoutRef<"button"> &
  SimpleButtonOwnProps;

export function SimpleButton({
  loading = false,
  disabled = false,
  children,
  ...restProps
}: SimpleButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || Boolean(loading)}
      {...restProps}
    >
      <span className={clsx(loading && "hidden")}>{children}</span>
      {loading ? (
        <span role="status">
          {typeof loading === "string" ? loading : "Loading…"}
        </span>
      ) : null}
    </button>
  );
}
