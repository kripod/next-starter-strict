import { ExclamationCircleIcon as ExclamationCircleIconMd } from "@heroicons/react/outline";
import { ExclamationCircleIcon as ExclamationCircleIconSm } from "@heroicons/react/solid";
import clsx from "clsx";

export type InputProps = Omit<
	React.ComponentPropsWithoutRef<"input">,
	"size"
> & {
	size?: "sm" | "md";
	invalid?: boolean;
};

export function Input({
	size = "md",
	invalid,
	className,
	...restProps
}: InputProps) {
	const ExclamationCircle =
		size === "sm" ? ExclamationCircleIconSm : ExclamationCircleIconMd;

	return (
		<span className={clsx("group inline-grid", className)}>
			<span
				className={clsx(
					"col-start-1 row-start-1 rounded-md",
					invalid
						? "border-2 border-red-500 dark:border-red-400"
						: "border border-gray-500 group-focus-within:border-blue-500 dark:group-focus-within:border-blue-400",
				)}
			/>
			<input
				className={clsx(
					"placeholder-gray-600 dark:placeholder-gray-400 placeholder-opacity-80 dark:placeholder-opacity-80 col-start-1 row-start-1 bg-transparent rounded-md focus:outline-none appearance-none motion-reduce:transition-none transition-shadow focus:ring ring-opacity-50 dark:ring-opacity-50 ring-offset-1 dark:ring-offset-black",
					{
						"px-2.5 h-8 text-sm": size === "sm",
						"px-3.5 h-11": size === "md",
					},
					invalid
						? [
								"ring-red-500 dark:ring-red-400",
								{
									"pr-8": size === "sm",
									"pr-11": size === "md",
								},
						  ]
						: "ring-blue-500 dark:ring-blue-400",
				)}
				{...restProps}
			/>
			{invalid && (
				<ExclamationCircle
					aria-hidden
					className={clsx(
						"col-start-1 row-start-1 self-center justify-self-end dark:text-red-400 text-red-500 pointer-events-none",
						{
							"px-2 h-5": size === "sm",
							"px-3 h-6": size === "md",
						},
					)}
				/>
			)}
		</span>
	);
}
