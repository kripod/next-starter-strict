import clsx from "clsx";
import * as React from "react";
import type {
	PolymorphicForwardRefExoticComponent,
	PolymorphicPropsWithoutRef,
} from "react-polymorphic-types";

import {
	Button,
	ButtonOwnProps as PrimaryButtonOwnProps,
	ButtonProps as PrimaryButtonProps,
	equilateral,
} from "./_Button";

const PrimaryButtonDefaultElement = "button";

export type { PrimaryButtonOwnProps, PrimaryButtonProps };

export const PrimaryButton: PolymorphicForwardRefExoticComponent<
	PrimaryButtonOwnProps,
	typeof PrimaryButtonDefaultElement
> = React.forwardRef(function PrimaryButton<
	T extends React.ElementType = typeof PrimaryButtonDefaultElement,
>(
	{
		size = "md",
		shape = "rectangle",
		intent = "neutral",
		className,
		...restProps
	}: PolymorphicPropsWithoutRef<PrimaryButtonOwnProps, T>,
	ref: React.ForwardedRef<Element>,
) {
	return (
		<Button<React.ElementType>
			ref={ref}
			size={size}
			shape={shape}
			intent={intent}
			className={clsx(
				"dark:text-black text-white border-transparent",
				!equilateral(shape) && {
					"px-3": size === "sm",
					"px-4": size === "md",
				},
				{
					"bg-gray-900 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-300":
						intent === "neutral",
					"bg-red-500 dark:bg-red-400 hover:bg-red-400 dark:hover:bg-red-500":
						intent === "danger",
				},
				className,
			)}
			{...restProps}
		/>
	);
});
