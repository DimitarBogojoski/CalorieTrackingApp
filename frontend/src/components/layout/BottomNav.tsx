import { Home, PlusCircle, Calculator, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
            <div className="max-w-md mx-auto px-6 py-3">
                <div className="flex items-center justify-around">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
                            location.pathname === "/dashboard"
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        <Home className="w-6 h-6" />
                        <span className="text-xs font-medium">Dashboard</span>
                    </button>

                    <button
                        onClick={() => navigate("/food-entry")}
                        className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
                            location.pathname === "/food-entry"
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        <PlusCircle className="w-6 h-6" />
                        <span className="text-xs font-medium">Add Food</span>
                    </button>

                    <button
                        onClick={() => navigate("/calculator")}
                        className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
                            location.pathname === "/calculator"
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        <Calculator className="w-6 h-6" />
                        <span className="text-xs font-medium">Calculator</span>
                    </button>

                    <button
                        onClick={() => navigate("/profile")}
                        className="flex flex-col items-center gap-1 py-2 px-4 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                        <User className="w-6 h-6" />
                        <span className="text-xs font-medium">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    );
}