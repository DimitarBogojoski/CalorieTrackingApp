package com.example.calorietrackingapp.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CalculatorRequest(
        @NotBlank
        String unit,

        @NotBlank
        String gender,

        @NotBlank
        String goal,

        @NotBlank
        String activityLevel,

        @NotNull
        @Min(1)
        Double height,

        @NotNull
        @Min(1)
        Double weight,

        @NotNull
        @Min(1)
        Integer age
) {
}
