package com.example.student_internship.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.student_internship.model.Student;
import com.example.student_internship.repository.InternshipRepository;

@RestController
@RequestMapping("/api/v1")
public class InternshipController {

    @Autowired
    InternshipRepository _InternshipRepository;

    @GetMapping("/student")
    public ResponseEntity<List<Student>> getAllStudent(@RequestParam(required = false) String first_name) {

        List<Student> student = new ArrayList<Student>();

        _InternshipRepository.findAll().forEach(student::add);

        return new ResponseEntity<>(student, HttpStatus.OK);

    }

    @GetMapping("/login")
    public String showLoginForm() {
        return "login";
    }

    @PostMapping("/student")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student student1 = _InternshipRepository
                .save(new Student(student.getRegistration_number(), student.getFirst_name(), student.getFirst_name(),
                        student.getEmail(), student.getPassword()));
        return new ResponseEntity<>(student1, HttpStatus.CREATED);

    }

    @PostMapping("/login")
    public String login(@RequestParam("Registration_Number") String Registration_Number,
            @RequestParam("Password") String Password) {
        Student student = InternshipRepository.findByRegistration_NumberAndPassword(Registration_Number, Password);
        if (student != null) {
            return "true";
        }
        return Password;
    }
    // else {
    // Student.addAttribute("error", "Invalid Registration_Number or password");
    // return "false";
    //     }

    @PutMapping("/student/{Registration_Number}")
    public ResponseEntity<Student> updateStudent(@PathVariable("Registration_Number") long Registration_Number,
            @RequestBody Student student) {
        Optional<Student> studentData = _InternshipRepository.findById(Registration_Number);

        Student _student = studentData.get();
        _student.setRegistration_number(student.getRegistration_number());
        _student.setFirst_name(student.getFirst_name());
        _student.setFirst_name(student.getFirst_name());
        _student.setEmail(student.getEmail());
        _student.setPassword(student.getPassword());
        return new ResponseEntity<>(_InternshipRepository.save(_student), HttpStatus.OK);
    }

    @DeleteMapping("/student/{Registration_Number}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable("Registration_Number") long Registration_Number) {
        try {
            _InternshipRepository.deleteById(Registration_Number);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/student")
    public ResponseEntity<HttpStatus> deleteAllStudent() {
        try {
            _InternshipRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
