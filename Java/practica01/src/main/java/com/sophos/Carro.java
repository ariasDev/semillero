package com.sophos;

public class Carro extends Vehiculo {

	public Carro(String nombreMarca, int nroPlaca) {
		super(nombreMarca, nroPlaca);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void encender(){
		System.out.println("el carro est� encendido...");
		
	}

	@Override
	public void apagar(){
		System.out.println("el carro est� apagado...");
		
	}

	@Override
	public void acelerar(){
		System.out.println("el carro est� acelerando...");
		
	}

	@Override
	public void frenar(){
		System.out.println("el carro est� frenando...");
		
	}

}
