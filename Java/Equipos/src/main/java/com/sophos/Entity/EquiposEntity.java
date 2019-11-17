package com.sophos.Entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="equipos")
public class EquiposEntity {
	
	@Id
	@Column(name="id")
	int id;
	
	@Column(name="marca")
	String marca;
	
	@Column(name="discoduro")
	String discoduro;
	
	@Column(name="placa")
	String placa;
	
	@Column(name="fecharegistro")
	Date fecharegistro;
	
	@Column(name="idrecibe")
	int idrecibe;

	public EquiposEntity() {
		super();
	}

	public EquiposEntity(int id, String marca, String discoduro, String placa, Date fecharegistro, int idrecibe) {
		super();
		this.id = id;
		this.marca = marca;
		this.discoduro = discoduro;
		this.placa = placa;
		this.fecharegistro = fecharegistro;
		this.idrecibe = idrecibe;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getDiscoduro() {
		return discoduro;
	}

	public void setDiscoduro(String discoduro) {
		this.discoduro = discoduro;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public Date getFecharegistro() {
		return fecharegistro;
	}

	public void setFecharegistro(Date fecharegistro) {
		this.fecharegistro = fecharegistro;
	}

	public int getIdrecibe() {
		return idrecibe;
	}

	public void setIdrecibe(int idrecibe) {
		this.idrecibe = idrecibe;
	}
	
	
	

}
