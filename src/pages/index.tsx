import { Cog as CogMd, Trash as TrashMd } from "heroicons/react/outline";
import { Cog as CogSm, Trash as TrashSm } from "heroicons/react/solid";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";
import { Input } from "@/components/inputs/Input";

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
					<div className="flex flex-col space-y-4">
						<Input
							size="sm"
							placeholder="Small regular inputs look like this"
						/>
						<Input
							size="sm"
							placeholder="Small invalid inputs look like this"
							invalid
						/>
						<Input placeholder="Medium regular inputs look like this" />
						<Input placeholder="Medium invalid inputs look like this" invalid />
						<PrimaryButton size="sm" intent="danger">
							Danger
						</PrimaryButton>
						<Input placeholder="Read-only inputs look like this █" readOnly />
						<Input placeholder="Disabled inputs look like this █" disabled />
					</div>
				</Canvas>
			</ThemingShowcase>

			<ThemingShowcase>
				<Canvas>
					<div className="space-x-3">
						<PrimaryButton size="sm">Button</PrimaryButton>
						<SecondaryButton outline size="sm">
							Button
						</SecondaryButton>
						<PrimaryButton size="sm" shape="pill">
							Button
						</PrimaryButton>
						<SecondaryButton outline size="sm" shape="pill">
							Button
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton size="sm" intent="danger">
							Button
						</PrimaryButton>
						<SecondaryButton outline size="sm" intent="danger">
							Button
						</SecondaryButton>
						<PrimaryButton size="sm" shape="pill" intent="danger">
							Button
						</PrimaryButton>
						<SecondaryButton outline size="sm" shape="pill" intent="danger">
							Button
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton>Button</PrimaryButton>
						<SecondaryButton outline>Button</SecondaryButton>
						<PrimaryButton shape="pill">Button</PrimaryButton>
						<SecondaryButton outline shape="pill">
							Button
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton intent="danger">Button</PrimaryButton>
						<SecondaryButton outline intent="danger">
							Button
						</SecondaryButton>
						<PrimaryButton shape="pill" intent="danger">
							Button
						</PrimaryButton>
						<SecondaryButton outline shape="pill" intent="danger">
							Button
						</SecondaryButton>
					</div>
				</Canvas>
			</ThemingShowcase>

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
							<CogSm aria-label="Settings" className="h-5" />
						</PrimaryButton>
						<PrimaryButton size="sm" shape="square" intent="danger">
							<TrashSm aria-label="Delete" className="h-5" />
						</PrimaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="circle"
						>
							<CogSm aria-label="Settings" className="h-5" />
						</PrimaryButton>
						<PrimaryButton size="sm" shape="circle" intent="danger">
							<TrashSm aria-label="Delete" className="h-5" />
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
							<CogMd aria-label="Settings" className="h-6" />
						</PrimaryButton>
						<PrimaryButton shape="square" intent="danger">
							<TrashMd aria-label="Delete" className="h-6" />
						</PrimaryButton>
					</div>
					<div className="space-x-4">
						<PrimaryButton
							as="a"
							href="https://github.com/kripod"
							shape="circle"
						>
							<CogMd aria-label="Settings" className="h-6" />
						</PrimaryButton>
						<PrimaryButton shape="circle" intent="danger">
							<TrashMd aria-label="Delete" className="h-6" />
						</PrimaryButton>
					</div>
				</Canvas>
			</ThemingShowcase>

			<ThemingShowcase>
				<Canvas>
					<div className="space-x-3">
						<SecondaryButton as="a" href="https://github.com/kripod" size="sm">
							Neutral link
						</SecondaryButton>
						<SecondaryButton size="sm" intent="danger">
							Danger
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							outline
						>
							Neutral link
						</SecondaryButton>
						<SecondaryButton size="sm" intent="danger" outline>
							Danger
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="pill"
							outline
						>
							Neutral link
						</SecondaryButton>
						<SecondaryButton size="sm" shape="pill" intent="danger" outline>
							Danger
						</SecondaryButton>
					</div>

					<div className="space-x-3">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="square"
						>
							<CogSm aria-label="Settings" className="h-5" />
						</SecondaryButton>
						<SecondaryButton size="sm" shape="square" intent="danger">
							<TrashSm aria-label="Delete" className="h-5" />
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="square"
							outline
						>
							<CogSm aria-label="Settings" className="h-5" />
						</SecondaryButton>
						<SecondaryButton size="sm" shape="square" intent="danger" outline>
							<TrashSm aria-label="Delete" className="h-5" />
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="circle"
							outline
						>
							<CogSm aria-label="Settings" className="h-5" />
						</SecondaryButton>
						<SecondaryButton size="sm" shape="circle" intent="danger" outline>
							<TrashSm aria-label="Delete" className="h-5" />
						</SecondaryButton>
					</div>

					<div className="space-x-4">
						<SecondaryButton as="a" href="https://github.com/kripod">
							Neutral link
						</SecondaryButton>
						<SecondaryButton intent="danger">Danger</SecondaryButton>
					</div>
					<div className="space-x-4">
						<SecondaryButton as="a" href="https://github.com/kripod" outline>
							Neutral link
						</SecondaryButton>
						<SecondaryButton intent="danger" outline>
							Danger
						</SecondaryButton>
					</div>
					<div className="space-x-4">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							shape="pill"
							outline
						>
							Neutral link
						</SecondaryButton>
						<SecondaryButton shape="pill" intent="danger" outline>
							Danger
						</SecondaryButton>
					</div>

					<div className="space-x-4">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							shape="square"
						>
							<CogMd aria-label="Settings" className="h-6" />
						</SecondaryButton>
						<SecondaryButton shape="square" intent="danger">
							<TrashMd aria-label="Delete" className="h-6" />
						</SecondaryButton>
					</div>
					<div className="space-x-4">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							shape="square"
							outline
						>
							<CogMd aria-label="Settings" className="h-6" />
						</SecondaryButton>
						<SecondaryButton shape="square" intent="danger" outline>
							<TrashMd aria-label="Delete" className="h-6" />
						</SecondaryButton>
					</div>
					<div className="space-x-4">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							shape="circle"
							outline
						>
							<CogMd aria-label="Settings" className="h-6" />
						</SecondaryButton>
						<SecondaryButton shape="circle" intent="danger" outline>
							<TrashMd aria-label="Delete" className="h-6" />
						</SecondaryButton>
					</div>
				</Canvas>
			</ThemingShowcase>
		</div>
	);
}
