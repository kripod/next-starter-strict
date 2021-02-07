import clsx from "clsx";
import * as React from "react";

export type ButtonOwnProps = {
	size?: "sm" | "md";
	intent?: "neutral" | "danger";
};

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
	ButtonOwnProps;

export function buttonClassNames({
	size = "md",
	intent = "neutral",
}: ButtonOwnProps = {}) {
	return clsx(
		"inline-flex items-center pb-0.5 text-center font-semibold leading-tight rounded focus:outline-none transition-colors motion-reduce:transition-none focus-visible:ring-4",
		{
			"h-8": size === "sm",
			"h-11": size === "md",
		},
		[
			"text-white dark:text-gray-900",
			{
				"ring-gray-400": intent === "neutral",
				"ring-red-300 dark:ring-red-700": intent === "danger",
			},
		],
	);
}

export const Button = React.forwardRef(function Button(
	{ className, ...restProps }: ButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<button
			ref={ref}
			type="button"
			className={clsx(buttonClassNames(restProps), className)}
			{...restProps}
		/>
	);
});
