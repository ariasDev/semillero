package com.sophos.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="JEAH_PERSONAS")
public class PersonasEntity {
	
	@Id
	@Column(name="IDENTIFICACION")
	int id;
	
	@Column(name="NOMBRE")
	String nombre ;
	
	@Column(name="APELLIDOS")
	String apellidos ;
	
	@Column(name="SEXO")
	String sexo ;
	
	@Column(name="CORREO")
	String correo ;
	
	@Column(name="DIRECCION")
	String direccion ;
	
	@Column(name="TELEFONO")
	String telefono ;

	public PersonasEntity() {
		super();
	}

	public PersonasEntity(int id, String nombre, String apellidos, String sexo, String correo, String direccion,
			String telefono) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.sexo = sexo;
		this.correo = correo;
		this.direccion = direccion;
		this.telefono = telefono;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	
	
	
	

}
