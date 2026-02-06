import { forwardRef } from "react";
import clsx from "clsx";

type Props = {
  labels: string[];
  placeholder: string;
  onClick?: () => void;
};

export const DropdownTrigger = forwardRef<HTMLButtonElement, Props>(
  function DropdownTrigger({ labels, placeholder, onClick }, ref) {
    const hasValue = labels.length > 0;

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={clsx(
          "flex w-full items-center justify-between",
          "rounded border border-gray-300 bg-white px-3 py-2",
          "text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
        )}
      >
        <span className={!hasValue ? "text-gray-400" : undefined}>
          {hasValue ? labels.join(", ") : placeholder}
        </span>
        <span className="ml-2 text-gray-400">▾</span>
      </button>
    );
  },
);
