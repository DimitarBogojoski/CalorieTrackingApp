package com.example.calorietrackingapp.dto.response;

public record CalculatorResponse(
        Integer dailyCalories,
        Integer protein,
        Integer carbs,
        Integer fats
) {
}
