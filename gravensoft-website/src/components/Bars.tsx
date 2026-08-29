import { Link } from "react-router-dom";
import { IsRouteActive } from "../shared/Utils";
import { LinkColumns } from "../data/hyperlinks"
import { ROUTES } from "../data/routes";
import Colors from "../shared/Colors";

interface LabelProps {
  children: string;
  path: string;
}

const Label = ({ children, path }: LabelProps) => (
  <Link to={path}>
    <span className={`${IsRouteActive(path) ? `${Colors.textAccent} ${Colors.glowTextGreen}` : ''} ${Colors.textAccentHover} duration-250 transition-all`}>
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
              ROUTES.filter((route) => route.name && route.path !== "*").map((route) => (
                <Label key={route.path} path={route.path}>{`${route.name}`}</Label>
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
        <div className="w-full flex flex-col not-lg:items-center lg:flex-row lg:justify-center gap-24 px-8 lg:px-0 py-16">
          <p style={{ textAlign: "center" }}>
            © 2026 Lovingly made by the GravenSoft Team. All Rights Reserved.
          </p>
          <div className="flex flex-row gap-16 lg:gap-24">
            {LinkColumns.map(([title, links]) => (
              <div key={title} className="flex flex-col gap-2">
                <span className="font-bold">{title}</span>
                {links.map((hyperlink) => (
                  <a
                    key={hyperlink.link}
                    className="duration-75 hover:translate-x-1 text-purple-300 hover:text-white"
                    href={hyperlink.link}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {hyperlink.name}
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