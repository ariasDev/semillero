package com.sophos.services;

import java.util.List;
import com.sophos.entity.PersonasEntity;

public interface PersonasService {
	
	public List<PersonasEntity>getPersonas();
	
	public PersonasEntity getPersonasFindId(Integer id);
	
	public PersonasEntity insertPersonas(PersonasEntity persona);
	
	public PersonasEntity modificarPersonas(PersonasEntity persona);

	//public PersonasEntity eliminarPersonas(long id);

	

}
