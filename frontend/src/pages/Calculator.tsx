import { useState } from "react";
import { ArrowLeft, Home, PlusCircle, Calculator as CalcIcon, User } from "lucide-react";
import { useNavigate} from "react-router-dom";
import type { ActivityLevel, Gender, Goal, Unit } from "../types/types";

export function Calculator() {
    const navigate = useNavigate();

    const [unit, setUnit] = useState<Unit>("metric");
    const [gender, setGender] = useState<Gender>("male");
    const [goal, setGoal] = useState<Goal>("maintain");
    const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate");
    const [height, setHeight] = useState<string>("170");
    const [weight, setWeight] = useState<string>("70");
    const [age, setAge] = useState<string>("28");
    const [calculated, setCalculated] = useState<boolean>(false);

    const handleCalculate = () => {
        setCalculated(true);
    };

    const dailyCalories = 2000;
    const protein = 150;
    const carbs = 250;
    const fats = 65;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="max-w-md mx-auto">
                <div className="p-6 pb-4 flex items-center gap-4">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-foreground" />
                    </button>
                    <h2 className="text-xl font-semibold text-foreground">Calculate Your Goals</h2>
                </div>

                <div className="px-6 space-y-5">
                    <div>
                        <div className="text-sm font-medium text-foreground mb-3">Units</div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setUnit("metric")}
                                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                    unit === "metric"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-foreground hover:bg-secondary/80"
                                }`}
                            >
                                Metric (cm, kg)
                            </button>
                            <button
                                onClick={() => setUnit("imperial")}
                                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                    unit === "imperial"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-foreground hover:bg-secondary/80"
                                }`}
                            >
                                Imperial (ft, lbs)
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-foreground mb-3 block">
                            Height {unit === "metric" ? "(cm)" : "(ft)"}
                        </label>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-foreground mb-3 block">
                            Weight {unit === "metric" ? "(kg)" : "(lbs)"}
                        </label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-foreground mb-3 block">Age (years)</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </div>

                    <div>
                        <div className="text-sm font-medium text-foreground mb-3">Gender</div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setGender("male")}
                                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                    gender === "male"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-foreground hover:bg-secondary/80"
                                }`}
                            >
                                Male
                            </button>
                            <button
                                onClick={() => setGender("female")}
                                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                    gender === "female"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-foreground hover:bg-secondary/80"
                                }`}
                            >
                                Female
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-foreground mb-3 block">Goal</label>
                        <select
                            value={goal}
                            onChange={(e) => setGoal(e.target.value as Goal)}
                            className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        >
                            <option value="lose">Lose Weight</option>
                            <option value="maintain">Maintain Weight</option>
                            <option value="gain">Gain Weight</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-foreground mb-3 block">Activity Level</label>
                        <select
                            value={activityLevel}
                            onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
                            className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        >
                            <option value="sedentary">Sedentary (little or no exercise)</option>
                            <option value="light">Lightly Active (1-3 days/week)</option>
                            <option value="moderate">Moderately Active (3-5 days/week)</option>
                            <option value="very">Very Active (6-7 days/week)</option>
                        </select>
                    </div>

                    <button
                        onClick={handleCalculate}
                        className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
                    >
                        Calculate
                    </button>

                    {calculated && (
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border-2 border-primary/20">
                            <div className="text-center">
                                <div className="text-sm text-muted-foreground mb-2">Your Daily Calorie Goal</div>
                                <div className="text-5xl font-bold text-primary mb-1">{dailyCalories}</div>
                                <div className="text-sm text-muted-foreground">calories per day</div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-primary/20">
                                <div className="text-center">
                                    <div className="text-2xl font-semibold text-foreground mb-1">{protein}g</div>
                                    <div className="text-xs text-muted-foreground">Protein</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-semibold text-foreground mb-1">{carbs}g</div>
                                    <div className="text-xs text-muted-foreground">Carbs</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-semibold text-foreground mb-1">{fats}g</div>
                                    <div className="text-xs text-muted-foreground">Fats</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}