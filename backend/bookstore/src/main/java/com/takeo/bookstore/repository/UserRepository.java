package com.takeo.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.takeo.bookstore.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
