package com.sophos.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sophos.Entity.ColaboradoresEntity;

@Repository
public interface ColaboradoresRepository extends CrudRepository<ColaboradoresEntity, Integer>{

}
