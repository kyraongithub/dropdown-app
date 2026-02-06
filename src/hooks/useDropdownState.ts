import { useCallback, useMemo, useState } from "react";
import type { DropdownOptions } from "../components/UI/Dropdown/types";

type Params = {
  value?: string | string[];
  multiple: boolean;
  onChange?: (value: string | string[]) => void;
  options?: DropdownOptions[];
};

const useDropdownState = ({ value, multiple, onChange, options }: Params) => {
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

  const deselect = (option: string) => {
    const selectedOption = options?.find((o) => o.label === option);

    if (selectedOption) {
      selectValue(selectedOption.value);
    }
  };

  return {
    isOpen,
    selectedValues,
    open,
    close,
    toggle,
    selectValue,
    deselect,
  };
};

export default useDropdownState;
