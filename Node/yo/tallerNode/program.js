function punto1(){
    let resp = new Promise ((resolve, reject) => setTimeout(() => {
        resolve('TIMED OUT!')    
        }, 300));
        
        resp.then(console.log)
        //setTimeout(_=>console.log("TIMED OUT!"),300)
}
//punto1()

//-----------------------------------------------------------------------------------------------------

function punto2(){
//Crear una promesa y resolverla con FULFILLED despues de 300ms

let promesa = new Promise((resolve,reject) => {
    resolve(setTimeout( _ => {
        console.log("FULFILLED!")
    },300))
});

promesa.then()
}
//punto2();

//-----------------------------------------------------------------------------------------------------
function punto3(){
//Then toma dos callbacks el primero cuando se promesa se resuelve y el segundo cuando es rechazada

let promesa = new Promise((resolve,reject) => {
    setTimeout( _ =>{
        reject(new Error("La promesa fué rechazada"));
    },300)
});

const onReject = error => console.log(error.message);
  
promesa.then(null, onReject);

}
//punto3();

//-----------------------------------------------------------------------------------------------------
function punto4(){
/*
Para probar que las promesas se resuelven o rechazan una unica vez crea una promesa que primero se resuelva y 
luego se rechace para comprobar que solo se ejecutara la primera
*/

const promesa = new Promise((resolver,rechazar) => {

    rechazar(new Error("Promesa Rechazada"));
    resolver("Promesa Resuelta!");
    
});

const rechazar = error => console.log(error.message);

promesa.then(console.log,rechazar)

}
//punto4();

//-----------------------------------------------------------------------------------------------------
function punto5(){
/*
Para comprobar que las promesas son siempre asincronas genera una promesa resuelvela con valor de PROMISE VALUE,
consumela e imprime MAIN PROGRAM para verificar que hasta que la promesa no se resuelva no se imprimira en pantalla
*/

const promesa = new Promise((resolve,reject) => {
    setTimeout(_ => resolve("PROMISE VALUE"),500)
});

promesa.then(console.log)
console.log("MAIN PROGRAM")

}
punto5();
