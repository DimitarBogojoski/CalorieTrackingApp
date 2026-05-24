package com.example.calorietrackingapp.dto.response;

import java.util.List;

public record DashboardResponse(
        Integer dailyLimit,
        Integer consumed,
        Integer remaining,
        List<FoodEntryResponse> foods
)
{}
