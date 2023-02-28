package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.SignUpRepository;
import com.example.demo.model.User;

@Service
public class SignUpService {
	@Autowired
	SignUpRepository signUpRepository;
	
	public User createAccount(User user)
	{
		return signUpRepository.save(user);
	}
}
