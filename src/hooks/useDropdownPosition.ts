import { useLayoutEffect, useState } from "react";
import {
  computePosition,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/dom";

const useDropdownPosition = (
  anchorRef: React.RefObject<HTMLElement | null>,
  menuRef: React.RefObject<HTMLElement | null>,
  active: boolean,
) => {
  const [styles, setStyles] = useState<React.CSSProperties>({});

  useLayoutEffect(() => {
    if (!active) return;
    if (!anchorRef.current || !menuRef.current) return;

    const cleanup = autoUpdate(anchorRef.current, menuRef.current, () => {
      computePosition(anchorRef.current!, menuRef.current!, {
        placement: "bottom-start",
        middleware: [offset(4), flip(), shift({ padding: 8 })],
      }).then(({ x, y }) => {
        setStyles({
          position: "absolute",
          left: x,
          top: y,
        });
      });
    });

    return cleanup;
  }, [anchorRef, menuRef, active]);

  return styles;
};

export default useDropdownPosition;
