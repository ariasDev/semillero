const mongoose = require("../DBconection/DBconection");
const sesionesModel = require("../Models/SecionesModel");

exports.getSesiones = async _ => {
    console.log("enre al servicio get")
    const enc = await sesionesModel.find();
    console.log("###########################", enc)
    return enc
}

exports.postSesion = sesion => {
    const sesionToSave = new sesionesModel({
        identificacion: sesion.body.identificacion,
        idEvento : sesion.body.idEvento,
        fecha : sesion.body.fecha,
        nombre : sesion.body.nombre,
        tema : sesion.body.tema,
        nombre : sesion.body.nombre,
        tema : sesion.body.tema,
        asistencia : sesion.body.asistencia,
    });
    sesionToSave.save().then(true).catch(false);
}

exports.saveSesion = sesion => {
   // console.log(sesion);
    console.log("------------------> Entré post Service")
    const sesionToSave = new sesionesModel({
        identificacion: sesion.body.identificacion,
        idEvento : sesion.body.idEvento,
        fecha : sesion.body.fecha,
        nombre : sesion.body.nombre,
        tema : sesion.body.tema,
        nombre : sesion.body.nombre,
        tema : sesion.body.tema,
        asistencia : sesion.body.asistencia,
    })
    console.log(sesionToSave)
    sesionToSave.save()
    .then(true)
    .catch(false);
}

exports.putSesion = async (req,res) => {
    let idSesion = req.params.identificacion;
    let body =  req.body;

    return await sesionesModel.findOneAndUpdate({identificacion:idSesion}, body, {new: true}, (err,res) => {
        if(err){
            res.status(400).json({
                ok : false,
                err
            });
        }
        res = ({
            ok : true,
            usuario : res
        });
    });
}