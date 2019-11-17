const mongoose = require("../DBconection/DBconection");
const EventosModel = require("../Models/EventosModels");
const participantesContoller = require("../controllers/ParticipantesController");

exports.getEventos = async _ => {
    console.log("enre al servicio")
    const enc = await EventosModel.find();
    return enc;
}

exports.saveEvento = evento => {
    participantesContoller.recivirParticipantes(evento.body.participantes)
    console.log("------------------> Entré post Service EVENTOS")
    const eventoToSave = new EventosModel({
        identificacion: evento.body.identificacion,
        nombre: evento.body.nombre,
        fechaInicio : evento.body.fechaInicio,
        fechaFin : evento.body.fechaFin,
        participantes : evento.body.participantes,
        objetivo : evento.body.objetivo,
        estado : evento.body.estado,
    })
    //console.log(eventoToSave)
    eventoToSave.save()
    .then(true)
    .catch(false);
}