import { useCallback, useMemo, useState } from "react";

type Params = {
  value?: string | string[];
  multiple: boolean;
  onChange?: (value: string | string[]) => void;
};

export function useDropdownState({ value, multiple, onChange }: Params) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedValues = useMemo<string[]>(() => {
    if (multiple) return Array.isArray(value) ? value : [];
    if (typeof value === "string") return value ? [value] : [];
    return [];
  }, [value, multiple]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  const selectValue = useCallback(
    (val: string) => {
      if (multiple) {
        const next = selectedValues.includes(val)
          ? selectedValues.filter((v) => v !== val)
          : [...selectedValues, val];

        onChange?.(next);
        return;
      }

      onChange?.(val);
      setIsOpen(false);
    },
    [multiple, selectedValues, onChange],
  );

  return {
    isOpen,
    selectedValues,
    open,
    close,
    toggle,
    selectValue,
  };
}
