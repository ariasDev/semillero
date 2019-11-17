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

import com.sophos.Entity.ColaboradoresEntity;
import com.sophos.Service.ColaboradoresService;

@RestController
@RequestMapping("/colaboradores")
public class ColaboradoresApi {
	
	@Autowired
	ColaboradoresService colaboradoresService;
	
	@GetMapping("")
	public List<ColaboradoresEntity> obtenerColaboradores()
	{
		return colaboradoresService.obtenerColaboradores();
	}
	
	@GetMapping("/{id}")
	public ColaboradoresEntity obtenerColaborador(@PathVariable int id)
	{
		return colaboradoresService.obtenerPorId(id);
	}
	
	@PostMapping(path = "/insertar",produces = "application/json")
	public ColaboradoresEntity insertar(@RequestBody ColaboradoresEntity colaborador) {
		return colaboradoresService.insertarColaborador(colaborador);
	}
	
	@PutMapping(path = "/modificar",produces = "application/json")
	public ColaboradoresEntity modificar(@RequestBody ColaboradoresEntity colaborador) {
		return colaboradoresService.modificarColaborador(colaborador);
	}

}
