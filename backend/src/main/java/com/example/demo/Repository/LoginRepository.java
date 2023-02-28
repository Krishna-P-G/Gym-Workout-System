package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.User;

public interface LoginRepository extends JpaRepository<User, Long>{
	
	@Query("select email,password from User u where u.email=?1 and u.password=?2")
	public List<Integer> UserValid(String email,String password); 
	
}
