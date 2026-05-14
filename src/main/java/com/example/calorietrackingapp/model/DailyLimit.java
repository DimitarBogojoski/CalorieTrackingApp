package com.example.calorietrackingapp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@Table(name = "daily_limits")
public class DailyLimit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    @Min(0)
    private Integer calorieLimit;

    public  DailyLimit(LocalDate date,Integer calorieLimit){
        this.date=date;
        this.calorieLimit=calorieLimit;
    }
}
