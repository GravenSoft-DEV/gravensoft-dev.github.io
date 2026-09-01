import type { ReactNode } from "react";

interface BlockProps {
    children?: ReactNode;
    className?: string;
    borderVisible?: boolean;
}

export default function Block({id, children, className, borderVisible = true}: BlockProps & {id?: string}) {
    return (
        <section id={id} className={`w-full flex flex-col justify-center items-center ${borderVisible ? `border-b border-gray-500` : ''} ${className}`}>
            <div className={`w-full h-full max-w-5xl py-12 sm:py-16 px-8 xl:px-0`}>
                {children}
            </div>
        </section>
    );
}