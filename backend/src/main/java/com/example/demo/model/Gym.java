package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="gym")
public class Gym {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String muscle;
	private String name;
	private int reps;
	private int sets;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMuscle() {
		return muscle;
	}

	public void setMuscle(String muscle) {
		this.muscle = muscle;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getReps() {
		return reps;
	}

	public void setReps(int reps) {
		this.reps = reps;
	}

	public int getSets() {
		return sets;
	}

	public void setSets(int sets) {
		this.sets = sets;
	}
	

	public Gym(Long id, String muscle, String name, int reps, int sets) {
		super();
		this.id = id;
		this.muscle = muscle;
		this.name = name;
		this.reps = reps;
		this.sets = sets;
	}

	@Override
	public String toString() {
		return "Gym [id=" + id + ", muscle=" + muscle + ", name=" + name + ", reps=" + reps + ", sets=" + sets + "]";
	}

	public Gym() {
		
	}
	
}
