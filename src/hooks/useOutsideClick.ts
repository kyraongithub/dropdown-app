import { useEffect } from "react";

export const useOutsideClick = (
  refs: React.RefObject<HTMLElement | null>[],
  handler: () => void,
  active: boolean,
): void => {
  useEffect(() => {
    if (!active) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;

      const isInside = refs.some(
        (ref) => ref.current && ref.current.contains(target),
      );

      if (!isInside) handler();
    };

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [refs, handler, active]);
};
