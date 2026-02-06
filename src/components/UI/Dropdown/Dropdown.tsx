import { useRef } from "react";
import clsx from "clsx";

import { DropdownTrigger } from "./DropdownTrigger";
import { DropdownMenu } from "./DropdownMenu";
import { useDropdownState } from "../../../hooks/useDropdownState";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { type DropDownProps } from "./types";

export function Dropdown(props: DropDownProps) {
  const {
    options,
    value,
    onChange,
    multiple = false,
    searchable = false,
    usePortal = true,
    placeholder = "Select...",
    renderOption,
    className,
  } = props;

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const dropdown = useDropdownState({
    value,
    multiple,
    onChange,
  });

  useOutsideClick([triggerRef, menuRef], dropdown.close, dropdown.isOpen);

  const selectedLabels = options
    .filter((opt) => dropdown.selectedValues.includes(opt.value))
    .map((opt) => opt.label);

  return (
    <div className={clsx("relative inline-block w-full", className)}>
      <DropdownTrigger
        ref={triggerRef}
        labels={selectedLabels}
        placeholder={placeholder}
        onClick={dropdown.toggle}
      />

      <DropdownMenu
        menuRef={menuRef}
        anchorRef={triggerRef}
        options={options}
        selectedValues={dropdown.selectedValues}
        isOpen={dropdown.isOpen}
        multiple={multiple}
        searchable={searchable}
        usePortal={usePortal}
        renderOption={renderOption}
        onSelect={dropdown.selectValue}
      />
    </div>
  );
}
