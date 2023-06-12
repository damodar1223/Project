package com.example.student_internship.Service;




 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 

import com.example.student_internship.model.Student;
import com.example.student_internship.repository.InternshipRepository;
// import com.example.LindaSchool.Loginreposotory.LoginRepository;
 
 
 
@Service
public class LoginServise {
@Autowired
private InternshipRepository repo;
  
//   public Student login(String registration_number, String password) {
//   Student user = repo.findByUsernameAndPassword(registration_number, password);
//    return user;
//   }
 
 }