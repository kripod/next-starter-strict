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
} from "./_Button";

const PrimaryButtonDefaultElement = "button";

export type { PrimaryButtonOwnProps, PrimaryButtonProps };

export const PrimaryButton: PolymorphicForwardRefExoticComponent<
	PrimaryButtonOwnProps,
	typeof PrimaryButtonDefaultElement
> = React.forwardRef(function PrimaryButton<
	T extends React.ElementType = typeof PrimaryButtonDefaultElement
>(
	{
		intent = "neutral",
		className,
		...restProps
	}: PolymorphicPropsWithoutRef<PrimaryButtonOwnProps, T>,
	ref: React.ForwardedRef<React.ElementRef<T>>,
) {
	return (
		<Button<React.ElementType>
			ref={ref}
			intent={intent}
			className={clsx(
				"dark:text-black text-white hover:bg-opacity-80 border-transparent",
				{
					"bg-gray-900 dark:bg-gray-100": intent === "neutral",
					"bg-red-500 dark:bg-red-400": intent === "danger",
				},
				className,
			)}
			{...restProps}
		/>
	);
});
