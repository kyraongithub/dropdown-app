# Dropdown Component

A reusable dropdown component built with React and Tailwind CSS.

This component is designed to be flexible, lightweight, and easy to integrate into any React application. It supports single and multiple selection, optional search, custom option rendering, and portal-based rendering.

---

## Features

- Single and multiple selection
- Optional search input
- Custom option rendering
- Portal or non-portal rendering
- Handles long option lists
- Tailwind CSS styling only
- Storybook support for isolated testing

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Usage

### Basic Example

```tsx
import { useState } from "react";
import { Dropdown } from "@/components/UI/Dropdown";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];

export default function Example() {
  const [value, setValue] = useState("");

  return (
    <Dropdown
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select option"
    />
  );
}
```

---

### Multiple Selection

```tsx
const [value, setValue] = useState<string[]>([]);

<Dropdown multiple options={options} value={value} onChange={setValue} />;
```

---

### Searchable Dropdown

```tsx
<Dropdown searchable options={options} value={value} onChange={setValue} />
```

---

### Custom Option Rendering

```tsx
<Dropdown
  multiple
  searchable
  options={options}
  value={value}
  onChange={setValue}
  renderOption={(option, state) => (
    <div className="flex justify-between">
      <span>{option.label}</span>
      {state.selected && <span>✓</span>}
    </div>
  )}
/>
```

---

## Props

### `Dropdown`

| Prop           | Type                                                     | Description               |
| -------------- | -------------------------------------------------------- | ------------------------- | ----------------- |
| `options`      | `{ label: string; value: string; disabled?: boolean }[]` | Dropdown options          |
| `value`        | `string                                                  | string[]`                 | Selected value(s) |
| `onChange`     | `(value) => void`                                        | Change handler            |
| `multiple`     | `boolean`                                                | Enable multiple selection |
| `searchable`   | `boolean`                                                | Enable search input       |
| `usePortal`    | `boolean`                                                | Render menu in a portal   |
| `placeholder`  | `string`                                                 | Placeholder text          |
| `renderOption` | `(option, state) => ReactNode`                           | Custom option renderer    |

---

## Storybook

Run Storybook locally:

```bash
npm run storybook
```

Build Storybook for deployment:

```bash
npm run build-storybook
```

---

## Build

Build the project:

```bash
npm run build
```

---

## Notes

- Styling is handled entirely with Tailwind CSS.
- No external UI libraries are used.
- The component is designed to be consumed as a dependency in other React projects.
