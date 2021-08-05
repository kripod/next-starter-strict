import { ExclamationCircleIcon as ExclamationCircleIconMd } from "@heroicons/react/outline";
import { ExclamationCircleIcon as ExclamationCircleIconSm } from "@heroicons/react/solid";
import clsx from "clsx";

export type InputProps = Omit<
	React.ComponentPropsWithoutRef<"input">,
	"size"
> & {
	size?: "sm" | "md";
};

export function Input({
	size = "md",
	className,
	style,
	...restProps
}: InputProps) {
	const ExclamationCircle =
		size === "sm" ? ExclamationCircleIconSm : ExclamationCircleIconMd;

	return (
		<span className={clsx("inline-grid", className)} style={style}>
			<input
				className={clsx(
					"col-start-1 row-start-1 bg-transparent rounded-md focus:ring ring-offset-1 dark:ring-offset-black transition-shadow motion-reduce:transition-none appearance-none focus:outline-none peer placeholder-gray-600/80 dark:placeholder-gray-400/80 ring-blue-500/50 dark:ring-blue-400/50 invalid:ring-red-500/50 dark:invalid:ring-red-400/50",
					{
						"px-2.5 invalid:pr-8 h-8 text-sm": size === "sm",
						"px-3.5 invalid:pr-11 h-11": size === "md",
					},
				)}
				{...restProps}
			/>
			<span
				className={clsx(
					"col-start-1 row-start-1 rounded-md ring-1 peer-invalid:ring-2 ring-inset ring-gray-500 peer-invalid:ring-red-500 peer-focus:peer-valid:ring-blue-500 dark:peer-invalid:ring-red-400 dark:peer-focus:peer-valid:ring-blue-400 transition-shadow motion-reduce:transition-none pointer-events-none",
				)}
			/>

			<ExclamationCircle
				aria-hidden
				className={clsx(
					"invisible peer-invalid:visible col-start-1 row-start-1 justify-self-end self-center text-red-500 dark:text-red-400 pointer-events-none",
					{
						"px-2 h-5": size === "sm",
						"px-3 h-6": size === "md",
					},
				)}
			/>
		</span>
	);
}
