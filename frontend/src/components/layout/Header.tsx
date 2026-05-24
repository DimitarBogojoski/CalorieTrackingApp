import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case "/dashboard":
                return "Dashboard";
            case "/food-entry":
                return "Add Food";
            case "/calculator":
                return "Calculator";
            case "/profile":
                return "Profile";
            default:
                return "Calorie Tracker";
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
            <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
                <div>
                    <Link to="/dashboard" className="text-lg font-semibold text-foreground">
                        Calorie Tracker
                    </Link>
                    <p className="text-sm text-muted-foreground">{getTitle()}</p>
                </div>

                <Link
                    to="/"
                    className="rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground transition hover:opacity-90"
                >
                    Logout
                </Link>
            </div>
        </header>
    );
}