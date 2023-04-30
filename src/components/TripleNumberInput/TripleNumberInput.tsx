import { useState, useCallback } from "react";
import SimpleNumberInput from "../SimpleNumberInput";
import { SimpleNumberInputProps } from "../SimpleNumberInput/SimpleNumberInput";
import "./TripleNumberInput.css";

export interface TripleNumberInputProps {
  label: string;
  values: [number, number, number];
  onChanges: (values: [number, number, number]) => void;
  allowNegative?: boolean;
  allowDecimal?: boolean;
  min?: number;
  max?: number;
}

export function TripleNumberInput({
  label,
  values: initialValues,
  onChanges,
  allowNegative = false,
  allowDecimal = false,
  min = 4,
  max = 62,
}: TripleNumberInputProps) {
  const [values, setValues] = useState<[number, number, number]>(initialValues);

  const handleInputChange = useCallback(
    (index: 0 | 1 | 2, value: number) => {
      const newValues: [number, number, number] = [...values];
      newValues[index] = value;

      setValues(newValues);
      onChanges(newValues);
    },
    [values, onChanges],
  );

  const sharedInputProps: Omit<SimpleNumberInputProps, "label" | "value" | "onChanges"> = {
    allowNegative,
    allowDecimal,
    min,
    max,
  };

  return (
    <div className="grow padded align-center triple-input">
      <label className="flex-horizontal grow">
        <div className="single-line">{label}</div>
        <SimpleNumberInput
          {...sharedInputProps}
          label="x:"
          value={values[0]}
          onChanges={(value) => handleInputChange(0, value || min)}
        />
        <SimpleNumberInput
          {...sharedInputProps}
          label="y:"
          value={values[1]}
          onChanges={(value) => handleInputChange(1, value || min)}
        />
        <SimpleNumberInput
          {...sharedInputProps}
          label="z:"
          value={values[2]}
          onChanges={(value) => handleInputChange(2, value || min)}
        />
      </label>
    </div>
  );
}
