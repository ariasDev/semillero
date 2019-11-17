const express = require("express");
const EventosService = require("../services/EventosServices")

exports.getEventos = async ( req, res, next ) => {
    try {
        console.log("entré al get")
        const eventos = await EventosService.getEventos();
        console.log("pasé el servicio")
        res.send(eventos);
    }catch(err){
        next(err)
    }
    
}

exports.postEvento =  async (req,res, next) => {
    console.log("------------------> Entré post Controller EVENTOS")
    try{
        const eventoResponse = await EventosService.saveEvento(req);
        if(eventoResponse == false){
            res.status(400).send("Collaborator not created.")
        }
        res.send({message:"Collaborator Created"})

    }catch(err){
        next(err)
    }
}