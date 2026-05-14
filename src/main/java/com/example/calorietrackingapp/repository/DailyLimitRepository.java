package com.example.calorietrackingapp.repository;

import com.example.calorietrackingapp.model.DailyLimit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface DailyLimitRepository extends JpaRepository<DailyLimit,Long> {
    Optional<DailyLimit> findByDate(LocalDate date);
}
