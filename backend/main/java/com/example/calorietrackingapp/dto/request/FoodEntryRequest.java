package com.example.calorietrackingapp.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record FoodEntryRequest(
        @NotBlank
        String foodName,

        @NotNull
        @Min(1)
        Integer calories,

        @NotNull
        @Min(1)
        Integer portion
)
{}
