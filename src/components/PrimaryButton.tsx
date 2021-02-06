import clsx from "clsx";
import * as React from "react";

export type PrimaryButtonOwnProps = {
	size?: "sm" | "md";
	intent?: "neutral" | "danger";
};

export type PrimaryButtonProps = React.ComponentPropsWithRef<"button"> &
	PrimaryButtonOwnProps;

export const PrimaryButton = React.forwardRef(function PrimaryButton(
	{
		size = "md",
		intent = "neutral",
		className,
		...restProps
	}: PrimaryButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<button
			ref={ref}
			type="button"
			className={clsx(
				"font-semibold leading-tight rounded focus:outline-none transition-colors motion-reduce:transition-none focus-visible:ring-4",
				{
					"px-2.5 h-8": size === "sm",
					"px-5 h-11": size === "md",
				},
				[
					"text-white dark:text-gray-900",
					{
						"bg-black hover:bg-gray-700 dark:bg-gray-50 dark:hover:bg-gray-300 ring-gray-400":
							intent === "neutral",
						"bg-red-500 hover:bg-red-400 dark:bg-red-400 dark:hover:bg-red-500 ring-red-300 dark:ring-red-700":
							intent === "danger",
					},
				],
				className,
			)}
			{...restProps}
		/>
	);
});
