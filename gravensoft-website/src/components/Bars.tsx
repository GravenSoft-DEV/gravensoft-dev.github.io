import { Link } from "react-router-dom";
import { useIsRouteActive, useScrollOnTop } from "../shared/Utils";
import { LinkColumns, type HyperlinkSchema } from "../data/hyperlinks"
import { HEADERROUTES } from "../data/routes";
import Colors from "../shared/Colors";
import { TextHyperlink } from "./Hyperlinks";
import Button from "./Buttons";
import { HoverableElement } from "./Panel";
import Hamburger from "./Hamburger";
import { Magnetic } from "./motion-primitives/magnetic";

interface TabProps {
  children: string;
  path: string;
}

const Tab = ({ children, path }: TabProps) => (
  <Link to={path}>
    <span className={`${useIsRouteActive(path) ? `${Colors.textAccent} ${Colors.glowTextGreen}` : ''} ${Colors.textAccentHover} duration-75 transition-all font-bold`}>
      {`${children}`}
    </span>
  </Link>
);

export function Header() {
  const useBg:boolean = useScrollOnTop();
  const alwaysVisible:string = 'bg-zinc-950/75 border-b border-zinc-700 backdrop-blur-md';

  return (
    <>
      <div 
        className={`pointer-events-none fixed z-1 left-0 top-0 w-full h-32 bg-linear-to-t from-black/0 to-black/66 to-100% transition-opacity duration-500 ease-in-out ${
          useBg ? 'opacity-65 visible' : 'opacity-0 invisible'
        }`}
      />
      <header className={`transition-all w-full h-16 fixed z-1 top-0 left-0 justify-center items-center flex text-zinc-100 ${ !useBg ? alwaysVisible : `${alwaysVisible} sm:backdrop-blur-none sm:bg-zinc-950/0 sm:border-0 sm:border-zinc-700/0` }`}>
        <div className="w-full py-8 flex justify-between items-center px-8 xl:px-0 md:max-w-6xl">
          <p className="font-bold">GravenSoft</p>
          <nav className={`hidden sm:flex flex-row gap-12 text-sm font-medium ${Colors.textMutedNav}`}>
            {
              HEADERROUTES.map((route, index) => (
                <Tab key={route.path || `route-${index}`} path={route.path}>{`${route.name}`}</Tab>
              ))
            }
          </nav>
          <HoverableElement className="hidden sm:flex rounded-3xl duration-200 transition-all bg-white text-zinc-900" translateOverride="hover:-translate-y-0.5" highlight={true} highlightOverride="hover:shadow-[0px_10px_20px_1px_rgba(255,255,255,0.25)]">
            {(hoverClasses) => (
              <Magnetic>
                <Button className={`${hoverClasses} font-bold`} href="/contact">Contact</Button>
              </Magnetic>
            )}
          </HoverableElement>
          <Hamburger className="visible sm:hidden" />
        </div>
      </header>
    </>
  );
}

export function Footer() {
  const ColumnLinks = (links: HyperlinkSchema[], className: string, showTitle: boolean = false, title?: string) => {
    return (
      <div key={title} className={`${className} flex flex-wrap justify-center sm:justify-start`}>
        { showTitle ? <span className="font-bold w-full text-center sm:text-left">{title}</span> : null}
        { links.map((hyperlink, index) => {
          return (
            <TextHyperlink showHyperlinkIcon={title != null && hyperlink.icon == null} key={`${hyperlink.link}-${index}`} name={hyperlink.name} link={hyperlink.link} icon={hyperlink.icon} isRoute={hyperlink.isRoute}/>
          );
        })}
      </div>
    );
  }

  return (
    <footer className="w-full h-auto grow flex flex-col items-center bg-black text-zinc-100 border-t border-zinc-700">
      <section className="w-full flex flex-col lg:flex-row items-center lg:items-start mx-auto justify-between lg:max-w-6xl gap-12 lg:gap-24 px-8 xl:px-0 py-8 lg:py-8">
        <p style={{ textAlign: "center" }}> Made with 🤍 by the GravenSoft Team! </p>
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start sm:gap-24 lg:px-0 w-full justify-around lg:w-fit max-w-md">
          { LinkColumns.filter( ([title]) => (title !== "Legal") ).map( ([title, links]) => (ColumnLinks(links, "flex flex-row sm:flex-col gap-4 sm:gap-2", true, title)) ) }
        </div>
      </section>

      <hr className="border-zinc-800 w-full max-w-6xl"/>
      
      <section className="w-full flex flex-col md:flex-row items-center mx-auto justify-between lg:max-w-6xl gap-4 lg:gap-24 px-8 xl:px-0 py-8 pb-16">
        <p style={{ textAlign: "center" }}> © 2026 GravenSoft LLC. All Rights Reserved. </p>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 w-full md:w-fit justify-between items-center">
          { LinkColumns.filter( ([title]) => (title == "Legal") ).map( ([, links]) => (ColumnLinks(links, "flex flex-row gap-8 justify-around mx-auto")) ) }
        </div>
      </section>
    </footer>
  );
}