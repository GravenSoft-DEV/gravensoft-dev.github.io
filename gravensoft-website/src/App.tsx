import { AppRouter } from './components/AppRouter'
import './assets/stylesheets/style.css'
import { FooterBar, HeaderBar } from './components/Bars';

export default function App() {
  return (
    <>
    <div className="relative flex flex-col min-h-screen items-center justify-start bg-black text-gray-100 overflow-x-hidden scrollbar-none selection:bg-purple-300/30">
      <HeaderBar/>
      <div className={`mt-30 relative z-0 flex flex-col w-full items-center md:max-w-8xl mx-auto`}>
        <AppRouter />
      </div>
      <FooterBar />
    </div>
    </>
  );
}