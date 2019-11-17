const mongoose = require("../DBconection/DBconection");
const participantesModel = require("../Models/ParticipantesModel");

exports.getParticipantes = async _ => {
    console.log("entré GET SERVICE PARTICIPANTES")
    const enc = await participantesModel.find();
    return enc;
}



exports.saveParticipantes = evento => {
    //console.log(evento);
    console.log("entré POST SERVICE PARTICIPANTES")
    const participantetoToSave = new participantesModel({
        identificacion: evento.body.identificacion,
        nombre: evento.body.nombre,
        fechaInicio : evento.body.fechaInicio,
        fechaFin : evento.body.fechaFin,
        participantes : evento.body.participantes,
        objetivo : evento.body.objetivo,
        estado : evento.body.estado,
    })
    console.log(participantetoToSave)
    participantetoToSave.save()
    .then(true)
    .catch(false);
}

exports.getCollaboratorById = async id => {
    const idTosearch = parseInt(id);
    return await participantesModel.find({identificacion:idTosearch});
}