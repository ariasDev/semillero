
exports.Encontrar= async nombre=>{
    console.log(nombre)
    let pos;
    nombre.forEach((element,index) => {
        if(element === "juan"){
            pos = `mi nombre ${element} se encuentra en la posicion ${index}`;
        }
    });
    return pos;
}