import { Outlet } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import { Footer, Header } from "./Bars";

export default function DefaultLayout() {
    return (   
        <div className="relative flex flex-col min-h-screen items-center justify-start bg-black text-gray-100 overflow-x-hidden scrollbar-none selection:bg-purple-300/30">

            <Header />
                <PageWrapper>
                    <Outlet/>
                </PageWrapper>
            <Footer />
        </div>
    );
}