
// const readline=require('readline');

// const cin =readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })


// cin.question("Ingrese su nombre:",(nombre) => {

//     console.log(` hola ${nombre}`);
//     cin.close();
// });


//------------------------------------------------------------


// let persona={

//     nombre: 'juan',
//     apellido: 'arias',
//     get fullName() {
//         return`El nombre Complero es:${this.nombre} ${this.apellido}`
//     }
// }

// console.log(persona.fullName)

//---------------------------------------------------------------
// acceder a los objetos dinamicamente
// 'use strict'

// let persona2={
//     nombre: 'juan',
//     apellido: 'arias',
//     nota: 4.5
// }

// Object.defineProperty{persona2}

// persona2.apellido='arias heano';

// console.log(persona2)


// login='Director'

// let message;
// if (login == 'Employee') {
//  message = 'Hello';
// } else if (login == 'Director') {
//  message = 'Greetings';
// } else if (login == '') {
//  message = 'No login';
// } else {
//  message = '';
// }

// console.log(message)

// login='Director'
// login == 'Employee' ? message = 'Hello' : (login == 'Director') ? message = 'Greetings' : (login == '') ? message = 'No login' : message = '';   
// console.log(message)



//console.log()
// console.log(5 > 4)
// console.log("apple" > "pineapple")
// console.log("2" > "12")
// console.log(undefined == null)
// console.log(undefined === null)
// console.log(null == "\n0\n" )


// function procesarLinea(entrada){
//     let a = entrada;
//     if (a == 0) {
//      alert( 0 );
//     }
//     if (a == 1) {
//      alert( 1 );
//     }
//     if (a == 2 || a == 3) {
//      alert( '2,3' );
//     }
// } 


// const procesarLinea = entrada =>{

//     let a=entrada;

//     switch (a) {
//         case 1:
//           return`es numero ingresado 1`;
//           break;
//         case 2:
//             return`es numero ingresado 2`;
//           break;
//         case 3:
//             return`es numero ingresado 3`;
//           break;
//         default:
//             return`es numero ingresado es desconocido`;
//           break;
//       }
// }

// console.log(procesarLinea(67))

// const pow = (base,exponente) => {

//     let resultado=1;

//     for(let i=1;i<=exponente;i++)
//         resultado=resultado*base;

//     return resultado
// }

// console.log(pow(2,3))
    

// function doYouAgree(answer, showAgree, showCancel) {
//     if (answer) showAgree()
//     else showCancel();
// }
//    doYouAgree(
//     true, //Can be tru or false
//     function() { console.log("You agreed."); },
//     function() { console.log("You canceled the execution."); }
// ); 


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

let bicicleta1=[];
let bicicleta2=[];

bicicleta1[0]=bicicletasEnsamblar[0];
bicicleta2[0]=bicicletasEnsamblar[1];
console.log(`bicicleta1:${bicicleta1}`)
console.log(`bicicleta2:${bicicleta2}`)

let parterBici1=[];
let parterBici2=[];

parterBici1[0]=bicicleta1[1];
console.log(parterBici1)