import clsx from "clsx";

export type InputProps = React.ComponentPropsWithoutRef<"input">;

export function Input({ className, ...restProps }: InputProps) {
	return (
		<input
			className={clsx(
				"placeholder-gray-700 dark:placeholder-gray-300 placeholder-opacity-75 dark:placeholder-opacity-60 px-3 h-11 bg-transparent border focus:border-blue-500 border-gray-500 rounded focus:outline-none appearance-none ring-blue-500 dark:ring-offset-black ring-offset-1 ring-opacity-50 focus:ring",
				className,
			)}
			{...restProps}
		/>
	);
}
