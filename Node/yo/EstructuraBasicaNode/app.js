const controlador =require("./Controller/Controller");


const busqueda= async _=>{
    let nombre = ["pepe","camila","sebastian","juan","eliana"];
    return await controlador.llamarServicio(nombre);
}

const consumir = busqueda();

consumir.then(console.log)

