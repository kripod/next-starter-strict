import clsx from "clsx";
import * as React from "react";

import {
	Button,
	buttonClassNames,
	ButtonOwnProps,
	ButtonProps,
} from "./Button";

export type PrimaryButtonOwnProps = ButtonOwnProps;

export type PrimaryButtonProps = ButtonProps;

function primaryButtonOwnClassNames({
	size = "md",
	intent = "neutral",
}: PrimaryButtonOwnProps) {
	return clsx(
		{
			"px-2.5": size === "sm",
			"px-5": size === "md",
		},
		{
			"bg-black hover:bg-gray-700 dark:bg-gray-50 dark:hover:bg-gray-300":
				intent === "neutral",
			"bg-red-500 hover:bg-red-400 dark:bg-red-400 dark:hover:bg-red-500":
				intent === "danger",
		},
	);
}

export function primaryButtonClassNames(props: PrimaryButtonOwnProps = {}) {
	return clsx(buttonClassNames(props), primaryButtonOwnClassNames(props));
}

export const PrimaryButton = React.forwardRef(function PrimaryButton(
	{ className, ...restProps }: PrimaryButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<Button
			ref={ref}
			className={clsx(primaryButtonOwnClassNames(restProps), className)}
			{...restProps}
		/>
	);
});
