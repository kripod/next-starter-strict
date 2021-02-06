import clsx from "clsx";
import * as React from "react";
import type {
	PolymorphicForwardRefExoticComponent,
	PolymorphicPropsWithoutRef,
	PolymorphicPropsWithRef,
} from "react-polymorphic-types";

export const ButtonDefaultElement = "button";

export type ButtonOwnProps = {
	intent?: "neutral" | "danger";
	size?: "md";
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
		intent = "neutral",
		size = "md",
		className,
		...restProps
	}: PolymorphicPropsWithoutRef<ButtonOwnProps, T>,
	ref: React.ForwardedRef<React.ElementRef<T>>,
) {
	const Element: React.ElementType = as || ButtonDefaultElement;
	return (
		<Element
			ref={ref}
			className={clsx(
				"font-semibold leading-tight rounded",
				{
					"text-white bg-black": intent === "neutral",
					"text-white bg-red-500": intent === "danger",
				},
				{
					"px-5 h-11": size === "md",
				},
				className,
			)}
			{...restProps}
		/>
	);
});
