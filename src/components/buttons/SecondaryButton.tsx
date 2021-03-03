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
		children,
		...restProps
	}: PolymorphicPropsWithoutRef<SecondaryButtonOwnProps, T>,
	ref: React.ForwardedRef<React.ElementRef<T>>,
) {
	return (
		<Button<React.ElementType>
			ref={ref}
			intent={intent}
			className={clsx(
				"dark:hover:bg-opacity-20 hover:bg-opacity-20",
				{
					/* Colors match or complement the backgrounds in `PrimaryButton` */
					"text-gray-900 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-400":
						intent === "neutral",
					"text-red-500 dark:text-red-400 hover:bg-red-500 dark:hover:bg-red-400":
						intent === "danger",
				},
				outline && "border border-gray-500",
				className,
			)}
			{...restProps}
		>
			{outline ? <span className="-mx-px">{children}</span> : children}
		</Button>
	);
});
