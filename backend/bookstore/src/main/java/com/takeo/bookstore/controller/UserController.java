package com.takeo.bookstore.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.takeo.bookstore.models.User;
import com.takeo.bookstore.service.UserService;
import com.takeo.bookstore.validation.UserLoginResponse;
import com.takeo.bookstore.validation.UserRegisterValidation;

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
		try {
			this.userService.createUser(userCreate);
		System.out.println("User Created");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@CrossOrigin(origins="http://localhost:5173/",allowedHeaders= {"Content-Type"})
	@PostMapping("/delete")
	public void DeleteUser(@RequestBody User userCreate) {
		return "Deleted";
	}
	
	@GetMapping("/showuser")
	@CrossOrigin(origins="*",allowedHeaders= {"Content-Type"})
	public List<User>showAllUser(){
		System.out.println(userService.getAllUser());
		return userService.getAllUser();
	}

	@GetMapping("/validateUser/{userName}")
	@CrossOrigin(origins = "*", allowedHeaders = {"Content-Type"})
	public ResponseEntity<UserRegisterValidation> validateUser(@PathVariable String userName) {
		 boolean userExists = userService.existsByUsername(userName);
		 UserRegisterValidation response = new UserRegisterValidation(userExists);
		    return ResponseEntity.ok(response);
	}	
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:5173/",allowedHeaders= {"Content-Type"})
	  public ResponseEntity<String> login(@RequestBody User user) {
		   String username = user.getUserName();
		    String password = user.getPassword();

		    if (userService.validateUser(username, password)) {
		      return ResponseEntity.ok("Login successful!");
		    } else {
		      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
		    }
	  }
	
}
