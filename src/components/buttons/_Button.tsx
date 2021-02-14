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
				"inline-flex items-center justify-center text-center font-medium leading-tight border focus:outline-none transition-colors motion-reduce:transition-none dark:ring-offset-black ring-offset-1 ring-opacity-50 dark:ring-opacity-50 focus-visible:ring",
				{
					[clsx(
						"text-sm",
						shape === "circle"
							? "h-9 w-9"
							: ["h-8", shape === "square" ? "w-8" : "px-3"],
					)]: size === "sm",
					[clsx(
						shape === "circle"
							? "h-12 w-12"
							: ["h-11", shape === "square" ? "w-11" : "px-4"],
					)]: size === "md",
				},
				{
					rounded: shape === "rectangle" || shape === "square",
					"rounded-full": shape === "pill" || shape === "circle",
				},
				{
					/* Ring colors match background colors of a `PrimaryButton` */
					"hover:bg-gray-700 dark:hover:bg-gray-300 ring-black dark:ring-gray-100":
						intent === "neutral",
					"hover:bg-red-400 dark:hover:bg-red-500 ring-red-500 dark:ring-red-400":
						intent === "danger",
				},
				className,
			)}
			{...restProps}
		/>
	);
});
