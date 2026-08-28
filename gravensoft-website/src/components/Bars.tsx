import { Link } from "react-router-dom";
import { IsRouteActive } from "../shared/Utils";
import { LinkColumns } from "../data/hyperlinks"
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
      <header className={`w-full h-16 fixed z-1 top-0 left-0 justify-center items-center flex bg-slate-900 text-gray-100 border-b border-gray-500`}>
        <div className="w-full py-8 flex justify-between items-center max-w-6xl">
          GravenSoft
          <nav className={`flex gap-12 text-sm font-medium ${Colors.textMutedNav}`}>
            <Label path="/home">Home</Label>
            <Label path="/portfolio">Portfolio</Label>
            <Label path="/blogs">Blogs</Label>
          </nav>
        </div>
      </header>
    </>
  );
}

export function FooterBar() {
  return (
    <>
      <footer className={`w-full grow flex-col bg-slate-950 text-gray-100 border-t border-gray-500`}>
        <div className="w-full h-50 bg-slate-950 flex flex-row justify-center gap-24 py-8 mb-16">
          <p>© 2026 Lovingly made by the GravenSoft Team. All Rights Reserved.</p>
          {
            LinkColumns.map(([title, links]) => (
              <div className="flex flex-col">
                <b>{title}</b>
                <br></br>
                {
                  links.map((hyperlink) => (
                    <a href={`${hyperlink.link}`} rel="noreferrer noopenner" target="_blank">{hyperlink.name}</a>
                  ))
                }
              </div>
            ))
          }
        </div>
      </footer>
    </>
  );
}