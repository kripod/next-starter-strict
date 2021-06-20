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
					"peer placeholder-gray-600/80 dark:placeholder-gray-400/80 ring-blue-500/50 dark:ring-blue-400/50 invalid:ring-red-500/50 dark:invalid:ring-red-400/50 col-start-1 row-start-1 bg-transparent rounded-md focus:outline-none appearance-none motion-reduce:transition-none transition-shadow focus:ring ring-offset-1 dark:ring-offset-black",
					{
						"px-2.5 invalid:pr-8 h-8 text-sm": size === "sm",
						"px-3.5 invalid:pr-11 h-11": size === "md",
					},
				)}
				{...restProps}
			/>
			<span
				className={clsx(
					"dark:peer-invalid:border-red-400 dark:peer-focus:peer-valid:border-blue-400 peer-focus:peer-valid:border-blue-500 col-start-1 row-start-1 border peer-invalid:border-2 border-gray-500 peer-invalid:border-red-500 rounded-md pointer-events-none",
				)}
			/>

			<ExclamationCircle
				aria-hidden
				className={clsx(
					"col-start-1 row-start-1 self-center justify-self-end dark:text-red-400 text-red-500 invisible peer-invalid:visible pointer-events-none",
					{
						"px-2 h-5": size === "sm",
						"px-3 h-6": size === "md",
					},
				)}
			/>
		</span>
	);
}
