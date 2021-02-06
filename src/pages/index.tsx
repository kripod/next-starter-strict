import clsx from "clsx";

import { Button } from "@/components/Button";

type ThemingShowcaseProps = {
	children?: React.ReactNode;
};

function ThemingShowcase({ children }: ThemingShowcaseProps) {
	return (
		<>
			<div className="text-gray-700 bg-white">{children}</div>
			<div className="dark text-gray-300 bg-gray-900">{children}</div>
			<div className="dark text-gray-300 bg-black">{children}</div>
		</>
	);
}

type CanvasProps = {
	orientation?: "horizontal" | "vertical";
	children?: React.ReactNode;
};

function Canvas({ orientation = "horizontal", children }: CanvasProps) {
	return (
		<div className="p-8 space-y-3">
			<p>Sample text to visualize average contrast to the background</p>
			<div
				className={clsx({
					"space-x-4": orientation === "horizontal",
					"space-y-4": orientation === "vertical",
				})}
			>
				{children}
			</div>
		</div>
	);
}

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
			<ThemingShowcase>
				<Canvas>
					<Button size="sm">Neutral</Button>
					<Button>Neutral</Button>

					<Button intent="danger" size="sm">
						Danger
					</Button>
					<Button intent="danger">Danger</Button>
				</Canvas>
			</ThemingShowcase>
		</div>
	);
}
