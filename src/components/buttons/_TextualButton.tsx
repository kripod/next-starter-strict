import clsx from "clsx";
import * as React from "react";
import type {
	PolymorphicForwardRefExoticComponent,
	PolymorphicPropsWithoutRef,
} from "react-polymorphic-types";

import {
	Button,
	ButtonOwnProps as TextualButtonOwnProps,
	ButtonProps as TextualButtonProps,
} from "./_Button";

const TextualButtonDefaultElement = "button";

export type { TextualButtonOwnProps, TextualButtonProps };

export const TextualButton: PolymorphicForwardRefExoticComponent<
	TextualButtonOwnProps,
	typeof TextualButtonDefaultElement
> = React.forwardRef(function TextualButton<
	T extends React.ElementType = typeof TextualButtonDefaultElement
>(
	{
		size = "md",
		shape = "rectangle",
		className,
		...restProps
	}: PolymorphicPropsWithoutRef<TextualButtonOwnProps, T>,
	ref: React.ForwardedRef<React.ElementRef<T>>,
) {
	return (
		<Button<React.ElementType>
			ref={ref}
			size={size}
			shape={shape}
			className={clsx(
				(shape === "rectangle" || shape === "pill") && {
					"px-2.5": size === "sm",
					"px-5": size === "md",
				},
				className,
			)}
			{...restProps}
		/>
	);
});
