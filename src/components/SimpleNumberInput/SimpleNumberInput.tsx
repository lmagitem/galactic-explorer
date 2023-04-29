import { useEffect, useState } from "react";

export interface SimpleNumberInputProps {
  label: string;
  value: number | null;
  onChanges: (value: number | null) => void;
  allowNegative?: boolean;
  allowDecimal?: boolean;
  min?: number;
  max?: number;
}

export function SimpleNumberInput({
  label,
  value,
  onChanges,
  allowNegative = true,
  allowDecimal = true,
  min,
  max,
}: SimpleNumberInputProps) {
  const [inputValue, setInputValue] = useState(value === null ? "" : value.toString());

  // Update the inputValue state when the value prop changes
  useEffect(() => {
    setInputValue(value === null ? "" : value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;

    // Matches valid number patterns (including "-" and "." if allowed)
    const signPart = allowNegative ? "-?" : "";
    const decimalPart = allowDecimal ? "(\\.\\d*)?" : "(\\.\\d+)?";
    const regex = new RegExp(`^${signPart}\\d*${decimalPart}$`);

    if (value === "" || regex.test(value)) {
      setInputValue(value);

      const numberValue = value === "" ? null : parseFloat(value);
      if (numberValue === null) {
        onChanges(numberValue);
      } else if (!isNaN(numberValue)) {
        if (
          (max === undefined || numberValue <= max) &&
          (min === undefined || numberValue >= min)
        ) {
          onChanges(numberValue);
        } else if (max !== undefined && numberValue > max) {
          onChanges(max);
          setInputValue(`${max}`);
        } else if (min !== undefined && numberValue == 0) {
          onChanges(null);
          setInputValue("");
        } else if (min !== undefined && numberValue < min) {
          onChanges(min);
          setInputValue(`${max}`);
        }
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
