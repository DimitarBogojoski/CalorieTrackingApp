package com.example.calorietrackingapp.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DailyLimitRequest(
    @NotNull
    @Min(0)
    Integer calorieLimit
)
{}
