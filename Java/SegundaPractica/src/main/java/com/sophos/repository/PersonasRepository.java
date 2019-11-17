package com.sophos.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sophos.entity.PersonasEntity;

@Repository
public interface PersonasRepository extends CrudRepository<PersonasEntity, Integer> {

}
