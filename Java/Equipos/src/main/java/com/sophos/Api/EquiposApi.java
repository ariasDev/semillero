package com.sophos.Api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sophos.Entity.EquiposEntity;
import com.sophos.Service.EquiposService;

@RestController
@RequestMapping("/equipos")
public class EquiposApi {
	
	@Autowired
	EquiposService equiposService;
	
	@GetMapping("/{id}")
	public EquiposEntity getById(@PathVariable int id)
	{
		return equiposService.obtenerPorId(id);
	}
	
	@GetMapping List<EquiposEntity> obtenerEquipos()
	{
		return equiposService.obtenerEquipos();
	}
	
	@PostMapping(path = "/insertar", produces = "application/json") 
	public EquiposEntity isertar(@RequestBody EquiposEntity equipo)
	{
		return equiposService.insertarEquipo(equipo);
	}
	
	@PutMapping(path = "/modificar", produces = "application/json")
	public EquiposEntity modificar(@RequestBody EquiposEntity equipo) {
		return equiposService.modificarEquipo(equipo);
		
	}
	

}
