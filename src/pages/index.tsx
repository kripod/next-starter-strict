import {
	CogIcon as CogIconMd,
	TrashIcon as TrashIconMd,
} from "@heroicons/react/outline";
import {
	CogIcon as CogIconSm,
	TrashIcon as TrashIconSm,
} from "@heroicons/react/solid";

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
							placeholder="Small required inputs look like this"
							required
						/>
						<Input placeholder="Medium regular inputs look like this" />
						<Input
							placeholder="Medium required inputs look like this"
							required
						/>
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
						<SecondaryButton outlined size="sm">
							Button
						</SecondaryButton>
						<PrimaryButton size="sm" shape="pill">
							Button
						</PrimaryButton>
						<SecondaryButton outlined size="sm" shape="pill">
							Button
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton size="sm" intent="danger">
							Button
						</PrimaryButton>
						<SecondaryButton outlined size="sm" intent="danger">
							Button
						</SecondaryButton>
						<PrimaryButton size="sm" shape="pill" intent="danger">
							Button
						</PrimaryButton>
						<SecondaryButton outlined size="sm" shape="pill" intent="danger">
							Button
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton>Button</PrimaryButton>
						<SecondaryButton outlined>Button</SecondaryButton>
						<PrimaryButton shape="pill">Button</PrimaryButton>
						<SecondaryButton outlined shape="pill">
							Button
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton intent="danger">Button</PrimaryButton>
						<SecondaryButton outlined intent="danger">
							Button
						</SecondaryButton>
						<PrimaryButton shape="pill" intent="danger">
							Button
						</PrimaryButton>
						<SecondaryButton outlined shape="pill" intent="danger">
							Button
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton>Button</SecondaryButton>
						<PrimaryButton>Button</PrimaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton shape="pill">Button</SecondaryButton>
						<PrimaryButton shape="pill">Button</PrimaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton size="sm">Button</SecondaryButton>
						<PrimaryButton size="sm">Button</PrimaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton size="sm" shape="pill">
							Button
						</SecondaryButton>
						<PrimaryButton size="sm" shape="pill">
							Button
						</PrimaryButton>
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
							<CogIconSm aria-label="Settings" className="h-5" />
						</PrimaryButton>
						<PrimaryButton size="sm" shape="square" intent="danger">
							<TrashIconSm aria-label="Delete" className="h-5" />
						</PrimaryButton>
					</div>
					<div className="space-x-3">
						<PrimaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="circle"
						>
							<CogIconSm aria-label="Settings" className="h-5" />
						</PrimaryButton>
						<PrimaryButton size="sm" shape="circle" intent="danger">
							<TrashIconSm aria-label="Delete" className="h-5" />
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
							<CogIconMd aria-label="Settings" className="h-6" />
						</PrimaryButton>
						<PrimaryButton shape="square" intent="danger">
							<TrashIconMd aria-label="Delete" className="h-6" />
						</PrimaryButton>
					</div>
					<div className="space-x-4">
						<PrimaryButton
							as="a"
							href="https://github.com/kripod"
							shape="circle"
						>
							<CogIconMd aria-label="Settings" className="h-6" />
						</PrimaryButton>
						<PrimaryButton shape="circle" intent="danger">
							<TrashIconMd aria-label="Delete" className="h-6" />
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
							outlined
						>
							Neutral link
						</SecondaryButton>
						<SecondaryButton size="sm" intent="danger" outlined>
							Danger
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="pill"
							outlined
						>
							Neutral link
						</SecondaryButton>
						<SecondaryButton size="sm" shape="pill" intent="danger" outlined>
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
							<CogIconSm aria-label="Settings" className="h-5" />
						</SecondaryButton>
						<SecondaryButton size="sm" shape="square" intent="danger">
							<TrashIconSm aria-label="Delete" className="h-5" />
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="square"
							outlined
						>
							<CogIconSm aria-label="Settings" className="h-5" />
						</SecondaryButton>
						<SecondaryButton size="sm" shape="square" intent="danger" outlined>
							<TrashIconSm aria-label="Delete" className="h-5" />
						</SecondaryButton>
					</div>
					<div className="space-x-3">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							size="sm"
							shape="circle"
							outlined
						>
							<CogIconSm aria-label="Settings" className="h-5" />
						</SecondaryButton>
						<SecondaryButton size="sm" shape="circle" intent="danger" outlined>
							<TrashIconSm aria-label="Delete" className="h-5" />
						</SecondaryButton>
					</div>

					<div className="space-x-4">
						<SecondaryButton as="a" href="https://github.com/kripod">
							Neutral link
						</SecondaryButton>
						<SecondaryButton intent="danger">Danger</SecondaryButton>
					</div>
					<div className="space-x-4">
						<SecondaryButton as="a" href="https://github.com/kripod" outlined>
							Neutral link
						</SecondaryButton>
						<SecondaryButton intent="danger" outlined>
							Danger
						</SecondaryButton>
					</div>
					<div className="space-x-4">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							shape="pill"
							outlined
						>
							Neutral link
						</SecondaryButton>
						<SecondaryButton shape="pill" intent="danger" outlined>
							Danger
						</SecondaryButton>
					</div>

					<div className="space-x-4">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							shape="square"
						>
							<CogIconMd aria-label="Settings" className="h-6" />
						</SecondaryButton>
						<SecondaryButton shape="square" intent="danger">
							<TrashIconMd aria-label="Delete" className="h-6" />
						</SecondaryButton>
					</div>
					<div className="space-x-4">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							shape="square"
							outlined
						>
							<CogIconMd aria-label="Settings" className="h-6" />
						</SecondaryButton>
						<SecondaryButton shape="square" intent="danger" outlined>
							<TrashIconMd aria-label="Delete" className="h-6" />
						</SecondaryButton>
					</div>
					<div className="space-x-4">
						<SecondaryButton
							as="a"
							href="https://github.com/kripod"
							shape="circle"
							outlined
						>
							<CogIconMd aria-label="Settings" className="h-6" />
						</SecondaryButton>
						<SecondaryButton shape="circle" intent="danger" outlined>
							<TrashIconMd aria-label="Delete" className="h-6" />
						</SecondaryButton>
					</div>
				</Canvas>
			</ThemingShowcase>
		</div>
	);
}
