package com.example.firebasestarter;

public class User {

    String username,mail,phoneNumber,password,role,school;
    Integer badge,credits;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public Integer getBadge() {
        return badge;
    }

    public void setBadge(Integer badge) {
        this.badge = badge;
    }

    public Integer getCredits() {
        return credits;
    }

    public void setCredits(Integer credits) {
        this.credits = credits;
    }

    public User(String username, String mail, String phoneNumber, String password, String role, String school, Integer credits, Integer badge) {
        this.username = username;
        this.mail = mail;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.role = role;
        this.school = school;
        this.credits = credits;
        this.badge = badge;
    }

}
