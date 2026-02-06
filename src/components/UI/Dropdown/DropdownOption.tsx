import clsx from "clsx";
import type { DropdownOptionItemProps } from "./types";

type Props = DropdownOptionItemProps & { highlighted?: boolean };

const DropdownOptionItem = (props: Props): React.ReactElement => {
  const { option, selected, highlighted, onClick, renderOption } = props;
  const disabled = option.disabled;

  return (
    <li
      onClick={!disabled ? onClick : undefined}
      className={clsx(
        "px-3 py-2 text-sm",
        disabled ? "cursor-not-allowed text-gray-400" : "cursor-pointer",
        highlighted && "bg-gray-100",
        selected && !disabled && "bg-green-50",
      )}
    >
      {renderOption
        ? renderOption(option, { selected, highlighted: !!highlighted })
        : option.label}
    </li>
  );
};

export default DropdownOptionItem;
