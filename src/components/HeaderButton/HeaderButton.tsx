import "./HeaderButton.css";

export interface HeaderButtonProps {
  title: string;
  active: boolean;
}

export function HeaderButton({ title, active }: HeaderButtonProps) {
  return (
    <div className={(active ? "active-button " : "") + "grow padded button"}>
      <h3>{title}</h3>
    </div>
  );
}
