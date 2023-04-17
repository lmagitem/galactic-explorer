export interface SimpleTextInputProps {
  label: string;
  value: string;
  onChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SimpleTextInput({ label, value, onChanges }: SimpleTextInputProps) {
  return (
    <div className="grow padded align-center">
      <label className="grow">
        {label}
        <input type="text" className="text-input" value={value} onChange={onChanges} />
      </label>
    </div>
  );
}
