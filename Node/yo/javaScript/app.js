require('dotenv').config();

let nombre_local="juandresan"
const evaluarNombre=(name)=>{if(process.env.NOMBRE.indexOf(nombre_local)!=-1)console.log(`los nombres son iguales`);else console.log(`los nombres no son iguales`);}
evaluarNombre(nombre_local)