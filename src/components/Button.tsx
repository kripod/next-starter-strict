import clsx from "clsx";
import * as React from "react";

export type ButtonOwnProps = {
	size?: "sm" | "md";
	intent?: "neutral" | "danger";
};

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
	ButtonOwnProps;

export const Button = React.forwardRef(function Button(
	{ size = "md", intent = "neutral", className, ...restProps }: ButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<button
			ref={ref}
			type="button"
			className={clsx(
				"inline-flex items-center font-semibold leading-tight rounded focus:outline-none transition-colors motion-reduce:transition-none focus-visible:ring-4",
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
				className,
			)}
			{...restProps}
		/>
	);
});
