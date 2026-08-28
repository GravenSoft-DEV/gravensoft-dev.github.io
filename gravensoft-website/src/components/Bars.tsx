import { Link } from "react-router-dom";
import { IsRouteActive } from "../shared/Utils";
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
          <nav className={`flex gap-8 text-sm font-medium ${Colors.textMutedNav}`}>
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
        <div className="w-full h-50 bg-slate-950 flex flex-row justify-center gap-10 py-14">
          <p>Legal</p>
          <p>Legal</p>
        </div>
      </footer>
    </>
  );
}