package com.sophos.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sophos.Entity.EquiposEntity;
import com.sophos.Repository.EquiposRepository;

@Service
public class EquiposServiceImp implements EquiposService{

	@Autowired
	EquiposRepository equiposRepository;
	
	@Override
	public EquiposEntity obtenerPorId(int id) {
		
		if(equiposRepository.findById(id).isPresent())
			return equiposRepository.findById(id).get();
		else
			return null;
	}

	@Override
	public List<EquiposEntity> obtenerEquipos() {
		return  (List<EquiposEntity>) equiposRepository.findAll();
	}

	@Override
	public EquiposEntity insertarEquipo(EquiposEntity equipo) {
		return equiposRepository.save(equipo);
	}

	@Override
	public EquiposEntity modificarEquipo(EquiposEntity equipo) {
		return equiposRepository.save(equipo);
	}

}
