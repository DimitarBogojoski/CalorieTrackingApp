package com.example.calorietrackingapp.service;


import com.example.calorietrackingapp.dto.request.CalculatorRequest;
import com.example.calorietrackingapp.dto.request.FoodEntryRequest;
import com.example.calorietrackingapp.dto.response.CalculatorResponse;
import com.example.calorietrackingapp.dto.response.DashboardResponse;
import com.example.calorietrackingapp.model.DailyLimit;
import com.example.calorietrackingapp.model.FoodEntry;

public interface CaloryService{
    DailyLimit saveOrUpdateDailyLimit(Integer calorieLimit);
    FoodEntry saveFoodEntry(FoodEntryRequest request);
    CalculatorResponse calculateCalories(CalculatorRequest request);
    DashboardResponse getDashboard();
    DashboardResponse resetAll();
}
