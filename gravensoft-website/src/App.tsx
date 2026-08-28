import { AppRouter } from './components/AppRouter'
import './assets/stylesheets/style.css'
import { FooterBar, HeaderBar } from './components/Bars';
import { IsRouteActive } from './shared/Utils';
import PageWrapper from './components/PageWrapper';

export default function App() {
  return (
    <>
    <div className="relative flex flex-col min-h-screen items-center justify-start bg-black text-gray-100 overflow-x-hidden scrollbar-none selection:bg-purple-300/30">
      <HeaderBar />
      { !IsRouteActive('/home') ? <div className='h-16'></div> : null }
      <PageWrapper>
        <AppRouter />
      </PageWrapper>
      <FooterBar />
    </div>
    </>
  );
}