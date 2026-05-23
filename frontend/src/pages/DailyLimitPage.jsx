import { useState} from "react";
import api from "../api.js"

export default function DailyLimitPage() {
    const [calorieLimit, setCalorieLimit] = useState("");
    const handleSubmit = async (e) =>{
    e.preventDefault();
    await api.post(`/daily-limit?calorieLimit=${calorieLimit}`);
    alert("Daily limit saved");
    setCalorieLimit("");
    };

    return(
        <div>
            <h2>Daily Limit</h2>
            <form onSubmit={handleSubmit}>
                <input
                type={"number"}
                value={calorieLimit}
                onChange={(e) => setCalorieLimit(e.target.value)}
                placeholder={"Enter daily calories"}
                required
                />
                <button type={"submit"}>Save</button>
            </form>
        </div>
    );
}
