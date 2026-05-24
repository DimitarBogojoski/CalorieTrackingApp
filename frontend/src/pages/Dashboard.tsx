import type { Macro, Meal } from "../types/types";

export function Dashboard() {

    const consumed = 1420;
    const dailyGoal = 2000;
    const remaining = dailyGoal - consumed;
    const progress = (consumed / dailyGoal) * 100;

    const macros: Macro[] = [
        { name: "Protein", current: 78, goal: 150, color: "#4ECDC4" },
        { name: "Carbs", current: 165, goal: 250, color: "#45B7AA" },
        { name: "Fats", current: 52, goal: 65, color: "#81E6D9" },
    ];

    const meals: Meal[] = [
        { type: "Breakfast", name: "Oatmeal & Berries", calories: 320 },
        { type: "Lunch", name: "Grilled Chicken Salad", calories: 450 },
        { type: "Snack", name: "Apple & Almonds", calories: 180 },
        { type: "Dinner", name: "Salmon & Vegetables", calories: 470 },
    ];


    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="max-w-md mx-auto">
                <div className="p-6 pb-4">
                    <h2 className="text-xl font-semibold text-foreground">Good Morning, Alex</h2>
                    <p className="text-sm text-muted-foreground">Friday, May 23, 2026</p>
                </div>

                <div className="px-6 mb-6">
                    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                        <div className="flex items-center justify-center mb-6">
                            <div className="relative w-40 h-40">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="70"
                                        stroke="#E5F8F6"
                                        strokeWidth="12"
                                        fill="none"
                                    />
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="70"
                                        stroke="#45B7AA"
                                        strokeWidth="12"
                                        fill="none"
                                        strokeDasharray={`${2 * Math.PI * 70}`}
                                        strokeDashoffset={`${2 * Math.PI * 70 * (1 - progress / 100)}`}
                                        strokeLinecap="round"
                                    />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="text-3xl font-semibold text-foreground">{consumed}</div>
                                    <div className="text-xs text-muted-foreground">/ {dailyGoal} cal</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Consumed</div>
                                <div className="text-lg font-semibold text-foreground">{consumed}</div>
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Remaining</div>
                                <div className="text-lg font-semibold text-primary">{remaining}</div>
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Goal</div>
                                <div className="text-lg font-semibold text-foreground">{dailyGoal}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 mb-6">
                    <div className="grid grid-cols-3 gap-3">
                        {macros.map((macro) => {
                            const macroProgress = (macro.current / macro.goal) * 100;

                            return (
                                <div
                                    key={macro.name}
                                    className="bg-card rounded-xl p-4 shadow-sm border border-border"
                                >
                                    <div className="text-xs text-muted-foreground mb-2">{macro.name}</div>
                                    <div className="text-base font-semibold text-foreground mb-2">
                                        {macro.current}g
                                    </div>

                                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all"
                                            style={{
                                                width: `${Math.min(macroProgress, 100)}%`,
                                                backgroundColor: macro.color,
                                            }}
                                        />
                                    </div>

                                    <div className="text-xs text-muted-foreground mt-1">of {macro.goal}g</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="px-6 mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-3">Today's Meals</h3>

                    <div className="space-y-2">
                        {meals.map((meal, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl p-4 shadow-sm border border-border flex items-center justify-between"
                            >
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">{meal.type}</div>
                                    <div className="text-sm font-medium text-foreground">{meal.name}</div>
                                </div>

                                <div className="text-sm font-semibold text-primary">{meal.calories} cal</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}