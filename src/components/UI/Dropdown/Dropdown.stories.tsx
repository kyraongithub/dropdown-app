import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
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
};

export default meta;
type Story = StoryObj<typeof Dropdown>;
export const Single: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");

    return (
      <div className="w-64">
        <Dropdown
          options={options}
          value={value}
          onChange={(e) => setValue(e[0])}
          placeholder="Select option"
        />
      </div>
    );
  },
};
export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <div className="w-64">
        <Dropdown
          multiple
          options={options}
          value={value}
          onChange={(e: any) => setValue(e[0])}
          placeholder="Select options"
        />
      </div>
    );
  },
};
export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");

    return (
      <div className="w-64">
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
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <div className="w-64">
        <Dropdown
          multiple
          searchable
          options={options}
          value={value}
          onChange={(e: any) => setValue(e[0])}
          renderOption={(option, state) => (
            <div className="flex justify-between">
              <span>{option.label}</span>
              {state.selected && <span>✓</span>}
            </div>
          )}
        />
      </div>
    );
  },
};
