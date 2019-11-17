package com.sophos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sophos.entity.PersonasEntity;
import com.sophos.repository.PersonasRepository;

@Service
public class PersonasServiceImpl implements PersonasService {

	@Autowired
	private PersonasRepository personasRepository;

	@Override
	public List<PersonasEntity> getPersonas() {

		return (List<PersonasEntity>) personasRepository.findAll();
	}

	@Override
	public PersonasEntity getPersonasFindId(Integer id) {
		// return personasRepository.findById(id).isPresent() ?
		// personasRepository.findById(id).get() : null;

		if (personasRepository.findById(id).isPresent())
			return personasRepository.findById(id).get();
		else
			return null;
	}

	@Override
	public PersonasEntity insertPersonas(PersonasEntity persona) {
		return personasRepository.save(persona);

	}

	@Override
	public PersonasEntity modificarPersonas(PersonasEntity persona) {
		return personasRepository.save(persona);
	}

	/*
	 * @Override public PersonasEntity eliminarPersonas(long id ) { PersonasEntity
	 * persona = checkIfIdIsPresentandReturnAuthor( id );
	 * personasRepository.deleteById( id ); return persona; }
	 */

}
