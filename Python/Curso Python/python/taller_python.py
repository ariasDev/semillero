#__________________________________
lista=[]
for i in range(1,20,1):
    if(i%2==1):
        lista.append(i)
print(lista)
#___________________________________
#sin condicionales
conjunto = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19}
for i in range(1,20,1):
    lista.append(i in conjunto)
print(lista)
#___________________________________
conjunto = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19}
lista=[l for l in conjunto]
print(lista)
#___________________________________
list_a =['Camilo', 'Juan', 'Sebastian', 'Laura', 'Esteban','Carlos' , 'Oscar']
#Ejercicio: Buscar Laura y decir la posicion en la que se encuentra.
print("EXITE LAURA:","Laura" in list_a)
list_a.index("Laura")
#___________________________________
def buscarPornombre(nombre):
    if(nombre in list_a):
        return print("el nombre ",nombre," está en la posicion ",list_a.index("Laura"))

res=buscarPornombre("Laura")
#___________________________________
nombre='Daenerys Targaryen'
caracteres_unicos=list(set(list(nombre)))
print(caracteres_unicos,".En su nombre hay ",len(caracteres_unicos)," unicos")
#___________________________________
nombre='Daenerys Targaryen'
def caracteres_respetidos(nombre):
    caracteres_unicos=list(set(list(nombre)))
    for i in range(len(caracteres_unicos)):
        print(caracteres_unicos[i],nombre.count(caracteres_unicos[i]))
caracteres_respetidos(nombre)
#___________________________________
lista_original=['Camilo', 'Juan', 'Sebastian', 'Laura', 'Esteban', 'Carlos', 'Oscar', 'Juan', 'Sebastian', 'Alex', 'laura']
print(lista_original)
print()
def quitar_duplicados(lista):
    lista_min = [i.lower() for i in lista]
    return list(set(lista_min))

lista_sinDuplicados=quitar_duplicados(lista_original)
print(lista_sinDuplicados)
#___________________________________
float_list = [1.5,1.3,-1,-3.6,-5,-9.14,56.12]
def aprox_valor(lista):
    redondeados=[round(i) for i in lista]
    return redondeados
valores_redondeados= aprox_valor(float_list)
print(valores_redondeados)
#___________________________________
lista_ordenada =[1, 2, 8, 10, 10, 12, 19]
numx=0

def hallar_ceilX(li,num):
    ceil=0
    for i in range(len(li)):
        if li[i]>=numx:
            ceil=li[i]
            break
    return ceil

respuesta=hallar_ceilX(lista_ordenada,numx)
print(respuesta)


#___________________________________





