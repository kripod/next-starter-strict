import clsx from "clsx";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
	invalid?: boolean;
};

export function Input({ invalid, className, ...restProps }: InputProps) {
	return (
		<input
			className={clsx(
				"placeholder-gray-700 dark:placeholder-gray-300 placeholder-opacity-75 dark:placeholder-opacity-60 px-3 h-11 bg-transparent border rounded focus:outline-none appearance-none dark:ring-offset-black ring-offset-1 ring-opacity-50 focus:ring",
				invalid
					? "border-red-500 ring-red-500"
					: "border-gray-500 focus:border-blue-500 ring-blue-500",
				className,
			)}
			{...restProps}
		/>
	);
}
