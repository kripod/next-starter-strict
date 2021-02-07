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
	shape?: "rectangle" | "pill" | "square" | "circle";
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
		shape = "rectangle",
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
				"inline-flex items-center justify-center text-center font-medium leading-tight border focus:outline-none transition-colors motion-reduce:transition-none dark:ring-offset-black ring-offset-1 focus-visible:ring",
				{
					[clsx(
						"text-sm",
						shape === "circle"
							? "h-8 w-8"
							: ["h-7", shape === "square" ? "w-7" : "px-3"],
					)]: size === "sm",
					[clsx(
						shape === "circle"
							? "h-12 w-12"
							: ["h-11", shape === "square" ? "w-11" : "px-5"],
					)]: size === "md",
				},
				{
					rounded: shape === "rectangle" || shape === "square",
					"rounded-full": shape === "pill" || shape === "circle",
				},
				{
					/* Ring colors match background colors of a hovered `PrimaryButton` */
					"ring-gray-700 dark:ring-gray-300": intent === "neutral",
					"ring-red-400": intent === "danger",
				},
				className,
			)}
			{...restProps}
		/>
	);
});
