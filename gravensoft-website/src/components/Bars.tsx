import { Link } from "react-router-dom";
import { IsRouteActive } from "../shared/Utils";
import { LinkColumns } from "../data/hyperlinks"
import { ROUTES } from "../data/routes";
import Colors from "../shared/Colors";
import { Icons } from "../shared/Icons";

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

export function HeaderBar() {
  return (
    <>
      <header className={`w-full h-16 fixed z-1 top-0 left-0 justify-center items-center flex bg-[rgba(29,25,36,0.5)] text-gray-100 border-b border-gray-500 backdrop-blur-md`}>
        <div className="w-full py-8 flex justify-between items-center px-8 xl:px-0 md:max-w-6xl">
          <p className="font-bold">GravenSoft</p>
          <nav className={`flex gap-12 text-sm font-medium ${Colors.textMutedNav}`}>
            {
              ROUTES.filter((route) => route.name && route.path !== "*").map((route, index) => (
                <Tab key={route.path || `route-${index}`} path={route.path}>{`${route.name}`}</Tab>
              ))
            }
          </nav>
        </div>
      </header>
    </>
  );
}

export function FooterBar() {
  return (
    <>
      <footer className="w-full h-auto grow flex-col bg-[rgba(29,25,36,0.5)] text-gray-100 border-t border-gray-500">
        <div className="w-full flex flex-col not-lg:items-center lg:flex-row lg:justify-center gap-12 lg:gap-24 px-8 lg:px-0 py-12 lg:py-16">
          <p style={{ textAlign: "center" }}>
            © 2026 Lovingly made by the GravenSoft Team. All Rights Reserved.
          </p>
          <div className="flex flex-row gap-24 not-lg:w-full not-lg:justify-between not-lg:max-w-md">
            {LinkColumns.map(([title, links]) => (
              <div key={title} className="flex flex-col gap-2">
                <span className="font-bold">{title}</span>
                {links.map((hyperlink, index) => (
                  <a
                    key={`${hyperlink.link}-${index}`}
                    className="duration-75 hover:translate-x-1 text-purple-300 hover:text-white flex flex-row items-center gap-2"
                    href={hyperlink.link}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {hyperlink.name}
                    <div style={{ backgroundImage: `url("${Icons.linkIcon}")` }} className="h-3 w-3 shrink-0 bg-cover bg-center bg-no-repeat"></div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}