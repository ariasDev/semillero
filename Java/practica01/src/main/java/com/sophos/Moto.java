package com.sophos;

public class Moto extends Vehiculo{

	public Moto(String nombreMarca, int nroPlaca) {
		super(nombreMarca, nroPlaca);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void encender(){
		System.out.println("la moto est� encendida...");
		
	}

	@Override
	public void apagar(){
		System.out.println("la moto est� apagada...");
		
	}

	@Override
	public void acelerar(){
		System.out.println("la moto est� acelerando...");
		
	}

	@Override
	public void frenar(){
		System.out.println("la moto est� frenando...");
		
	}

	

}
