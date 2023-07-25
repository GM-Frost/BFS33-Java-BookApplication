package com.takeo.bookstore.service;

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
	
	public User createUser(User request) {
		return userRepository.save(request);
	}
}
