import clsx from "clsx";
import { type DropdownOptionItemProps } from "./types";

export function DropdownOptionItem({
  option,
  selected,
  highlighted,
  onClick,
  renderOption,
}: DropdownOptionItemProps & { highlighted?: boolean }) {
  const disabled = option.disabled;

  return (
    <li
      onClick={!disabled ? onClick : undefined}
      className={clsx(
        "px-3 py-2 text-sm",
        disabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer",
        highlighted && "bg-gray-100",
        selected && !disabled && "bg-blue-50",
      )}
    >
      {renderOption
        ? renderOption(option, { selected, highlighted: !!highlighted })
        : option.label}
    </li>
  );
}
