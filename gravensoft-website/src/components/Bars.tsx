import { Link } from "react-router-dom";
import { CheckIfRouteActive } from "../shared/Utils";
import Colors from "../shared/Colors";

interface LabelProps {
  children: string;
  path: string;
}

const Label = ({ children, path }: LabelProps) => (
  <Link to={path}>
    <span className={`${CheckIfRouteActive(path) ? `${Colors.textAccent} ${Colors.glowTextGreen}` : ''} ${Colors.textAccentHover} duration-250 transition-all`}>
      {`${children}`}
    </span>
  </Link>
);

export function HeaderBar() {
  return (
    <>
      <header className={`w-full h-15 fixed z-1 top-0 left-0 justify-center items-center flex bg-slate-900 text-gray-100`}>
        <div className="w-full py-8 flex justify-between items-center max-w-5xl">
          GravenSoft
          <nav className={`flex gap-6 text-sm font-medium ${Colors.textMutedNav}`}>
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
      <footer className={`w-full mt-auto justify-center items-center flex bg-slate-900 text-gray-100`}>
        <div className="w-full py-8 flex justify-center items-center max-w-5xl">
          Lovingly made by the GravenSoft Team.
        </div>
      </footer>
    </>
  );
}