import { useState } from "react";
import { ArrowLeft, Search, Camera, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { FoodItem } from "../types/types";

export function FoodEntry() {
    const navigate = useNavigate();
    const [selectedMeal, setSelectedMeal] = useState<string>("Breakfast");
    const [portion, setPortion] = useState<number>(1);

    const mealTypes: string[] = ["Breakfast", "Lunch", "Dinner", "Snack"];

    const recentFoods: FoodItem[] = [
        { name: "Grilled Chicken Breast", calories: 165, protein: 31, carbs: 0, fats: 3.6 },
        { name: "Brown Rice", calories: 216, protein: 5, carbs: 45, fats: 1.8 },
        { name: "Broccoli", calories: 55, protein: 3.7, carbs: 11, fats: 0.6 },
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-md mx-auto">
                <div className="p-6 pb-4 flex items-center gap-4">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <h2 className="text-xl font-semibold text-foreground">Add Food</h2>
                </div>

                <div className="px-6 mb-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search for food..."
                            className="w-full pl-12 pr-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </div>
                </div>

                <div className="px-6 mb-6">
                    <button className="w-full bg-secondary text-foreground py-3 rounded-xl font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
                        <Camera className="w-5 h-5" />
                        Scan food with camera
                    </button>
                </div>

                <div className="px-6 mb-6">
                    <div className="text-sm font-medium text-foreground mb-3">Meal Type</div>
                    <div className="grid grid-cols-4 gap-2">
                        {mealTypes.map((meal) => (
                            <button
                                key={meal}
                                onClick={() => setSelectedMeal(meal)}
                                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                                    selectedMeal === meal
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-foreground hover:bg-secondary/80"
                                }`}
                            >
                                {meal}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="px-6 mb-6">
                    <div className="text-sm font-medium text-foreground mb-3">Portion Size</div>
                    <div className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-sm border border-border">
                        <button
                            onClick={() => setPortion(Math.max(0.5, portion - 0.5))}
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                        >
                            <Minus className="w-5 h-5 text-foreground" />
                        </button>

                        <div className="flex-1 text-center">
                            <div className="text-2xl font-semibold text-foreground">{portion}</div>
                            <div className="text-xs text-muted-foreground">
                                serving{portion !== 1 ? "s" : ""}
                            </div>
                        </div>

                        <button
                            onClick={() => setPortion(portion + 0.5)}
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                        >
                            <Plus className="w-5 h-5 text-foreground" />
                        </button>
                    </div>
                </div>

                <div className="px-6 mb-6">
                    <div className="text-sm font-medium text-foreground mb-3">Selected Food</div>
                    <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
                        <div className="flex gap-4">
                            <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🍗</span>
                            </div>

                            <div className="flex-1">
                                <div className="font-medium text-foreground mb-1">Grilled Chicken Breast</div>
                                <div className="text-sm text-muted-foreground mb-2">1 serving (100g)</div>
                                <div className="flex gap-3 text-xs">
                                    <span className="text-primary font-medium">165 cal</span>
                                    <span className="text-muted-foreground">31g protein</span>
                                    <span className="text-muted-foreground">0g carbs</span>
                                    <span className="text-muted-foreground">3.6g fat</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 mb-6">
                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
                        Add Food
                    </button>
                </div>

                <div className="px-6 mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-3">Recent Foods</h3>
                    <div className="space-y-2">
                        {recentFoods.map((food, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl p-4 shadow-sm border border-border hover:border-primary/50 transition-colors cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="font-medium text-foreground">{food.name}</div>
                                    <div className="text-sm font-semibold text-primary">{food.calories} cal</div>
                                </div>

                                <div className="flex gap-3 text-xs text-muted-foreground">
                                    <span>{food.protein}g protein</span>
                                    <span>{food.carbs}g carbs</span>
                                    <span>{food.fats}g fat</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}