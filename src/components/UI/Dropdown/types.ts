import { type ReactNode } from "react";

export type DropdownOptions = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type RenderOptionState = {
  selected: boolean;
  highlighted: boolean;
};

export type DropDownProps = {
  className?: string;
  label?: string;
  options: DropdownOptions[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  searchable?: boolean;
  usePortal?: boolean;
  placeholder?: string;
  renderOption?: (
    option: DropdownOptions,
    state: RenderOptionState,
  ) => ReactNode;
};

export type DropdownMenuProps = {
  anchorRef: React.RefObject<HTMLElement | null>;
  options: DropdownOptions[];
  selectedValues: string[];
  isOpen: boolean;
  multiple: boolean;
  searchable: boolean;
  usePortal: boolean;
  renderOption?: (
    option: DropdownOptions,
    state: RenderOptionState,
  ) => ReactNode;
  onSelect: (value: string) => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
};

export type DropdownOptionItemProps = {
  option: DropdownOptions;
  selected: boolean;
  onClick: () => void;
  renderOption?: (
    option: DropdownOptions,
    state: RenderOptionState,
  ) => ReactNode;
};
