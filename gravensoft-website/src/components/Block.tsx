import type { ReactNode } from "react";

interface BlockProps {
    children?: ReactNode;
    classOverride?: string;
    borderVisible?: boolean;
}

export default function Block({children, classOverride, borderVisible = true}: BlockProps) {
    return (
        <div className={`w-full flex flex-col justify-center items-center ${borderVisible ? `border-b border-gray-500` : null} ${classOverride}`}>
            <div className={`w-full h-full max-w-6xl py-16 sm:py-24 px-8 xl:px-0`}>
                {children}
            </div>
        </div>
    );
}