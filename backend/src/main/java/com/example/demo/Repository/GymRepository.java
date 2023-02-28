package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Gym;

@Repository
public interface GymRepository extends PagingAndSortingRepository<Gym, Long>,JpaRepository<Gym, Long>{
	Gym findByName(String workoutname);
	Gym findByMuscle(String muscle);
}
