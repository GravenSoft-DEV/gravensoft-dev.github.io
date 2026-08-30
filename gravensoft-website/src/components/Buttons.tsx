import { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonSchema {
    href: string;
    children?: ReactNode;
    classOverride?: string;
}

export default function Button({ children, href, classOverride = "" }: ButtonSchema) {
    const className = `h-10 w-fit px-3 rounded-3xl flex flex-row items-center justify-center text-gray-950 bg-white cursor-pointer ${classOverride}`.trim();
    const isInternal = href.startsWith("#") || href.startsWith("/");

    if (isInternal) {
        return (
            <Link to={href} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
}