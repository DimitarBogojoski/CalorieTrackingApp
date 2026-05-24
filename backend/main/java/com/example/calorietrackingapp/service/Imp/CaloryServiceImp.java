package com.example.calorietrackingapp.service.Imp;

import com.example.calorietrackingapp.dto.request.CalculatorRequest;
import com.example.calorietrackingapp.dto.request.FoodEntryRequest;
import com.example.calorietrackingapp.dto.response.CalculatorResponse;
import com.example.calorietrackingapp.dto.response.DashboardResponse;
import com.example.calorietrackingapp.dto.response.FoodEntryResponse;
import com.example.calorietrackingapp.model.DailyLimit;
import com.example.calorietrackingapp.model.FoodEntry;
import com.example.calorietrackingapp.repository.DailyLimitRepository;
import com.example.calorietrackingapp.repository.FoodEntryRepository;
import com.example.calorietrackingapp.service.CaloryService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
@Service
public class CaloryServiceImp implements CaloryService {

    private final DailyLimitRepository dailyLimitRepository;
    private final FoodEntryRepository foodEntryRepository;

    public CaloryServiceImp(DailyLimitRepository dailyLimitRepository, FoodEntryRepository foodEntryRepository) {
        this.dailyLimitRepository = dailyLimitRepository;
        this.foodEntryRepository = foodEntryRepository;
    }

    @Override
    public DailyLimit saveOrUpdateDailyLimit(Integer calorieLimit) {
        LocalDate today = LocalDate.now();
        DailyLimit dailyLimit = dailyLimitRepository.findByDate(today)
                .orElse(new DailyLimit(today, calorieLimit));

        dailyLimit.setCalorieLimit(calorieLimit);
        return dailyLimitRepository.save(dailyLimit);
    }

    @Override
    public FoodEntry saveFoodEntry(FoodEntryRequest request) {
        LocalDate today = LocalDate.now();
        FoodEntry foodEntry = new FoodEntry(
                request.foodName(),
                request.calories(),
                request.portion() == null ? 1 : request.portion(),
                today
        );
        return foodEntryRepository.save(foodEntry);
    }

    @Override
    public CalculatorResponse calculateCalories(CalculatorRequest request) {
        double weightKg = request.weight();
        double heightCm = request.height();

        if ("imperial".equalsIgnoreCase(request.unit())) {
            weightKg = request.weight() * 0.453592;
            heightCm = request.height() * 30.48;
        }

        double bmr;
        if ("male".equalsIgnoreCase(request.gender())) {
            bmr = 10 * weightKg + 6.25 * heightCm - 5 * request.age() + 5;
        } else {
            bmr = 10 * weightKg + 6.25 * heightCm - 5 * request.age() - 161;
        }

        double activityMultiplier = switch (request.activityLevel().toLowerCase()) {
            case "sedentary" -> 1.2;
            case "light" -> 1.375;
            case "moderate" -> 1.55;
            case "very" -> 1.725;
            default -> 1.55;
        };

        double calories = bmr * activityMultiplier;

        calories = switch (request.goal().toLowerCase()) {
            case "lose" -> calories - 500;
            case "gain" -> calories + 300;
            default -> calories;
        };

        int dailyCalories = (int) Math.round(calories);
        int protein = (int) Math.round((dailyCalories * 0.30) / 4);
        int carbs = (int) Math.round((dailyCalories * 0.45) / 4);
        int fats = (int) Math.round((dailyCalories * 0.25) / 9);

        saveOrUpdateDailyLimit(dailyCalories);

        return new CalculatorResponse(dailyCalories, protein, carbs, fats);
    }

    @Override
    public DashboardResponse getDashboard() {
        LocalDate today = LocalDate.now();

        DailyLimit limit = dailyLimitRepository.findByDate(today)
                .orElse(new DailyLimit(today, 0));

        List<FoodEntry> foods = foodEntryRepository.findByDate(today);

        int consumed = foods.stream()
                .mapToInt(f -> f.getCalories() * (f.getPortions() == null ? 1 : f.getPortions()))
                .sum();

        int remaining = Math.max(0, limit.getCalorieLimit() - consumed);

        List<FoodEntryResponse> foodResponses = foods.stream().map(food ->
                new FoodEntryResponse(
                        food.getId(),
                        food.getFoodName(),
                        food.getCalories(),
                        food.getPortions(),
                        food.getDate()
                )).toList();

        return new DashboardResponse(
                limit.getCalorieLimit(),
                consumed,
                remaining,
                foodResponses
        );
    }

    @Override
    @Transactional
    public DashboardResponse resetAll() {
        saveOrUpdateDailyLimit(0);
        foodEntryRepository.deleteByDate(LocalDate.now());
        return new DashboardResponse(0,0,0,List.of());
    }
}
