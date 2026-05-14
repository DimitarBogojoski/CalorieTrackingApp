package com.example.calorietrackingapp.service.Imp;

import com.example.calorietrackingapp.model.DailyLimit;
import com.example.calorietrackingapp.model.FoodEntry;
import com.example.calorietrackingapp.repository.DailyLimitRepository;
import com.example.calorietrackingapp.repository.FoodEntryRepository;
import com.example.calorietrackingapp.service.CaloryService;
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
    public DailyLimit getOrCreateTodayLimit() {
        return dailyLimitRepository.findByDate(LocalDate.now()).orElseGet(() ->
                dailyLimitRepository.save(new DailyLimit(LocalDate.now(),2000)));
    }

    @Override
    public DailyLimit saveDailyLimit(Integer calorieLimit) {
        DailyLimit limit=dailyLimitRepository.findByDate(LocalDate.now()).orElse(new DailyLimit(LocalDate.now(),calorieLimit));
        limit.setCalorieLimit(calorieLimit);
        return dailyLimitRepository.save(limit);
    }

    @Override
    public FoodEntry saveFoodEntry(FoodEntry entry) {
        entry.setDate(LocalDate.now());
        return foodEntryRepository.save(entry);
    }

    @Override
    public List<FoodEntry> getTodayFoods() {
        return foodEntryRepository.findByDate(LocalDate.now());
    }

    @Override
    public int getConsumedCalories() {
        return getTodayFoods().stream().mapToInt(FoodEntry::getCalories).sum();
    }

    @Override
    public int getRemainingCalories() {
        return getOrCreateTodayLimit().getCalorieLimit()-getConsumedCalories();
    }
}
