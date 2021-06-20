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

import { Button, ButtonOwnProps, equilateral } from "./_Button";

const SecondaryButtonDefaultElement = "button";

export type SecondaryButtonOwnProps = ButtonOwnProps & {
	outlined?: boolean;
};

export type SecondaryButtonProps<
	T extends React.ElementType = typeof SecondaryButtonDefaultElement,
> = PolymorphicPropsWithRef<SecondaryButtonOwnProps, T>;

export const SecondaryButton: PolymorphicForwardRefExoticComponent<
	SecondaryButtonOwnProps,
	typeof SecondaryButtonDefaultElement
> = React.forwardRef(function SecondaryButton<
	T extends React.ElementType = typeof SecondaryButtonDefaultElement,
>(
	{
		size = "md",
		shape = "rectangle",
		intent = "neutral",
		outlined,
		className,
		...restProps
	}: PolymorphicPropsWithoutRef<SecondaryButtonOwnProps, T>,
	ref: React.ForwardedRef<Element>,
) {
	return (
		<Button<React.ElementType>
			ref={ref}
			size={size}
			shape={shape}
			intent={intent}
			className={clsx(
				!equilateral(shape) && {
					[clsx(outlined ? "px-3" : "px-2")]: size === "sm",
					[clsx(outlined ? "px-4" : "px-2.5")]: size === "md",
				},
				{
					/* Colors match or complement the backgrounds in `PrimaryButton` */
					"text-gray-900 dark:text-gray-100 hover:bg-gray-500/20 dark:hover:bg-gray-400/20":
						intent === "neutral",
					"text-red-500 dark:text-red-400 hover:bg-red-500/20 dark:hover:bg-red-400/20":
						intent === "danger",
				},
				outlined ? "border-gray-500" : "border-transparent",
				className,
			)}
			{...restProps}
		/>
	);
});
