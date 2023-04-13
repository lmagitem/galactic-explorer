export interface SimpleNumberInputProps {
  label: string;
  initialValue: string;
  onChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SimpleNumberInput({ label, initialValue, onChanges }: SimpleNumberInputProps) {
  return (
    <div className="grow padded align-center">
      <label className="grow">
        {label}
        <input
          type="tel"
          className="text-input"
          defaultValue={initialValue}
          onChange={onChanges}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          pattern="^-?[0-9]\d*\.?\d*$"
        />
      </label>
    </div>
  );
}
