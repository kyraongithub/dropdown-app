import clsx from "clsx";
import { useMemo, useState } from "react";
import { useDropdownPosition } from "../../../hooks/useDropdownPosition";
import { DropdownOptionItem } from "./DropdownOption";
import { DropdownPortal } from "./DropdownPortal";
import { type DropdownMenuProps } from "./types";

export function DropdownMenu({
  menuRef,
  options,
  selectedValues,
  isOpen,
  searchable,
  renderOption,
  onSelect,
  anchorRef,
  usePortal,
}: DropdownMenuProps) {
  const [query, setQuery] = useState("");
  const effectiveQuery = isOpen ? query : "";

  const styles = useDropdownPosition(anchorRef, menuRef, isOpen);

  const filteredOptions = useMemo(() => {
    if (!searchable || !effectiveQuery) return options;

    const q = effectiveQuery.toLowerCase();
    return options.filter((opt) => opt.label.toLowerCase().includes(q));
  }, [options, effectiveQuery, searchable]);

  if (!isOpen) return null;

  const content = (
    <div
      ref={menuRef}
      style={styles}
      className={clsx(
        "z-9999 w-full",
        "rounded border border-gray-200 bg-white shadow-lg",
      )}
    >
      {searchable && (
        <div className="border-b px-2 py-1 flex items-center">
          <img
            src="./icons/search.svg"
            alt="search"
            className="w-4 opacity-25"
          />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent px-2 py-1 text-sm border-0 outline-none focus:border-0 focus:outline-none focus:ring-0"
          />
          {query !== "" && (
            <img
              src="./icons/cross.svg"
              alt="search"
              className="w-4 opacity-25 mr-4 cursor-pointer"
              onClick={() => setQuery("")}
            />
          )}
        </div>
      )}

      <ul
        tabIndex={-1}
        className="max-h-60 overflow-auto py-1 focus:outline-none"
      >
        {filteredOptions.length === 0 && (
          <li className="px-3 py-2 text-sm text-gray-400">No results</li>
        )}

        {filteredOptions.map((option) => {
          const isSelected = selectedValues.includes(option.value);

          return (
            <DropdownOptionItem
              key={option.value}
              option={option}
              selected={isSelected}
              onClick={() => onSelect(option.value)}
              renderOption={renderOption}
            />
          );
        })}
      </ul>
    </div>
  );

  if (usePortal) {
    return <DropdownPortal>{content}</DropdownPortal>;
  }

  return content;
}
