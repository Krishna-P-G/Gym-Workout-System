package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.Repository.GymRepository;
import com.example.demo.model.Gym;

@Service
public class GymService {
	@Autowired
	GymRepository gymRepository;
	public Gym create(Gym gym)
	{
		return gymRepository.save(gym);
	}
	public Optional<Gym> getById(@PathVariable Long id)
	{
		return gymRepository.findById(id);
	}
	public Gym getByMuscle(@PathVariable String muscle)
	{
		return gymRepository.findByMuscle(muscle);
	}
	public Gym getByName(@PathVariable String name)
	{
		return gymRepository.findByName(name);
	}
	public List<Gym> getGym()
	{
		return gymRepository.findAll();
	}
	public Gym update(Gym gym)
	{
		return gymRepository.save(gym);
		
	}
	public void delete(@RequestParam Long id)
	{
		gymRepository.deleteById(id);
	}
	public void deleteGymAll()
	{
		gymRepository.deleteAll();
	}
	public Iterable<Gym> sortGym(String field)
	  {
		  return gymRepository.findAll(Sort.by(field));
	  }
}
