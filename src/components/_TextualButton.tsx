import clsx from "clsx";
import * as React from "react";

import {
	Button,
	buttonClassNames,
	ButtonOwnProps,
	ButtonProps,
} from "./_Button";

export type TextualButtonOwnProps = ButtonOwnProps;

export type TextualButtonProps = ButtonProps;

function textualButtonOwnClassNames({ size = "md" }: TextualButtonOwnProps) {
	return clsx({
		"px-2.5": size === "sm",
		"px-5": size === "md",
	});
}

export function textualButtonClassNames(props: TextualButtonOwnProps = {}) {
	return clsx(buttonClassNames(props), textualButtonOwnClassNames(props));
}

export const TextualButton = React.forwardRef(function TextualButton(
	{ className, ...restProps }: TextualButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<Button
			ref={ref}
			className={clsx(textualButtonOwnClassNames(restProps), className)}
			{...restProps}
		/>
	);
});
