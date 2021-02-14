/*
 * Sources:
 * - https://webaim.org/temp/1-4-11examples.htm
 */

import clsx from "clsx";
import * as React from "react";
import type {
	PolymorphicForwardRefExoticComponent,
	PolymorphicPropsWithoutRef,
	PolymorphicPropsWithRef,
} from "react-polymorphic-types";

import { Button, ButtonOwnProps } from "./_Button";

const SecondaryButtonDefaultElement = "button";

export type SecondaryButtonOwnProps = ButtonOwnProps & {
	outline?: boolean;
};

export type SecondaryButtonProps<
	T extends React.ElementType = typeof SecondaryButtonDefaultElement
> = PolymorphicPropsWithRef<SecondaryButtonOwnProps, T>;

export const SecondaryButton: PolymorphicForwardRefExoticComponent<
	SecondaryButtonOwnProps,
	typeof SecondaryButtonDefaultElement
> = React.forwardRef(function SecondaryButton<
	T extends React.ElementType = typeof SecondaryButtonDefaultElement
>(
	{
		intent = "neutral",
		outline,
		className,
		...restProps
	}: PolymorphicPropsWithoutRef<SecondaryButtonOwnProps, T>,
	ref: React.ForwardedRef<React.ElementRef<T>>,
) {
	return (
		<Button<React.ElementType>
			ref={ref}
			intent={intent}
			className={clsx(
				[
					"dark:hover:bg-opacity-20",
					intent === "neutral" ? "hover:bg-opacity-10" : "hover:bg-opacity-20",
				],
				{
					/* Text colors match the background colors in `PrimaryButton` */
					"text-black dark:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-300":
						intent === "neutral",
					"text-red-500 dark:text-red-300 hover:bg-red-400 dark:hover:bg-red-400":
						intent === "danger",
				},
				outline ? "border-gray-500" : "border-transparent",
				className,
			)}
			{...restProps}
		/>
	);
});
