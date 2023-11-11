import Tippy from "@tippyjs/react";
import "./DetailBox.css";

export interface DetailBoxProps {
  tooltip: string;
  title: string;
  contents: string;
}

export function DetailBox({ tooltip, title, contents }: DetailBoxProps) {
  return (
    <Tippy content={tooltip}>
      <div className="info-table-couple">
        <div className="info-table-cell-title">{title}</div>
        <div className="info-table-cell-hr"></div>
        <div className="info-table-cell-content">{contents}</div>
      </div>
    </Tippy>
  );
}
