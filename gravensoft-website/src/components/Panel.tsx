import type { ReactNode } from "react";

interface PanelProps {
    children?: ReactNode;
    classOverride?: string;
}

interface HoverableProps {
    translate?: boolean;
    highlight?: boolean;
    translateOverride?: string;
    highlightOverride?: string;
}

export function Panel({children, classOverride='bg-gray-400'}: PanelProps) {
  return (
    <div className={`rounded-2xl ${classOverride}`}>
      {children}
    </div>
  );
}

export function HoverPanel({ ...props }: PanelProps & HoverableProps) {
  const { children, classOverride } = props;
  const { translate, highlight, translateOverride = 'hover:-translate-y-4', highlightOverride } = props;

  return (
    <Panel classOverride={`${translate ? translateOverride : ''} ${highlight ? highlightOverride : ''} duration-75 ${classOverride}`}>{children}</Panel>
  );
}