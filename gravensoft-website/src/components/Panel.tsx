import type { JSX, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PanelProps {
    children?: ReactNode;
    className?: string;
}

interface HoverableProps {
    translate?: boolean;
    highlight?: boolean;
    translateOverride?: string;
    highlightOverride?: string;
    className?: string;
    children: (injectedClasses: string) => JSX.Element;
}

export function Panel({children, className='bg-gray-400'}: PanelProps) {
  return (
    <div className={`rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export function HoverPanel({ ...props }: PanelProps & HoverableProps) {
  const { children, className } = props;
  const { translate, highlight, translateOverride = 'hover:-translate-y-4', highlightOverride } = props;

  return (
    <Panel className={`${translate ? translateOverride : ''} ${highlight ? highlightOverride : ''} duration-75 ${className}`}>{children}</Panel>
  );
}

export function HoverableElement(props: HoverableProps) {
  const { 
    translate = true,
    translateOverride = 'hover:-translate-y-4', 
    highlight = false,
    highlightOverride = 'hover:bg-gray-100',
    className = '', 
  } = props;

  const activeDefaults = [
    translate ? translateOverride : '',
    highlight ? highlightOverride : ''
  ].filter(Boolean).join(' ');

  const dynamicClasses = twMerge(activeDefaults, className);

  return (
    <div>
      {props.children(dynamicClasses)}
    </div>
  );
}