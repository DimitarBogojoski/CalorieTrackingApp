package com.example.calorietrackingapp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "food_entries")
public class FoodEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String foodName;
    private Integer calories;
    private Integer portions;
    private LocalDate date;

    public FoodEntry(String foodName, Integer calories, Integer portions, LocalDate date) {
        this.foodName = foodName;
        this.calories = calories;
        this.portions = portions;
        this.date = date;
    }
}
