package Interfaces;

import com.fasterxml.jackson.databind.ser.std.StdKeySerializers.Default;

@FunctionalInterface
public interface InterfazFuncional {
	
	public String accion(String name);
	
	default void hola()
	{
		System.out.println("____________hola desde la interface funcional");
	}

}
