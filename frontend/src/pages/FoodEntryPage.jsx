import { useState } from "react";
import api from "../api";

export default function FoodEntryPage(){
    const [foodName, setFoodName] = useState("");
    const [calories, setCalories] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post("/food-entry", {
            foodName,
            calories: Number(calories)
        });
        alert("Food added");
        setFoodName("");
        setCalories("");
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <h2>Food Entry</h2>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "250px"
                }}>
                <input
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    placeholder="Food Name"
                    required
                />

                <input
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    placeholder="Calories"
                    required
                />

                <button type="submit">Add</button>
            </form>
        </div>
    );
}