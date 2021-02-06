import clsx from "clsx";
import * as React from "react";

import { Button, ButtonOwnProps, ButtonProps } from "./Button";

export type PrimaryButtonOwnProps = ButtonOwnProps;

export type PrimaryButtonProps = ButtonProps;

export const PrimaryButton = React.forwardRef(function PrimaryButton(
	{
		size = "md",
		intent = "neutral",
		className,
		...restProps
	}: PrimaryButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<Button
			ref={ref}
			size={size}
			intent={intent}
			className={clsx(
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
				className,
			)}
			{...restProps}
		/>
	);
});
