package com.example.calorietrackingapp.service;

import com.example.calorietrackingapp.model.DailyLimit;
import com.example.calorietrackingapp.model.FoodEntry;

import java.util.List;

public interface CaloryService {
    public DailyLimit getOrCreateTodayLimit();
    public DailyLimit saveDailyLimit(Integer calorieLimit);
    public FoodEntry saveFoodEntry(FoodEntry entry);
    public List<FoodEntry> getTodayFoods();
    public int getConsumedCalories();
    public int getRemainingCalories();
}
