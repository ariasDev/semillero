package com.sophos;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;
import java.util.TreeSet;
import java.util.stream.Stream;

import javax.sound.midi.Soundbank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import Interfaces.InterfazFuncional;

@SpringBootApplication
public class Practica01Application {

	public static void main(String[] args) {
		SpringApplication.run(Practica01Application.class, args);
		
		
//-----------------------------------------------------------------------------------------------------------
		do {
		int opciong=menu();
		switch (opciong) {
			case 0:{
				break;
			}
			case 1:{
				//instancia de la clase carro
				Vehiculo carro1=new Carro("chevrolet",5667);
				//instancia de la clase moto
				Vehiculo moto1=new Moto("ford", 4514);
						
				carro1.encender();
				carro1.acelerar();
				carro1.frenar();
				carro1.apagar();
				
				moto1.encender();
				moto1.acelerar();
				moto1.frenar();
				moto1.apagar();
				break;
			}
			case 2:
			{
				InterfazFuncional saludo=(name)-> "bienvenido"+name;
				InterfazFuncional despedida=(name)-> "hasta pronto"+name;
				InterfazFuncional despedidaFormal=(name)->"fue un gusto hasta pronto"+name;
				
				System.out.println(saludo.accion("juan"));
				System.out.println(despedida.accion("andrea"));
				System.out.println(despedidaFormal.accion("mi bebo"));
				
				InterfazFuncional b=new InterfazFuncional() {
					
					@Override
					public String accion(String name) {
						return "welcome"+name;
					}
				};
				
				b.hola();
				b.accion("mimi");
				
				break;
			}
			case 3:
			{
				Stream.of("Hello", "World").forEach(p -> System.out.println(p));
				/*
			 	List<Integer> lista= new ArrayList<Integer>();
				lista.add(5);
				lista.add(2);
				lista.add(7);
				lista.add(9);
				int total=0;
				for (int numero:lista) {
				total+=numero;
				}
				System.out.println(total);
				*/
				break;
			}
			case 4:
			{
				HashSet<String> hashSetNombres=new HashSet();
				
				System.out.println(hashSetNombres.add("juan"));
				System.out.println(hashSetNombres.add("juan"));
				System.out.println(hashSetNombres.add("andrea"));
				System.out.println(hashSetNombres.add("pacheco"));
				System.out.println(hashSetNombres.add("ana"));
				System.out.println(hashSetNombres);
				
				break;
			}
			case 5:
			{
				TreeSet<String> treeSetNombres=new TreeSet<String>();
				
				System.out.println(treeSetNombres.add("juan"));
				System.out.println(treeSetNombres.add("waldir"));
				System.out.println(treeSetNombres.add("pacheco"));
				System.out.println(treeSetNombres.add("ana"));
				System.out.println(treeSetNombres.add("juan"));
				System.out.println(treeSetNombres);
				
				
				break;
			}
			case 6:
			{
				HashMap<String, String> capitalCities = new HashMap<String, String>();
				
				capitalCities.put("Colombia", "bogotá");
				capitalCities.put("usa", "new york");
				capitalCities.put("inglaterra", "londres");
				System.out.println(capitalCities);
				
				System.out.println(capitalCities.get("usa"));
				
				break;
			}
			case 7:
			{
				LinkedList<String> lista1=new LinkedList();
				
				System.out.println(lista1.add("juan"));
				System.out.println(lista1.add("ana"));
				System.out.println(lista1.add("andrea"));
				System.out.println(lista1.add("andrea"));
				System.out.println(lista1.add("pacheco"));
				
				System.out.println(lista1);
				
				break;
			}
			default:
			{
				break;
			}
		
		}
		}while(true);
		
		
//-----------------------------------------------------------------------------------------------------------		
		
				
				
	}
	
	static int menu()
	{
		Scanner leer=new Scanner(System.in);
		int opcion=0;
		
		System.out.println("\n----------------------------------------------------\n");
		System.out.print("Menu");
		System.out.print("\n 1.clase Abstracta");
		System.out.print("\n 2. interfaces funcionales");
		System.out.print("\n 3. operaciones terminales");
		System.out.print("\n 4. Conjunto");
		System.out.print("\n 5. treeSet");
		System.out.print("\n 6. HashMap");
		System.out.print("\n Ingrese su opción");
		opcion=leer.nextInt();
		System.out.println("\n----------------------------------------------------\n");
		
		return opcion;
	}

}
