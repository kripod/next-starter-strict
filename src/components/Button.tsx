import clsx from "clsx";
import * as React from "react";

export type ButtonOwnProps = {
	intent?: "neutral" | "danger";
	size?: "sm" | "md";
};

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
	ButtonOwnProps;

export const Button = React.forwardRef(function Button(
	{ intent = "neutral", size = "md", className, ...restProps }: ButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<button
			ref={ref}
			type="button"
			className={clsx(
				"font-semibold leading-tight rounded focus:outline-none focus-visible:ring-4",
				[
					"text-white dark:text-black",
					{
						"bg-black dark:bg-gray-50 ring-gray-400": intent === "neutral",
						"bg-red-500 dark:bg-red-400 ring-red-300": intent === "danger",
					},
				],
				{
					"px-2.5 h-8": size === "sm",
					"px-5 h-11": size === "md",
				},
				className,
			)}
			{...restProps}
		/>
	);
});
