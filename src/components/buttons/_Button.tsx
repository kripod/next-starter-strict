import clsx from "clsx";
import * as React from "react";
import type {
	PolymorphicForwardRefExoticComponent,
	PolymorphicPropsWithoutRef,
	PolymorphicPropsWithRef,
} from "react-polymorphic-types";

const ButtonDefaultElement = "button";

export type ButtonOwnProps = {
	size?: "sm" | "md";
	intent?: "neutral" | "danger";
};

export type ButtonProps<
	T extends React.ElementType = typeof ButtonDefaultElement
> = PolymorphicPropsWithRef<ButtonOwnProps, T>;

export const Button: PolymorphicForwardRefExoticComponent<
	ButtonOwnProps,
	typeof ButtonDefaultElement
> = React.forwardRef(function Button<
	T extends React.ElementType = typeof ButtonDefaultElement
>(
	{
		as,
		size = "md",
		intent = "neutral",
		className,
		...restProps
	}: PolymorphicPropsWithoutRef<ButtonOwnProps, T>,
	ref: React.ForwardedRef<React.ElementRef<T>>,
) {
	const Element: React.ElementType = as || ButtonDefaultElement;
	return (
		<Element
			ref={ref}
			type={Element === "button" ? "button" : undefined}
			className={clsx(
				"inline-flex items-center pb-0.5 text-center font-semibold leading-tight rounded focus:outline-none transition-colors motion-reduce:transition-none focus-visible:ring-4",
				{
					"h-7 text-sm": size === "sm",
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
