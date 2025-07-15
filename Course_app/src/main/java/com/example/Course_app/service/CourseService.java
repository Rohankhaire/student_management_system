package com.example.Course_app.service;

import com.example.Course_app.entity.Course;
import java.util.List;

public interface CourseService {

    List<Course> getAllCourses();

    Course getCourseById(int id);

    Course addOrUpdateCourse(Course course);

    void deleteCourse(int id);
}
