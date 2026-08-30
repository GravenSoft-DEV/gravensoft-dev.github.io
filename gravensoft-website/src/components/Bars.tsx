import { Link } from "react-router-dom";
import { IsRouteActive } from "../shared/Utils";
import { LinkColumns, type HyperlinkSchema } from "../data/hyperlinks"
import { HEADERROUTES } from "../data/routes";
import Colors from "../shared/Colors";
import { TextHyperlink } from "./Hyperlinks";

interface TabProps {
  children: string;
  path: string;
}

const Tab = ({ children, path }: TabProps) => (
  <Link to={path}>
    <span className={`${IsRouteActive(path) ? `${Colors.textAccent} ${Colors.glowTextGreen}` : ''} ${Colors.textAccentHover} duration-75 transition-all`}>
      {`${children}`}
    </span>
  </Link>
);

export function Header() {
  return (
    <header className={`w-full h-16 fixed z-1 top-0 left-0 justify-center items-center flex bg-[rgba(29,25,36,0.5)] text-gray-100 border-b border-gray-500 backdrop-blur-md`}>
      <div className="w-full py-8 flex justify-between items-center px-8 xl:px-0 md:max-w-6xl">
        <p className="font-bold">GravenSoft</p>
        <nav className={`flex gap-12 text-sm font-medium ${Colors.textMutedNav}`}>
          {
            HEADERROUTES.map((route, index) => (
              <Tab key={route.path || `route-${index}`} path={route.path}>{`${route.name}`}</Tab>
            ))
          }
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const ColumnLinks = (links: HyperlinkSchema[], classOverride: string, showTitle: boolean = false, title?: string) => {
    return (
      <div key={title} className={`${classOverride} flex flex-wrap not-sm:justify-center`}>
        { showTitle ? <span className="font-bold w-full text-center">{title}</span> : null}
        { links.map((hyperlink, index) => {
          return (
            <TextHyperlink showHyperlinkIcon={title != null && hyperlink.icon == null} key={`${hyperlink.link}-${index}`} name={hyperlink.name} link={hyperlink.link} icon={hyperlink.icon} isRoute={hyperlink.isRoute}/>
          );
        })}
      </div>
    );
  }

  return (
    <footer className="w-full h-auto grow flex-col bg-[#110f16] text-gray-100 border-t border-gray-500">
      <section className="w-full flex flex-col lg:flex-row not-lg:items-center mx-auto justify-between lg:max-w-6xl gap-12 lg:gap-24 px-8 xl:px-0 py-8 lg:py-8">
        <p style={{ textAlign: "center" }}> Made with 🤍 by the GravenSoft Team! </p>
        <div className="flex flex-col sm:flex-row gap-8 not-sm:items-center sm:gap-24 lg:px-0 not-lg:w-full not-lg:justify-between not-lg:max-w-md">
          { LinkColumns.filter( ([title]) => (title !== "Legal") ).map( ([title, links]) => (ColumnLinks(links, "flex flex-row sm:flex-col gap-4 sm:gap-2", true, title)) ) }
        </div>
      </section>

      <hr className="border-gray-800"/>
      
      <section className="w-full flex flex-col md:flex-row not-lg:items-center mx-auto justify-between lg:max-w-6xl gap-4 lg:gap-24 px-8 xl:px-0 py-8">
        <p style={{ textAlign: "center" }}> © 2026 GravenSoft LLC. All Rights Reserved. </p>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 not-md:w-full not-md:justify-between not-lg:max-w-md not-md:mx-auto">
          { LinkColumns.filter( ([title]) => (title == "Legal") ).map( ([, links]) => (ColumnLinks(links, "flex flex-row gap-8 justify-around mx-auto")) ) }
        </div>
      </section>
    </footer>
  );
}