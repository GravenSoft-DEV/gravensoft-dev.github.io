import { Outlet } from "react-router-dom";
import PageWrapper from "@/components/app/PageWrapper";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

export default function DefaultLayout() {
    return (   
        <div className="relative flex flex-col min-h-screen items-center justify-start bg-black text-zinc-100 overflow-x-hidden scrollbar-none selection:bg-gray-600/50">
            <Header />
                <PageWrapper>
                    <Outlet />
                </PageWrapper>
            <Footer />
        </div>
    );
}