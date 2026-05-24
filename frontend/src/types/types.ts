export type Unit = "metric" | "imperial";
export type Gender = "male" | "female";
export type Goal = "lose" | "maintain" | "gain";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "very";

export interface Macro {
    name: string;
    current: number;
    goal: number;
    color: string;
}

export interface Meal {
    type: string;
    name: string;
    calories: number;
}

export interface FoodItem {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
}