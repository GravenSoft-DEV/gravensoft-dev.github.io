import { Link } from "react-router-dom";
import type { HyperlinkSchema } from "../data/hyperlinks";
import { Icons } from "../shared/Icons";

export function TextHyperlink({name, link, icon, isRoute}: HyperlinkSchema) {
    const className = "duration-75 hover:translate-x-1 text-purple-300 hover:text-white flex flex-row items-center gap-2";
        const linkInner = (
            <>
                {icon ? '' : null}
                {name}
                <div style={{ backgroundImage: `url("${Icons.linkIcon}")` }} className="h-3 w-3 shrink-0 bg-cover bg-center bg-no-repeat"/>
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