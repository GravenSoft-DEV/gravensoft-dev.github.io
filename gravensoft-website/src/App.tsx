import { AppRouter } from './components/AppRouter'
import './assets/style/style.css'

export default function App() {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center w-full md:max-w-8xl mx-auto px-6">
        <AppRouter />
      </div>
    </>
  );
}