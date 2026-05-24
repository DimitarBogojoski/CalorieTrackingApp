import {
    ChevronRight,
    Target,
    TrendingUp,
    Calendar,
    Bell,
    Lock,
    HelpCircle,
    LogOut,
    Edit,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Profile() {
    const navigate = useNavigate();

    const stats = [
        { label: "Day Streak", value: "12", icon: Calendar, color: "#45B7AA" },
        { label: "Meals Logged", value: "248", icon: TrendingUp, color: "#4ECDC4" },
        { label: "Goal Progress", value: "78%", icon: Target, color: "#81E6D9" },
    ];

    const settingsSections = [
        {
            title: "Account",
            items: [
                { label: "Edit Profile", icon: Edit },
                { label: "Notifications", icon: Bell },
                { label: "Privacy & Security", icon: Lock },
            ],
        },
        {
            title: "Support",
            items: [{ label: "Help Center", icon: HelpCircle }],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-md mx-auto">
                <div className="p-6 pb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-foreground">Profile</h2>
                </div>

                <div className="px-6 mb-6">
                    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                                AJ
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground">Alex Johnson</h3>
                                <p className="text-sm text-muted-foreground">alex.johnson@email.com</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-xl font-semibold text-foreground">70 kg</div>
                                    <div className="text-xs text-muted-foreground">Weight</div>
                                </div>
                                <div>
                                    <div className="text-xl font-semibold text-foreground">170 cm</div>
                                    <div className="text-xs text-muted-foreground">Height</div>
                                </div>
                                <div>
                                    <div className="text-xl font-semibold text-foreground">28 yrs</div>
                                    <div className="text-xs text-muted-foreground">Age</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-3">Your Stats</h3>
                    <div className="grid grid-cols-3 gap-3">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="bg-card rounded-xl p-4 shadow-sm border border-border text-center"
                                >
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                                        style={{ backgroundColor: `${stat.color}20` }}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: stat.color }} />
                                    </div>
                                    <div className="text-xl font-semibold text-foreground mb-1">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="px-6 mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-3">Current Goals</h3>
                    <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <div className="text-sm font-medium text-foreground">Daily Calorie Goal</div>
                                <div className="text-xs text-muted-foreground">Maintain weight</div>
                            </div>
                            <div className="text-xl font-semibold text-primary">2,000 cal</div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
                            <div>
                                <div className="text-xs text-muted-foreground mb-1">Protein</div>
                                <div className="text-sm font-semibold text-foreground">150g</div>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground mb-1">Carbs</div>
                                <div className="text-sm font-semibold text-foreground">250g</div>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground mb-1">Fats</div>
                                <div className="text-sm font-semibold text-foreground">65g</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 mb-6">
                    {settingsSections.map((section, idx) => (
                        <div key={idx} className="mb-6">
                            <h3 className="text-base font-semibold text-foreground mb-3">{section.title}</h3>
                            <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
                                {section.items.map((item, itemIdx) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            key={itemIdx}
                                            className={`w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors ${
                                                itemIdx < section.items.length - 1 ? "border-b border-border" : ""
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className="w-5 h-5 text-muted-foreground" />
                                                <span className="text-sm font-medium text-foreground">{item.label}</span>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="px-6 mb-6">
                    <button
                        onClick={() => navigate("/")}
                        className="w-full flex items-center justify-center gap-2 bg-destructive/10 text-destructive py-3 rounded-xl font-medium hover:bg-destructive/20 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>

                <div className="px-6 mb-6 text-center">
                    <p className="text-xs text-muted-foreground">Version 1.0.0</p>
                </div>
            </div>
        </div>
    );
}