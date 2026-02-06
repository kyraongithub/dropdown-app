import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { type DropdownOptions } from "./types";

const options: DropdownOptions[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option with Icon" },
  { value: "3", label: "Long Long Option 3" },
  { value: "4", label: "Long Long Long Option 4" },
  { value: "5", label: "Disabled Option", disabled: true },
];

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown",
  component: Dropdown,
  argTypes: {
    label: {
      control: "text",
    },
    outlined: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
    searchable: {
      control: "boolean",
    },
    options: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;
export const Single: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");

    return (
      <div className="w-lg">
        <Dropdown
          options={options}
          value={value}
          onChange={(e) => setValue(e[0])}
        />
      </div>
    );
  },
};
export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <div className="w-lg">
        <Dropdown
          multiple
          options={options}
          value={value}
          onChange={(e) => setValue(e as string[])}
        />
      </div>
    );
  },
};
export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");

    return (
      <div className="w-lg">
        <Dropdown
          searchable
          options={options}
          value={value}
          onChange={(e) => setValue(e[0])}
        />
      </div>
    );
  },
};
export const CustomOption: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <div className="w-lg">
        <Dropdown
          multiple={args.multiple}
          searchable={args.searchable}
          options={args.options || options}
          value={value}
          outlined={args.outlined}
          label={args.label}
          onChange={(e: any) =>
            setValue(args.multiple ? (e as string[]) : e[0])
          }
          renderOption={(option) => (
            <div className="flex justify-between">
              <span>{option.label}</span>
            </div>
          )}
        />
      </div>
    );
  },
  args: {
    label: "Custom Option",
    multiple: true,
    searchable: true,
    outlined: true,
    options,
  },
};
