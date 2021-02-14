import clsx from "clsx";
import { ExclamationCircle } from "heroicons/react/outline";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
	invalid?: boolean;
};

export function Input({ invalid, className, style, ...restProps }: InputProps) {
	return (
		<span className={clsx("inline-grid items-center", className)} style={style}>
			<input
				className={clsx(
					"placeholder-gray-700 dark:placeholder-gray-300 placeholder-opacity-75 dark:placeholder-opacity-60 col-start-1 row-start-1 px-3 h-11 bg-transparent rounded focus:outline-none appearance-none dark:ring-offset-black ring-offset-1 ring-opacity-50 focus:ring",
					invalid
						? "pr-11 border-2 border-red-500 ring-red-500"
						: "border border-gray-500 focus:border-blue-500 ring-blue-500",
				)}
				{...restProps}
			/>
			{invalid && (
				<ExclamationCircle
					aria-hidden
					className="col-start-1 row-start-1 justify-self-end px-3 h-6 text-red-500 pointer-events-none"
				/>
			)}
		</span>
	);
}
