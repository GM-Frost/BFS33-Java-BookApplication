package com.takeo.bookstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.takeo.bookstore.models.User;
import com.takeo.bookstore.repository.UserRepository;

@Service
public class UserService {
	private final UserRepository userRepository;
	
	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository= userRepository;
	}
	
	
	public List<User> getAllUser(){
		return userRepository.findAll();
	}
	
	public User createUser(User request) {
		return userRepository.save(request);
	}
	
	 public boolean existsByUsername(String userName) {

	        // For example, using JPA:
	     return userRepository.existsByUserName(userName);

	        // Replace the above line with your actual implementation for checking user existence.
	    }
	 
	 public boolean validateUser(String username, String password) {
		    User user = userRepository.findByUserName(username);

		    if (user == null) {
		      return false;
		    }

		    // Check if the provided password matches the user's stored password
		    return user.getPassword().equals(password);
		  }
}
