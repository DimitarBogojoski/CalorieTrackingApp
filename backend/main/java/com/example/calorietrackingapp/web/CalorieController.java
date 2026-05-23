package com.example.calorietrackingapp.web;

import com.example.calorietrackingapp.model.FoodEntry;
import com.example.calorietrackingapp.service.CaloryService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CalorieController {
    private final CaloryService caloryService;

    public CalorieController(CaloryService caloryService) {
        this.caloryService = caloryService;
    }

    @GetMapping("/dashboard")
    public Map<String,Object> getDashboard(){
        Map<String,Object> response=new HashMap<>();
        response.put("dailyLimit", caloryService.getOrCreateTodayLimit().getCalorieLimit());
        response.put("consumed",caloryService.getConsumedCalories());
        response.put("remaining",caloryService.getRemainingCalories());
        response.put("foods",caloryService.getTodayFoods());
        return response;
    }

    @PostMapping("/daily-limit")
    public Map<String,Object> saveDailyLimit(@RequestParam Integer calorieLimit){
        caloryService.saveDailyLimit(calorieLimit);
        return Map.of("message","Daily limit saved");
    }

    @PostMapping("/food-entry")
    public Map<String,Object> saveFoodEntry(@Valid @RequestBody FoodEntry foodEntry){
        caloryService.saveFoodEntry(foodEntry);
        return Map.of("message","Food entry saved");
    }
}
