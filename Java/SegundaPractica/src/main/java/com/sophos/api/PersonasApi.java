package com.sophos.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sophos.entity.PersonasEntity;
import com.sophos.services.PersonasService;

@RestController
@RequestMapping("/personas")
public class PersonasApi {

	@Autowired
	private PersonasService personasService;
	
	@GetMapping("")
	public List<PersonasEntity> getPersonas(){
		return personasService.getPersonas();
	}
	
	
	@GetMapping("/{id}")
	public PersonasEntity getPersonasFindId(@PathVariable("id")Integer id)
	{
		return personasService.getPersonasFindId(id);
	}
	
	
	
	
	@PostMapping(path="/insertar" , produces="application/json")
	public PersonasEntity insertPersonas(@RequestBody PersonasEntity persona) {
		return personasService.insertPersonas(persona);
	}
	
	
	
	@RequestMapping(path="/modificar",method= RequestMethod.PUT, produces="application/json")
	public PersonasEntity modificarPersonas(@RequestBody PersonasEntity personas) {
			return personasService.modificarPersonas(personas);
	}
	

	
	
	
	

}

