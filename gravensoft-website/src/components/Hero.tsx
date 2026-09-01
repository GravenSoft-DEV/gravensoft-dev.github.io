import type { ReactNode } from "react";
import Block from "./Block";

interface HeroProps {
    className?: string;
    children?: ReactNode;
    background?: ReactNode;
    fade?: boolean;
}

export default function Hero({ className, children, background, fade }: HeroProps) {
    return (
      <Block className={`relative bg-[rgba(19,13,28,1)] min-h-svh`}>
        { background }
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none mix-blend-difference">
            <div className={`relative w-full px-4 sm:px-0 pointer-events-auto ${className}`}>
                {children}
            </div>
        </div>
        { fade ? <div className="pointer-events-none z-10 absolute left-0 bottom-0 w-full h-full bg-linear-to-b from-black/0 to-250% to-black flex items-center justify-center">
        </div> : null }
      </Block>
    )
}