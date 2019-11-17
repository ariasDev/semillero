const express = require("express");
const participantesService = require("../services/ParticipantesService")

exports.getParticipantes = async ( req, res, next ) => {
    try {
        console.log("entré al get")
        const eventos = await participantesService.getParticipantes();
        console.log("pasé el servicio")
        res.send(eventos);
    }catch(err){
        next(err)
    }
    
}

exports.postParticipantes =  async (req,res, next) => {
    console.log("------------------> Entré post Controller EVENTOS")
    try{
        const eventoResponse = await participantesService.saveParticipantes(req);
        if(eventoResponse == false){
            res.status(400).send("Collaborator not created.")
        }
        res.send({message:"Collaborator Created"})

    }catch(err){
        next(err)
    }
}

exports.recivirParticipantes = async (participantes,res, next)  => {
    console.log("------->entré a participantes controller")
    console.log("esto es lo que llega al participantes controller",participantes);
    
    try{

        for(let i=0; i<participantes.length; i++){
            participantesService.saveParticipantes(participantes[i])
        }

        
    }catch(err){
        console.log(err)
    }

}