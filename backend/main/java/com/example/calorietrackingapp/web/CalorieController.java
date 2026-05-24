package com.example.calorietrackingapp.web;

import com.example.calorietrackingapp.dto.request.CalculatorRequest;
import com.example.calorietrackingapp.dto.request.FoodEntryRequest;
import com.example.calorietrackingapp.dto.response.ApiMessageResponse;
import com.example.calorietrackingapp.dto.response.CalculatorResponse;
import com.example.calorietrackingapp.dto.response.DashboardResponse;
import com.example.calorietrackingapp.service.CaloryService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CalorieController {
    private final CaloryService caloryService;

    public CalorieController(CaloryService caloryService) {
        this.caloryService = caloryService;
    }

    @GetMapping("/dashboard")
    public DashboardResponse getDashboard(){
        return caloryService.getDashboard();
    }

    @PostMapping("/calculator")
    public CalculatorResponse calculate(@Valid @RequestBody CalculatorRequest request){
        return caloryService.calculateCalories(request);
    }

    @PostMapping("/food-entry")
    public ApiMessageResponse saveFoodEntry(@Valid @RequestBody FoodEntryRequest request) {
        caloryService.saveFoodEntry(request);
        return new ApiMessageResponse("Food entry saved");
    }

    @PutMapping("/reset-cal")
    public DashboardResponse reset(){
        return caloryService.resetAll();
    }
}
