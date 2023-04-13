export interface SimpleTextInputProps {
  label: string;
  initialValue: string;
  onChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SimpleTextInput({ label, initialValue, onChanges }: SimpleTextInputProps) {
  return (
    <div className="grow padded align-center">
      <label className="grow">
        {label}
        <input type="text" className="text-input" value={initialValue} onChange={onChanges} />
      </label>
    </div>
  );
}
