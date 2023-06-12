package com.example.student_internship.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import com.example.student_internship.model.Student;

public interface InternshipRepository extends CrudRepository<Student, Long>,JpaRepository<Student, Long> {

    // Tutorial save(Tutorial tutorial);
    // Student findByUsernameAndPassword(String registration_number, String password);


}
