package com.sophos.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sophos.Entity.ColaboradoresEntity;
import com.sophos.Repository.ColaboradoresRepository;

@Service
public class ColaboradoresServiceImp implements ColaboradoresService{

	@Autowired
	ColaboradoresRepository colaboradoresRepositoty;
	
	@Override
	public ColaboradoresEntity obtenerPorId(int id) {
		
		if(colaboradoresRepositoty.findById(id).isPresent())
			return colaboradoresRepositoty.findById(id).get();
		else
			return null;
					
	}

	@Override
	public List<ColaboradoresEntity> obtenerColaboradores() {
		
		return (List<ColaboradoresEntity>) colaboradoresRepositoty.findAll() ;
	}

	@Override
	public ColaboradoresEntity insertarColaborador(ColaboradoresEntity colaborador) {
		
		return colaboradoresRepositoty.save(colaborador);
	}

	@Override
	public ColaboradoresEntity modificarColaborador(ColaboradoresEntity colaborador) {
		return colaboradoresRepositoty.save(colaborador);
	}

}
