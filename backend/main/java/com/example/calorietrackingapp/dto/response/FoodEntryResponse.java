package com.example.calorietrackingapp.dto.response;

import java.time.LocalDate;

public record FoodEntryResponse(
        Long id,
        String foodName,
        Integer calories,
        Integer portion,
        LocalDate date
)
{}
