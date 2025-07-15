package com.example.Course_app.service;

import com.example.Course_app.entity.Course;
import com.example.Course_app.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private StudentRepository repository;

    @Override
    public List<Course> getAllCourses() {
        return repository.findAll();
    }

    @Override
    public Course getCourseById(int id) {
        Optional<Course> course = repository.findById(id);
        return course.orElse(null);
    }

    @Override
    public Course addOrUpdateCourse(Course course) {
        return repository.save(course);
    }

    @Override
    public void deleteCourse(int id) {
        repository.deleteById(id);
    }
}
