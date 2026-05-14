package com.example.calorietrackingapp.repository;

import com.example.calorietrackingapp.model.FoodEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface FoodEntryRepository extends JpaRepository<FoodEntry,Long> {
    List<FoodEntry> findByDate(LocalDate date);
}
