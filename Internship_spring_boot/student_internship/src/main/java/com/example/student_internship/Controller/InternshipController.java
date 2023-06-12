package com.example.student_internship.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.student_internship.model.Student;
import com.example.student_internship.repository.InternshipRepository;
import com.example.student_internship.Service.LoginServise;

@RestController
@RequestMapping("/api/v1")
public class InternshipController {

    @Autowired
    InternshipRepository _internshipRepository;
    private LoginServise userService;

    @GetMapping("/all_student")
    public ResponseEntity<List<Student>> getAllStudent(@RequestParam(required = false) String first_name) {

        List<Student> student = new ArrayList<Student>();

        _internshipRepository.findAll().forEach(student::add);

        return new ResponseEntity<>(student, HttpStatus.OK);

    }

    // @GetMapping("/login")
    // public String showLoginForm() {
    // return "login";
    // }

    @PostMapping("/student")
    public ResponseEntity<Student> createStudent(@RequestBody Student _student) {
        // Student _student = _internshipRepository.save(new
        // Student(student.getRegistration_number(), student.getFirst_name(),
        // student.getLast_name(),
        // student.getEmail(), student.getPassword()));
        Student student = _internshipRepository.save(_student);
        return new ResponseEntity<>(student, HttpStatus.CREATED);

    }

    // @PostMapping("/login")
    // public String login(@RequestParam("Registration_number") String
    // Registration_number, @RequestParam("password") String password, Student
    // Student) {
    // Student _Registration_Number =
    // _internshipRepository.findById(id);
    // if (internship != null && internship.getPassword().equals(password)) {
    // return "redirect:/dashboard";
    // } else {
    // Student.addAttribute("error", "Invalid username or password");
    // return "login";
    //     }
    //   }
    // @PostMapping("/login")
    // public String login(@ModelAttribute("user") Student user ) {

    // Student oauthUser = userService.login(user.getRegistration_number(),
    // user.getPassword());

    // System.out.print(oauthUser);
    // if(Objects.nonNull(oauthUser))
    // {

    // return "redirect:/";

    // } else {
    // return "redirect:/login";

    // }

    // }

    @PutMapping("/student/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable("id") long id,
            @RequestBody Student student) {
        Optional<Student> studentData = _internshipRepository.findById(id);

        Student _student = studentData.get();
        _student.setRegistration_number(student.getRegistration_number());
        _student.setFirst_name(student.getFirst_name());
        _student.setLast_name(student.getLast_name());
        _student.setEmail(student.getEmail());
        _student.setPassword(student.getPassword());
        return new ResponseEntity<>(_internshipRepository.save(_student), HttpStatus.OK);
    }

    @DeleteMapping("/student/{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable("id") long id) {
        try {
            _internshipRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/student")
    public ResponseEntity<HttpStatus> deleteAllStudent() {
        try {
            _internshipRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
