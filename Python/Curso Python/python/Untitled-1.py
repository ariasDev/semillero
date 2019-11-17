import unittest
#--------------------------------------------
#EJERCICIO 1
nota = 9

if (nota<5):
  print("la nota es insuficiente")
elif (nota>=5 and nota<7):
  print("la nota es suficiente")
elif (nota>=7 and nota<9):
  print("la nota es notable")
elif (nota>=9 and nota<=10):
  print("la nota es sobresaliente")


#--------------------------------------------
#EJERCICIO 2
parcial1 = 4.4
parcial2 = 3.4
if (parcial1>=4.5 and parcial2>=4.5):
    print("se exime")
elif (parcial1==5.0 and parcial2>=3.0):
     print("se exime")
elif (parcial2==5.0 and parcial1>=3.0):
     print("se exime")
else:
   print("NO se exime")

#--------------------------------------------
#EJERCICIO 3

numero=17
contador=0

for i in range(1,numero,1):
  if((numero/i)%2==0):
    contador+=1

if contador==2:
  print(numero," es primo")
else:
  print(numero,"No es primo")

#--------------------------------------------
#EJERCICIO 4

nombres1 = ["Ava", "Emma", "Olivia"]
nombres2 = ["Olivia", "Sophia", "Emma"]

orden = set(nombres1+nombres2)

print(orden)

#--------------------------------------------
#EJERCICIO 5

palabras = ['abc', 'xyz', 'ab0', '1221']

for i in range(0,len(palabras)):
  if(palabras[i].isalpha() and len(palabras[i])>=2 ):
    print(palabras[i])

#--------------------------------------------
#EJERCICIO 6

conjunto_a_multiplicar = {2,4,6,8}

multiplicacion=1
for i in conjunto_a_multiplicar:
  print(i)
  multiplicacion*=i

print(multiplicacion)

#--------------------------------------------
#EJERCICIO 7

lista_completa = [3,6,1,8,10,23,54,32,3,1,10]
print("Lista completa: ",lista_completa)
sinPrimos=[l for l in lista_completa if l%2==0 ]
ordenada=sorted(set({l for l in lista_completa if l%2==0}),reverse=True)
print("Lista ordenada: ",ordenada)

#--------------------------------------------
#
numeros={l for l in range(10)}
print(numeros)

pares={l for l in numeros if l%2==0}
print(pares)

#--------------------------------------------
#
diccionario = {
    "nombre": "Juan", 
    "apellido": "Pérez", 
    "edad": 25
}
print(diccionario)

# Adicionar un elemento
diccionario.update({"nacionalidad": "Colombiano"})
print(diccionario)

diccionario.update({"cedula":1001})
print(diccionario)
#--------------------------------------------
#EJERCICIO 8

lista_nombres=["juan","andrea","paco","jaime"]

def primero_y_ultimo(lista):
  return lista[0],lista[-1]

p,u= primero_y_ultimo(lista_nombres)
print("primero=",p,"\nultimo=",u)

#--------------------------------------------
#EJERCICIO 9

def invertir_palabras(frase):
  Lfrase=list(frase.split())
  return (sorted(Lfrase,reverse=True))

frase=invertir_palabras("Mi nombre es Pepito Pérez") # se espera "Pérez Pepito es nombre mi"
print(frase)
#--------------------------------------------
#EJERCICIO 9

base = ("jpg", "png")
validar = ["jpg", "gif", "bmp", "tiff", "png", "docx", "xlsx", "pdf"]
x=lambda palabra: palabra in base

pasan = [l for l in validar if x(l)]

#--------------------------------------------
#EJERCICIO 11
def division_positivos(dividendo, divisor):
  
  if(dividendo>=0 and divisor>=0):
    try: 
      resultado=dividendo/divisor
    except:
      resultado=0
      print("No es posible la divison ")
  else:
    print("solo es posible la division de numeros positivos")
    resultado=0

  return resultado

print(division_positivos(10, 2))
print(division_positivos(10, 0))
print(division_positivos(-15, 3))

#--------------------------------------------
#EJERCICIO 12
class Suma():
  valor=0
  
  def __init__(self,arg):
    self.valor=arg
    
  def getValor(self):
    return self.valor

  def accion(self,arg):
     self.valor=arg+1
     return self.valor
  
  

class Multiplicacion(Suma):
  def __init__(self, arg):
    super().__init__(arg)

  def getValor(self):
    return self.valor

  def accion(self,arg):
    self.valor=arg*2
    return self.valor


suma1=Suma(3)
multiplicacion1=Multiplicacion(4)
print(suma1.valor)
print(multiplicacion1.valor)

suma1.accion(2)
multiplicacion1.accion(3)
print(suma1.valor)
print(multiplicacion1.valor)

#--------------------------------------------
#EJERCICIO 13
import unittest
class TestClassSuma(unittest.TestCase):
  
  suma2 = None
  
  def setUp(self):
    self.suma2 = Suma(2)

  def testSuma(self):
    self.assertEqual(self.suma2.accion(3), 4)

class TestClassMultiplicacion(unittest.TestCase):
  
  mult = None
  
  def setUp(self):
    self.mult = Multiplicacion(2)

  def testSuma(self):
    self.assertEqual(self.mult.accion(3), 6)


# Ejecuta todas las clases de pruebas configuradas
unittest.main(argv=['ignorar'], exit=False, verbosity=2)

#--------------------------------------------
#EJERCICIO 14

import unittest

class persona():
  nombre=""
  apellido=""

  def __init__(self,nombre,apellido):
    self.nombre=nombre
    self.apellido=apellido

  def getNombre(self):
    return self.nombre

juan=persona("juan","Arias")
print(juan.apellido)
print(juan.getNombre())

class testPersona(unittest.TestCase):

  Persona_t=None
  def setUp(self):
    self.Persona_t=persona("Andrea","Martinez")
    
  def testGetNombre(self):
    self.assertEqual(self.Persona_t.getNombre(),"Andrea")

unittest.main(argv=['ignorar'], exit=False, verbosity=2)