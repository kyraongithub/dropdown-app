import { forwardRef } from "react";
import clsx from "clsx";
import Label from "../Label";

type Props = {
  labels: string[];
  onClick?: () => void;
  onDeselect?: (value: string) => void;
  multiple?: boolean;
  outlined?: boolean;
};

export const DropdownTrigger = forwardRef<HTMLButtonElement, Props>(
  function DropdownTrigger(
    { labels, onClick, onDeselect, multiple, outlined },
    ref,
  ) {
    const hasValue = labels.length > 0;

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={clsx(
          "flex w-full items-center justify-between",
          "rounded border border-gray-300 px-3 py-2",
          "text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          !outlined && "bg-gray-300",
          outlined && "bg-white",
        )}
      >
        <span className={!hasValue ? "text-gray-400" : undefined}>
          {hasValue ? (
            <span className="flex gap-2">
              {labels.map((label: string, index: number) =>
                multiple ? (
                  <Label className="flex gap-1 items-center" key={index}>
                    {label}{" "}
                    <img
                      src="./icons/cancel.svg"
                      alt="cancel"
                      className="w-4 h-4 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeselect?.(label);
                      }}
                    />
                  </Label>
                ) : (
                  label
                ),
              )}
            </span>
          ) : (
            ""
          )}
        </span>
        <span className="ml-2 text-gray-400">▾</span>
      </button>
    );
  },
);
