import { PrimaryButton } from "@/components/buttons/PrimaryButton";

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
	children?: React.ReactNode;
};

function Canvas({ children }: CanvasProps) {
	return (
		<div className="p-8 space-y-4">
			<p>Sample text to visualize average contrast to the background</p>
			{children}
		</div>
	);
}

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
			<ThemingShowcase>
				<Canvas>
					<div className="space-x-3">
						<PrimaryButton as="a" href="https://github.com/kripod" size="sm">
							Neutral link
						</PrimaryButton>
						<PrimaryButton size="sm" intent="danger">
							Danger
						</PrimaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="pill"
						>
							Neutral link
						</PrimaryButton>
						<PrimaryButton size="sm" shape="pill" intent="danger">
							Danger
						</PrimaryButton>
					</div>

					<div className="space-x-3">
						<PrimaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="square"
						>
							N
						</PrimaryButton>
						<PrimaryButton size="sm" shape="square" intent="danger">
							D
						</PrimaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="circle"
						>
							N
						</PrimaryButton>
						<PrimaryButton size="sm" shape="circle" intent="danger">
							D
						</PrimaryButton>
					</div>

					<div className="space-x-4">
						<PrimaryButton as="a" href="https://github.com/kripod">
							Neutral link
						</PrimaryButton>
						<PrimaryButton intent="danger">Danger</PrimaryButton>
					</div>
					<div className="space-x-4">
						<PrimaryButton as="a" href="https://github.com/kripod" shape="pill">
							Neutral link
						</PrimaryButton>
						<PrimaryButton shape="pill" intent="danger">
							Danger
						</PrimaryButton>
					</div>

					<div className="space-x-4">
						<PrimaryButton
							as="a"
							href="https://github.com/kripod"
							shape="square"
						>
							N
						</PrimaryButton>
						<PrimaryButton shape="square" intent="danger">
							D
						</PrimaryButton>
					</div>
					<div className="space-x-4">
						<PrimaryButton
							as="a"
							href="https://github.com/kripod"
							shape="circle"
						>
							N
						</PrimaryButton>
						<PrimaryButton shape="circle" intent="danger">
							D
						</PrimaryButton>
					</div>
				</Canvas>
			</ThemingShowcase>
		</div>
	);
}
