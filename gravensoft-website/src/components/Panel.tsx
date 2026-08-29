import type { ReactNode } from "react";

interface PanelProps {
    children?: ReactNode;
    classOverride?: string;
}

export default function Panel({children, classOverride}: PanelProps) {
  return (
    <>
      <div className={`bg-gray-400 rounded-2xl ${classOverride}`}>
        {children}
      </div>
    </>
  );
}