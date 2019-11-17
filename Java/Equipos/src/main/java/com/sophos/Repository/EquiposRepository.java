package com.sophos.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sophos.Entity.EquiposEntity;

@Repository
public interface EquiposRepository extends CrudRepository<EquiposEntity, Integer> {

}
