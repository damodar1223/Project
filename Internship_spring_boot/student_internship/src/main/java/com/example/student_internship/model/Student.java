package com.example.student_internship.model;

import jakarta.persistence.*;

@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "registration_number")
    private String registration_number;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_Nnme")
    private String last_name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    public Student(long id, String registration_number, String first_name, String last_name, String email,
            String password) {
        this.id = id;
        this.registration_number = registration_number;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    public Student() {
    }


    public long getId() {
        return id;
    }

    // public void setId(long id) {
    //     this.id = id;
    // }

    public String getRegistration_number() {
        return registration_number;
    }

    public void setRegistration_number(String registration_number) {
        this.registration_number = registration_number;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", registration_number=" + registration_number + ", first_name=" + first_name
                + ", last_name=" + last_name + ", email=" + email + ", password=" + password + "]";
    }
    

    

    

}
