package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.GymService;
import com.example.demo.model.Gym;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/gym")
@CrossOrigin
public class GymController {
	@Autowired
	GymService gymService;

	@Operation(summary = "Creates a new Workout")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "workout created successfully"),
			@ApiResponse(responseCode = "400", description = "Workout is invalid") })
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value="/create",produces = "application/json", consumes = "application/json")
	public ResponseEntity<Gym> create(final @RequestBody Gym gym) {
		Gym createGym = gymService.create(gym);
		return ResponseEntity.ok(createGym);
	}

	@Operation(summary = "Gets a Workout")
	@ApiResponses(value = { @ApiResponse(responseCode = "202", description = "Read the Workout successfully"),
			@ApiResponse(responseCode = "401", description = "Workout is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<Optional<Gym>> getById(final @PathVariable Long id) {
		Optional<Gym> getGym = gymService.getById(id);
		return ResponseEntity.ok(getGym);
	}
	@Operation(summary = "Gets a Workout through muscle")
	@ApiResponses(value = { @ApiResponse(responseCode = "202", description = "Read the Workout successfully"),
			@ApiResponse(responseCode = "401", description = "Workout is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/_bymuscle/{muscle}", produces = "application/json")
	public ResponseEntity<Gym> getByMuscle(final @PathVariable String muscle) {
		Gym getGym = gymService.getByMuscle(muscle);
		return ResponseEntity.ok(getGym);
	}
	@Operation(summary = "Gets a Workout through name")
	@ApiResponses(value = { @ApiResponse(responseCode = "202", description = "Read the Workout successfully"),
			@ApiResponse(responseCode = "401", description = "Workout is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/_byname/{name}", produces = "application/json")
	public ResponseEntity<Gym> getByName(final @PathVariable String name) {
		Gym getGym = gymService.getByName(name);
		return ResponseEntity.ok(getGym);
	}
	@Operation(summary = "Sorts a Workout through name")
	@ApiResponses(value = { @ApiResponse(responseCode = "202", description = "Sorted the Workout successfully"),
			@ApiResponse(responseCode = "401", description = "Workout is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/_sort/{field}", produces = "application/json")
	public ResponseEntity<Iterable<Gym>> Sort(final @PathVariable String field) {
		Iterable<Gym> sortGym = gymService.sortGym(field);
		return ResponseEntity.ok(sortGym);
	}
	@Operation(summary = "Gets all Workout")
	@ApiResponses(value = { @ApiResponse(responseCode = "205", description = "Read all the Workout successfully"),
			@ApiResponse(responseCode = "404", description = "Workout is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping("/all")
	public ResponseEntity<List<Gym>> getGym() {
		List<Gym> getGym = gymService.getGym();
		return ResponseEntity.ok(getGym);
	}

	@Operation(summary = "Updates an Workout")
	@ApiResponses(value = {@ApiResponse(responseCode = "203",description="Workout updated successfully"),
			@ApiResponse(responseCode = "402",description="Workout is not found")})
	@ResponseStatus(HttpStatus.CREATED)
	@PutMapping(value="/{id}", produces = "application/json", consumes="application/json")
	public ResponseEntity<Gym> update(final @RequestBody Gym gym)throws JsonProcessingException{
			final Gym updateGym= gymService.update(gym);
			return ResponseEntity.ok(updateGym);
		}

	@Operation(summary = "Deletes a Gym workout")
	@ApiResponses(value = { @ApiResponse(responseCode = "204", description = "Workout deleted successfully"),
			@ApiResponse(responseCode = "403", description = "workout is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@DeleteMapping(value = "/delete")
	public ResponseEntity<Object> delete(@RequestParam Long id) {
		gymService.delete(id);
		return new ResponseEntity<>("No worries"+"\n You can always make another workout",HttpStatus.OK);
	}
	
	@Operation(summary = "Deletes all Gym workout")
	@ApiResponses(value = { @ApiResponse(responseCode = "206", description = "All Workout deleted successfully"),
			@ApiResponse(responseCode = "405", description = "workout is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@DeleteMapping()
	public void deleteAll() {
		gymService.deleteGymAll();
	}
}
