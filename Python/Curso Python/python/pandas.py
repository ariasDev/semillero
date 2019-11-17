#Leer el archivo de excel
import pandas as pd

#leer el archivo completo
Datos=pd.ExcelFile("datos.xlsx")
print(Datos.sheet_names)

#hoja 1 en un dataframe
Hoja_Datos_1=Datos.parse("datos_1")

#hoja 2 en un dataframe
Hoja_Datos_2=Datos.parse("datos_2")

#hoja 3 en un dataframe
Hoja_Datos_3=Datos.parse("datos_3")

#hoja 4 en un dataframe
Hoja_Datos_4=Datos.parse("datos_4")

#hoja datos_completos en un dataframe
Hoja_datos_completos=Datos.parse("datos_completos")

#hoja datos_1_1 en un dataframe
Hoja_datos_1_1=Datos.parse("datos_1_1")


diccionario = {
    "nombre": "Juan", 
    "apellido": "Pérez", 
    "edad": 25, 
    "hobbies": ["música", "deportes"]
}

diccionario.update({"nacionalidad": "Colombiano"})

print(diccionario)