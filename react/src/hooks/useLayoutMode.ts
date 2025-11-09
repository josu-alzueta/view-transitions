import { useState } from "react";

import { useTransition } from "../hooks/useTransition";

type LayoutView = "one-column" | "two-columns";

export const useLayoutView = () => {
  const [layoutView, setLayoutView] = useState<LayoutView>("two-columns");
  const onTransition = useTransition();

  const handleLayoutToggle = () => {
    onTransition(() => {
      setLayoutView((previous) =>
        previous === "one-column" ? "two-columns" : "one-column"
      );
    });
  };

  return {
    layoutView,
    onLayoutToggle: handleLayoutToggle,
  };
};
