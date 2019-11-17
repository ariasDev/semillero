package com.sophos.Entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="colaboradores")
public class ColaboradoresEntity {
	
	@Id
	@Column(name="identificacion")
	int id_colaboradores;
	
	@Column(name="nombre")
	String nombre;
	
	@Column(name="apellido")
	String apellido;
	
	@Column(name="cargo")
	String cargo;
	
	@Column(name="usuariored")
	String usuariored;
	
	@Column(name="estado")
	String estado;
	
	@Column(name="fecharegistro")
	Date fecharegistro;

	public ColaboradoresEntity() {
		super();
	}

	public ColaboradoresEntity(int id_colaboradores, String nombre, String apellido, String cargo, String usuariored,
			String estado, Date fecharegistro) {
		super();
		this.id_colaboradores = id_colaboradores;
		this.nombre = nombre;
		this.apellido = apellido;
		this.cargo = cargo;
		this.usuariored = usuariored;
		this.estado = estado;
		this.fecharegistro = fecharegistro;
	}

	public int getId_colaboradores() {
		return id_colaboradores;
	}

	public void setId_colaboradores(int id_colaboradores) {
		this.id_colaboradores = id_colaboradores;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getUsuariored() {
		return usuariored;
	}

	public void setUsuariored(String usuariored) {
		this.usuariored = usuariored;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Date getFecharegistro() {
		return fecharegistro;
	}

	public void setFecharegistro(Date fecharegistro) {
		this.fecharegistro = fecharegistro;
	}

}
