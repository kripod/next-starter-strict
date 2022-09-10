import { PrimaryButton } from "@/components/buttons/SimplePrimaryButton";
import { Input } from "@/components/inputs/Input";

type ThemingShowcaseProps = {
  children?: React.ReactNode;
};

function ThemingShowcase({ children }: ThemingShowcaseProps) {
  return (
    <>
      <div className="bg-white text-gray-700">{children}</div>
      <div className="dark bg-gray-900 text-gray-300">{children}</div>
      <div className="dark bg-black text-gray-300">{children}</div>
    </>
  );
}

type CanvasProps = {
  children?: React.ReactNode;
};

function Canvas({ children }: CanvasProps) {
  return (
    <div className="space-y-4 p-8">
      <p>Sample text to visualize average contrast to the background</p>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-500">
      <ThemingShowcase>
        <Canvas>
          <div className="flex flex-col space-y-4">
            <div className="space-x-3">
              <PrimaryButton size="sm">Button</PrimaryButton>
              <PrimaryButton size="sm" sentiment="negative">
                Button
              </PrimaryButton>
              <PrimaryButton size="sm" disabled>
                Button
              </PrimaryButton>
            </div>

            <div className="space-x-3">
              <PrimaryButton>Button</PrimaryButton>
              <PrimaryButton sentiment="negative">Button</PrimaryButton>
              <PrimaryButton disabled>Button</PrimaryButton>
            </div>
          </div>
        </Canvas>
      </ThemingShowcase>

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
            <PrimaryButton size="sm" sentiment="negative">
              Danger
            </PrimaryButton>
            <Input placeholder="Read-only inputs look like this █" readOnly />
            <Input placeholder="Disabled inputs look like this █" disabled />
          </div>
        </Canvas>
      </ThemingShowcase>

      {/* <ThemingShowcase>
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
            <PrimaryButton size="sm" sentiment="negative">
              Button
            </PrimaryButton>
            <SecondaryButton outlined size="sm" sentiment="negative">
              Button
            </SecondaryButton>
            <PrimaryButton size="sm" shape="pill" sentiment="negative">
              Button
            </PrimaryButton>
            <SecondaryButton
              outlined
              size="sm"
              shape="pill"
              sentiment="negative"
            >
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
            <PrimaryButton sentiment="negative">Button</PrimaryButton>
            <SecondaryButton outlined sentiment="negative">
              Button
            </SecondaryButton>
            <PrimaryButton shape="pill" sentiment="negative">
              Button
            </PrimaryButton>
            <SecondaryButton outlined shape="pill" sentiment="negative">
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
            <PrimaryButton size="sm" sentiment="negative">
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
            <PrimaryButton size="sm" shape="pill" sentiment="negative">
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
            <PrimaryButton size="sm" shape="square" sentiment="negative">
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
            <PrimaryButton size="sm" shape="circle" sentiment="negative">
              <TrashIconSm aria-label="Delete" className="h-5" />
            </PrimaryButton>
          </div>

          <div className="space-x-4">
            <PrimaryButton as="a" href="https://github.com/kripod">
              Neutral link
            </PrimaryButton>
            <PrimaryButton sentiment="negative">Danger</PrimaryButton>
          </div>
          <div className="space-x-4">
            <PrimaryButton as="a" href="https://github.com/kripod" shape="pill">
              Neutral link
            </PrimaryButton>
            <PrimaryButton shape="pill" sentiment="negative">
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
            <PrimaryButton shape="square" sentiment="negative">
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
            <PrimaryButton shape="circle" sentiment="negative">
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
            <SecondaryButton size="sm" sentiment="negative">
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
            <SecondaryButton size="sm" sentiment="negative" outlined>
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
            <SecondaryButton
              size="sm"
              shape="pill"
              sentiment="negative"
              outlined
            >
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
            <SecondaryButton size="sm" shape="square" sentiment="negative">
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
            <SecondaryButton
              size="sm"
              shape="square"
              sentiment="negative"
              outlined
            >
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
            <SecondaryButton
              size="sm"
              shape="circle"
              sentiment="negative"
              outlined
            >
              <TrashIconSm aria-label="Delete" className="h-5" />
            </SecondaryButton>
          </div>

          <div className="space-x-4">
            <SecondaryButton as="a" href="https://github.com/kripod">
              Neutral link
            </SecondaryButton>
            <SecondaryButton sentiment="negative">Danger</SecondaryButton>
          </div>
          <div className="space-x-4">
            <SecondaryButton as="a" href="https://github.com/kripod" outlined>
              Neutral link
            </SecondaryButton>
            <SecondaryButton sentiment="negative" outlined>
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
            <SecondaryButton shape="pill" sentiment="negative" outlined>
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
            <SecondaryButton shape="square" sentiment="negative">
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
            <SecondaryButton shape="square" sentiment="negative" outlined>
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
            <SecondaryButton shape="circle" sentiment="negative" outlined>
              <TrashIconMd aria-label="Delete" className="h-6" />
            </SecondaryButton>
          </div>
        </Canvas>
      </ThemingShowcase> */}
    </div>
  );
}
