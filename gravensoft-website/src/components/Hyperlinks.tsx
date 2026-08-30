import { Link } from "react-router-dom";
import type { HyperlinkSchema } from "../data/hyperlinks";
import { Icons } from "../shared/Icons";

export function TextHyperlink({
    showHyperlinkIcon = true,
    ...hyperlinkProps
    }: HyperlinkSchema & { showHyperlinkIcon?: boolean }) {
    
    const { name, link, icon, isRoute } = hyperlinkProps;
    
    const className = "duration-75 hover:translate-x-1 text-purple-300 hover:text-white flex flex-row items-center gap-2";
        const linkInner = (
            <>
                {icon ? <div style={{ backgroundImage: `url("${icon}")` }} className="h-4 w-4 shrink-0 bg-cover bg-center bg-no-repeat brightness-0 invert"/> : null}
                {name}
                {showHyperlinkIcon ? <div style={{ backgroundImage: `url("${Icons.linkIcon}")` }} className="h-3 w-3 shrink-0 bg-cover bg-center bg-no-repeat"/> : null}
            </>
        );

        if (isRoute) {
            return (
                <Link to={link} className={className} rel="noreferrer noopener">{linkInner}</Link>
            );
        }

        return (
            <a href={link} className={className} rel="noreferrer noopener" target="_blank">{linkInner}</a>
        );
}