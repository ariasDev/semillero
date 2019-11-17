package com.sophos;

public abstract class Vehiculo {
	private String marca;
	private int placa;
	
	public Vehiculo(String nombreMarca,int nroPlaca) {
		marca=nombreMarca;
		placa=nroPlaca;
		
	}
	public abstract void encender();
	public abstract void apagar();
	public abstract void acelerar();
	public abstract void frenar();

}
