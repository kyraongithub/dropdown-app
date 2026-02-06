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
    renderOption,
    className,
    label,
    outlined = true,
  } = props;

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const dropdown = useDropdownState({
    value,
    multiple,
    onChange,
    options,
  });

  useOutsideClick([triggerRef, menuRef], dropdown.close, dropdown.isOpen);

  const selectedLabels = options
    .filter((opt) => dropdown.selectedValues.includes(opt.value))
    .map((opt) => opt.label);

  return (
    <div className={clsx("relative gap-3 w-full flex items-center", className)}>
      <p className="whitespace-nowrap shrink-0">{label ? label : "label"}</p>
      <>
        <DropdownTrigger
          outlined={outlined}
          ref={triggerRef}
          labels={selectedLabels}
          onClick={dropdown.toggle}
          onDeselect={dropdown.deselect}
          multiple={multiple}
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
      </>
    </div>
  );
}
