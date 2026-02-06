import { useLayoutEffect, useState } from "react";

export function useFloatingPosition(
  anchorRef: React.RefObject<HTMLElement | null>,
  open: boolean,
) {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useLayoutEffect(() => {
    if (!open || !anchorRef.current) return;

    const rect = anchorRef.current.getBoundingClientRect();

    setStyle({
      position: "absolute",
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      zIndex: 9999,
    });
  }, [open, anchorRef]);

  return style;
}
