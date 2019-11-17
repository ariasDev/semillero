package com.sophos.Service;

import java.util.List;

import com.sophos.Entity.ColaboradoresEntity;


public interface ColaboradoresService {
	
    public ColaboradoresEntity obtenerPorId(int id);
	
	public List<ColaboradoresEntity> obtenerColaboradores();
	
	public ColaboradoresEntity insertarColaborador(ColaboradoresEntity colaborador);
	
	public ColaboradoresEntity modificarColaborador(ColaboradoresEntity colaborador);

}
