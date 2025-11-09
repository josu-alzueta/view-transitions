import { useCallback } from "react";

type TransitionCallback = () => void;

export const useTransition = () => {
  const isViewTransitionSupported = Boolean(document?.startViewTransition);

  const startTransition = useCallback(
    (fn: TransitionCallback) => {
      if (isViewTransitionSupported) {
        document.startViewTransition(() => {
          fn();
        });
        return;
      }

      fn();
    },
    [isViewTransitionSupported]
  );

  return startTransition;
};
