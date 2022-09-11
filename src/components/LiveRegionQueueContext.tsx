import * as React from "react";
import * as ReactDOM from "react-dom";

import { useMounted } from "@/hooks/useMounted";

// https://www.w3.org/TR/wai-aria-1.1/#live_region_roles
type LiveRegionRole = Extract<
  React.AriaRole,
  "alert" | "log" | "marquee" | "status" | "timer"
>;

// https://www.w3.org/TR/wai-aria-1.1/#attrs_liveregions
type LiveRegionAttributes = Pick<
  React.AriaAttributes,
  "aria-atomic" | "aria-busy" | "aria-live" | "aria-relevant"
>;

type LiveRegionOptions = {
  role?: LiveRegionRole | undefined;
} & LiveRegionAttributes;

type LiveRegionProps = LiveRegionOptions & {
  children: string;
};

type LiveRegionQueueContextValue =
  | { add: (message: string, options?: LiveRegionOptions) => () => void }
  | undefined;

const LiveRegionQueueContext =
  React.createContext<LiveRegionQueueContextValue>(undefined);

export type LiveRegionQueueProviderProps = {
  container?: () => Element | DocumentFragment;
  children?: React.ReactNode;
};

export function LiveRegionQueueProvider({
  container = () => document.body,
  children,
}: LiveRegionQueueProviderProps) {
  const mounted = useMounted();
  const [items, setItems] = React.useState<LiveRegionProps[]>([]);

  return (
    <LiveRegionQueueContext.Provider
      value={React.useMemo(
        () => ({
          add: (message, options) => {
            const newItem = { ...options, children: message };
            setItems((prev) => [...prev, newItem]);
            return () => {
              setItems((prev) => prev.filter((item) => item !== newItem));
            };
          },
        }),
        [],
      )}
    >
      {children}
      {mounted
        ? ReactDOM.createPortal(
            <div data-live-region-container>
              {Object.values(items).map((props) => (
                <div {...props} />
              ))}
            </div>,
            container(),
          )
        : null}
    </LiveRegionQueueContext.Provider>
  );
}

export function useLiveRegionQueue() {
  const context = React.useContext(LiveRegionQueueContext);
  if (context === undefined) {
    throw new Error(
      "useLiveRegionQueue must be used within a LiveRegionQueueProvider",
    );
  }
  return context;
}

export function useLiveRegion() {
  const liveRegionQueue = useLiveRegionQueue();
  const removePrevRegion = React.useRef<() => void>();
  return (
    ...args: Parameters<NonNullable<LiveRegionQueueContextValue>["add"]>
  ) => {
    removePrevRegion.current?.();
    removePrevRegion.current = liveRegionQueue.add(...args);
  };
}
