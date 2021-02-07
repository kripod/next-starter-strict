import clsx from "clsx";
import * as React from "react";

import {
	TextualButton,
	textualButtonClassNames,
	TextualButtonOwnProps,
	TextualButtonProps,
} from "./_TextualButton";

export type PrimaryButtonOwnProps = TextualButtonOwnProps;

export type PrimaryButtonProps = TextualButtonProps;

function primaryButtonOwnClassNames({
	intent = "neutral",
}: PrimaryButtonOwnProps) {
	return clsx({
		"bg-black hover:bg-gray-700 dark:bg-gray-50 dark:hover:bg-gray-300":
			intent === "neutral",
		"bg-red-500 hover:bg-red-400 dark:bg-red-400 dark:hover:bg-red-500":
			intent === "danger",
	});
}

export function primaryButtonClassNames(props: PrimaryButtonOwnProps = {}) {
	return clsx(
		textualButtonClassNames(props),
		primaryButtonOwnClassNames(props),
	);
}

export const PrimaryButton = React.forwardRef(function PrimaryButton(
	{ className, ...restProps }: PrimaryButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<TextualButton
			ref={ref}
			className={clsx(primaryButtonOwnClassNames(restProps), className)}
			{...restProps}
		/>
	);
});
