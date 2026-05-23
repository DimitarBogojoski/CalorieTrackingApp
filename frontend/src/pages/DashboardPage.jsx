import { useEffect, useState } from "react";
import api from "../api";

export default function DashboardPage(){
    const [data, setData] = useState({
        dailyLimit: 0,
        consumed: 0,
        remaining: 0,
        foods: []
    });

    useEffect(() => {
        api.get("/dashboard").then((res) => setData(res.data));
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Daily limit: {data.dailyLimit}</p>
            <p>Consumed: {data.consumed}</p>
            <p>Remaining: {data.remaining}</p>

            <h3>Today`s food</h3>
            <ul>
                {(data.foods ?? []).map((food) => (
                    <li key={food.id}>
                        {food.foodName} - {food.calories} cal
                    </li>
                ))}
            </ul>
        </div>
    );
}