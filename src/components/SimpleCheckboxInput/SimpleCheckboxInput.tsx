import "./SimpleCheckboxInput.css";

export interface SimpleCheckboxInputProps {
  label: string;
  checked: boolean;
  onChanges: (status: boolean) => void;
}

export function SimpleCheckboxInput({ label, checked, onChanges }: SimpleCheckboxInputProps) {
  return (
    <div className="grow padded align-center">
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={() => undefined}
      />
      <label className="grow" onClick={() => onChanges(!checked)}>
        {label}
      </label>
    </div>
  );
}
