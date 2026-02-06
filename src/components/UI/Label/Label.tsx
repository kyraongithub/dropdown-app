import React from "react";
import type { LabelProps } from "./type";
import clsx from "clsx";

const Label = (props: LabelProps): React.ReactElement => {
  const { children, className } = props;
  return (
    <div className={clsx("bg-gray-100 rounded-full p-2", className)}>
      {children}
    </div>
  );
};

export default Label;
