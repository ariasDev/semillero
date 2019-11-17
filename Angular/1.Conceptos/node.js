// 2do ejercicio
/* 
Crear una promesa y resolverla con FULFILLED despues de 300ms
*/


let promesa=new Promise(resolve => setTimeout(() => resolve('FULFILLED!'), 300))

promesa.then(console.log)

// 3er ejercicio
/*
Then toma dos callbacks el primero cuando se promesa se resuelve y el segundo cuando es rechazada
*/  

const promise = new Promise((resolve, reject) => setTimeout(() => resolve('Mela Caramela!'), 300));
  
const onReject = error => console.log(error.message);
const onResolve= response=> console.log()
  
//promise.then(console.log, onReject);

let names = ["Eliana", "Sebastian", "David", "Laura", "Xiomy", "Susana"];
let index;

names.forEach((element, i) => {
    if (element === "David")
        index = i;
})

console.log("The expected name is: ", names[index], " found in index: ", index)