package com.sophos.Service;

import java.util.List;

import com.sophos.Entity.EquiposEntity;

public interface EquiposService {
	
	public EquiposEntity obtenerPorId(int id);
	
	public List<EquiposEntity> obtenerEquipos();
	
	public EquiposEntity insertarEquipo(EquiposEntity equipo);
	
	public EquiposEntity modificarEquipo(EquiposEntity equipo);

}
