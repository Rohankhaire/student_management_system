package com.example.Course_app.controller;

import lombok.Data;

@Data
public class SignupRequest {
  private String username;
  private String password;
  private String role;
}
