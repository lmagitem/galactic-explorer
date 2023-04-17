import { useState } from "react";

export interface SimpleNumberInputProps {
  label: string;
  value: number | null;
  onChanges: (value: number | null) => void;
  allowNegative?: boolean;
  allowDecimal?: boolean;
}

export function SimpleNumberInput({
  label,
  value,
  onChanges,
  allowNegative = true,
  allowDecimal = true,
}: SimpleNumberInputProps) {
  const [inputValue, setInputValue] = useState(value === null ? "" : value.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;

    // Matches valid number patterns (including "-" and "." if allowed)
    const signPart = allowNegative ? "-?" : "";
    const decimalPart = allowDecimal ? "(\\.\\d*)?" : "(\\.\\d+)?";
    const regex = new RegExp(`^${signPart}\\d*${decimalPart}$`);

    if (value === "" || regex.test(value)) {
      setInputValue(value);

      const numberValue = value === "" ? null : parseFloat(value);
      if (numberValue === null || !isNaN(numberValue)) {
        onChanges(numberValue);
      }
    }
  };

  return (
    <div className="grow padded align-center">
      <label className="grow">
        {label}
        <input
          type="text"
          className="text-input"
          value={inputValue}
          onChange={handleChange}
          inputMode="decimal"
        />
      </label>
    </div>
  );
}
