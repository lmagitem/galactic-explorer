export interface SimpleCheckboxInputProps {
  label: string;
  checked: boolean;
  onChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SimpleCheckboxInput({ label, checked, onChanges }: SimpleCheckboxInputProps) {
  return (
    <div className="grow padded align-center">
      <label className="grow">
        {label}
        <input type="checkbox" className="checkbox-input" checked={checked} onChange={onChanges} />
      </label>
    </div>
  );
}
