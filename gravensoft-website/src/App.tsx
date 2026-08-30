import { AppRouter } from './components/AppRouter'
import './assets/stylesheets/style.css'
import { Header, Footer } from './components/Bars';
import PageWrapper from './components/PageWrapper';

export default function App() {
  return (
    <>
    <div className="relative flex flex-col min-h-screen items-center justify-start bg-black text-gray-100 overflow-x-hidden scrollbar-none selection:bg-purple-300/30">
      <Header />
      <PageWrapper>
        <AppRouter />
      </PageWrapper>
      <Footer />
    </div>
    </>
  );
}