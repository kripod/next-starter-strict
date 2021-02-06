import clsx from "clsx";
import { ThemeProvider, useTheme } from "next-themes";

import { Button } from "@/components/Button";

type ThemingShowcaseProps = {
	children?: React.ReactNode;
};

function ThemingShowcase({ children }: ThemingShowcaseProps) {
	return (
		<>
			<ThemeProvider forcedTheme="light">{children}</ThemeProvider>
			<ThemeProvider forcedTheme="dark">{children}</ThemeProvider>
		</>
	);
}

type CanvasProps = {
	orientation?: "horizontal" | "vertical";
	children?: React.ReactNode;
};

function Canvas({ orientation = "horizontal", children }: CanvasProps) {
	const { forcedTheme } = useTheme();

	return (
		<div
			className={clsx("p-8 space-y-3", {
				"text-gray-700 bg-white": forcedTheme === "light",
				"text-gray-300 bg-gray-900": forcedTheme === "dark",
			})}
		>
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
					<Button type="button">Neutral</Button>
					<Button type="button" intent="danger">
						Danger
					</Button>
				</Canvas>
			</ThemingShowcase>
		</div>
	);
}
