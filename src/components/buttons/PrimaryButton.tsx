import clsx from "clsx";
import * as React from "react";
import type {
	PolymorphicForwardRefExoticComponent,
	PolymorphicPropsWithoutRef,
} from "react-polymorphic-types";

import {
	TextualButton,
	TextualButtonOwnProps as PrimaryButtonOwnProps,
	TextualButtonProps as PrimaryButtonProps,
} from "./_TextualButton";

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
		<TextualButton<React.ElementType>
			ref={ref}
			intent={intent}
			className={clsx(
				{
					"bg-black hover:bg-gray-700 dark:bg-gray-50 dark:hover:bg-gray-300":
						intent === "neutral",
					"bg-red-500 hover:bg-red-400 dark:bg-red-400 dark:hover:bg-red-500":
						intent === "danger",
				},
				className,
			)}
			{...restProps}
		/>
	);
});
