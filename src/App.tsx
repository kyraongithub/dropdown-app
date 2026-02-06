import { useState } from "react";
import { Dropdown } from "./components/UI/Dropdown";

function App() {
  const [value, setValue] = useState<string[]>([]);

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option with Icon" },
    { value: "3", label: "Long Long Option 3" },
    { value: "4", label: "Long Long Long Option 4" },
    { value: "5", label: "Long Long Long Long Option 5" },
    { value: "6", label: "Long Long Long Long Long Option 6" },
  ];

  return (
    <Dropdown
      multiple
      label="Select options"
      searchable
      options={options}
      className="w-100"
      value={value}
      onChange={(v) => setValue(v as string[])}
      renderOption={(option) => (
        <div className="flex justify-between">
          <span>{option.label}</span>
        </div>
      )}
    />
  );
}

export default App;
