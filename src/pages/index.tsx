import clsx from "clsx";
import { useState } from "react";

export default function Page() {
	const [inverted, setInverted] = useState(false);

	return (
		<div
			className={clsx(
				"flex flex-col items-center justify-center min-h-screen",
				inverted && "bg-black",
			)}
		>
			<button
				type="button"
				className={clsx(
					"p-3 border-4 border-current",
					inverted && "text-white",
				)}
				onClick={() => {
					setInverted((prevValue) => !prevValue);
				}}
			>
				Invert colors
			</button>
		</div>
	);
}
