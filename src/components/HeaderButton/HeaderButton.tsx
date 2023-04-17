export interface HeaderButtonProps {
  title: string;
  active: boolean;
  onClick?: () => void;
}

export function HeaderButton({ title, active, onClick }: HeaderButtonProps) {
  return (
    <div
      className={(active ? "active-button " : "") + "grow padded button"}
      onClick={() => {
        if (onClick) onClick();
        setTimeout(() => window.dispatchEvent(new Event("resize")));
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}
