import { useEffect } from "react";

export function useOutsideClick(
  refs: React.RefObject<HTMLElement | null>[],
  handler: () => void,
  active: boolean,
) {
  useEffect(() => {
    if (!active) return;

    function onClick(e: MouseEvent) {
      const target = e.target as Node;

      const isInside = refs.some(
        (ref) => ref.current && ref.current.contains(target),
      );

      if (!isInside) handler();
    }

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [refs, handler, active]);
}
