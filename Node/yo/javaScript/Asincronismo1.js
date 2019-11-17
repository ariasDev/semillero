const valorMitad=(array)=> Math.round(array[array.length/2]);
const mostarMitadVector=(array)=> {for(let i=0;i<Math.round(array.length/2);i++)console.log(`pos${i}:${array[i]}`)}

const crearVector=(num)=>{

    console.log("-----------------------------------------------------------entró en crearVector()")
    let vec=[];
    for(let i=1;i<5;i++)
        vec.push(num*i);

    console.log(`El vector generado es ${vec}`);
    console.log(`el valor de la mitad del vector es ${valorMitad(vec)}`)
    console.log("---La mitad del vector generado")
    mostarMitadVector(vec)
}

const Espar=(numero)=>{
    console.log("entre a promesa", numero)
    return new Promise(
        (resolve,reject)=>{
            if(numero % 2 === 0){
                console.log("enre a par")
                resolve(Math.pow(numero, 2))
            }
            else{
                reject(numero)
            }
        });
}
/*const EvaluarNumero=async(numero)=>{  
    try{
        let respuesta = await Espar(numero);
        console.log(`La respuesta de la romesa es= ${respuesta}`);
    }
    catch(error){
        console.log(error)
    }
    finally{
        crearVector(respuesta)
    }  
}*/

const EvaluarNumero2 = async numero => {  
    try{
        let respuesta = await Espar(numero);
        numero = respuesta;
        console.log(`La respuesta de la promesa es= ${respuesta}`);
    }
    catch(error){
        console.log(error)
    }
    finally{
        crearVector(numero)
    }  
}

/*const EvaluarNumero2 = numero => {
    let respuesta = Espar(numero);
    respuesta.then(response => {
        console.log("esto me respondio la promesa ", response)
        crearVector(response)
    }).catch(err => {
        console.log("esto me respondio la promesa ", err)
        crearVector(err)
    })
}*/

EvaluarNumero2(6)