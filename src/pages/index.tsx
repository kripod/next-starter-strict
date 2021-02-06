import clsx from "clsx";
import { useState } from "react";

import { Button } from "@/components/Button";

export default function Page() {
	const [inverted, setInverted] = useState(false);

	return (
		<div
			className={clsx(
				"flex flex-col items-center justify-center min-h-screen",
				inverted && "bg-black",
			)}
		>
			<Button
				type="button"
				onClick={() => setInverted((prevValue) => !prevValue)}
			>
				Invert colors
			</Button>
		</div>
	);
}
