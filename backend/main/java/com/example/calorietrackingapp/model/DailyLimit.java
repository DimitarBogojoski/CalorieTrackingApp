package com.example.calorietrackingapp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@Getter
@Setter
@Table(name = "daily_limits")
public class DailyLimit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;
    private Integer calorieLimit;

    public DailyLimit(LocalDate date, Integer calorieLimit) {
        this.date = date;
        this.calorieLimit = calorieLimit;
    }
}
