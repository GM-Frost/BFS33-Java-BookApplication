package com.takeo.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.takeo.bookstore.models.User;
import com.takeo.bookstore.repository.UserRepository;
import com.takeo.bookstore.service.UserService;

@RestController
public class UserController {

	private  UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@CrossOrigin(origins="http://localhost:5173/",allowedHeaders= {"Content-Type"})
	@PostMapping("/create")
	public void createUser(@RequestBody User userCreate) {
		this.userService.createUser(userCreate);
		System.out.println("User Created");
	}
	
}
