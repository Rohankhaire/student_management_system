package com.example.Course_app.repository;

import com.example.Course_app.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Course, Integer> {
    // JPA provides CRUD methods automatically
}
