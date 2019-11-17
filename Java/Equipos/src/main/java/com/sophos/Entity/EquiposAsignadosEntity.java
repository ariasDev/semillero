package com.sophos.Entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="equiposasignados")
public class EquiposAsignadosEntity {
	
	@Id
	@Column(name="id_ea")
	int id_ea;
	
	@Column(name="id_asignado")
	int id_asignado;
	
	@Column(name="id_equipo")
	int id_equipo;
	
	@Column(name="orden_instalacion")
	String orden_instalacion;
	
	@Column(name="fecha_asignacion")
	Date fecha_asignacion;
	
	@Column(name="fecha_devolucion")
	Date fecha_devolucion;
	
	@Column(name="id_entrega")
	int id_entrega;
	
	@Column(name="estado")
	String estado;
	
	@Column(name="observacion")
	String observacion;
	

}
