import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";

export default function Layout() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="max-w-md mx-auto px-6 py-6 pb-24">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
}