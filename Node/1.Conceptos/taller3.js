function punto1(){
/*
punto1 
Tiene un arreglo de objetos de usuario, cada uno tiene user.name. Escriba el código
que lo convierte en un arreglo de nombres.
let john = { name: "John", age: 25 };
*/

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [ john, pete, mary ];
    let names = [john.name, pete.name, mary.name]
    console.log( names ); // John, Pete, Mary
}

//punto1();

//----------------------------------------------------------------------------------------------------------

function punto2(){

    /*Tiene una arreglo de objetos de usuario, cada uno tiene nombre, apellido e
    identificación. Escriba el código para crear otro arreglo a partir de él, de objetos con id
    y fullName, donde fullName se genera a partir de nombre y apellido. */

    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };
    let users = [ john, pete, mary ];

    const mapearUsers = usuarios => {
        let userMapped=[];
        for(let i=0;i<usuarios.length;i++){
            let nuevoObjeto={
                id : usuarios[i].id,
                fullName : `${usuarios[i].name} ${usuarios[i].surname}`
            }
            userMapped.push(nuevoObjeto);
        }

        return userMapped;
    }

    console.log(mapearUsers(users))
}

//punto2();

//----------------------------------------------------------------------------------------------------------

function punto3() {
/*Escriba la función getAverageAge (usuarios) que recibe un arreglo de objetos con edad
(age) como propiedad y devuelve la edad promedio.
La fórmula para el promedio es (age1 + age2 + ... + ageN) / N. Por ejemplo:*/

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];

    const getAverageAge = people => {
        let suma=0;
        let prom=0;

        for(let i=0; i<people.length; i++)
            suma=suma+ people[i].age; 

        prom=suma/people.length;
        return prom
    }

    console.log(`El promedio de edades es:${getAverageAge(arr)}`)
}

//punto3();



function punto4(){
/*Sea arr sea un arreglo. Cree una función unique (arr) que debería devolver un arreglo
con elementos únicos de arr. Por ejemplo: */

    let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];

    function set(array){
        let unique = [];
        for(let i=0; i<array.length; i++){
            if(unique.indexOf(array[i])=== -1) {
                unique.push(array[i]);
            }       
        }
        return unique
    }

    console.log(set(values))
}

// punto4();

//----------------------------------------------------------------------------------------------------------

function punto5(){
/*Escriba la tarea de desestructuración para obtener:
La propiedad name en una variable name.
La propiedad age en una variable age.
La propiedad isAdmin en la variable isAdmin (falso, si no existe tal propiedad)
Aquí hay un ejemplo de los valores después de la tarea: */

    let user = {
        name: "John",
        years: 30
    };

        let {name,years} = user

        console.log(name)
        console.log(years)
}

//punto5();
//----------------------------------------------------------------------------------------------------------

function punto6{
    let bicicletasEnsamblar=[
        {
        numSerie:1,
        partes: [
                {
                tipo:"llanta_trasera",
                referencia:"Michelin R29"
                },
                {
                tipo:"marco",
                referencia:"Specialized Rock Hopper"
                },
                {
                tipo:"llanta_delantera",
                referencia:"Michelin R29"
                }
            ]
        },
        {
        numSerie:2,
        partes: [
                {
                tipo:"llanta_trasera",
                referencia:"Michelin R27"
                },
                {
                tipo:"marco",
                referencia:"Trek 125"
                },
                {
                tipo:"llanta_delantera",
                referencia:"Michelin R27"
                }
            ]
        }
    ];
}