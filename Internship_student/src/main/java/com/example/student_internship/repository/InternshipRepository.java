package com.example.student_internship.repository;

import org.springframework.data.repository.CrudRepository;
import com.example.student_internship.model.Student;

public interface InternshipRepository extends CrudRepository<Student, Long> {

    static Student findByRegistration_NumberAndPassword(String registration_Number, String password) {
        return null;
    }

    // Tutorial save(Tutorial tutorial);

}
