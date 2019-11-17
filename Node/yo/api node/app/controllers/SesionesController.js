const express = require("express");
const sesionesService = require("../services/SesionesServise")

exports.getSesiones = async ( req, res, next ) => {
    try {
        console.log("entre al controlador")
        const sesiones = await sesionesService.getSesiones();
        console.log("pase el servicio")
        res.send(sesiones);
    }catch(err){
        next(err)
    }
     
}
exports.postSesion = async(req, res, next) => {
    try {
        console.log("queiro ver esto", req.body)
        const sesionResponse = await sesionesService.postSesion(req);
        if (sesionResponse === false) {
            res.status(400).send('sesion no creado');
        }
        res.send({ message: 'sesion creado' })
    } catch (err) {
        next(err)

    }
}

exports.postSesiones =  async (req,res, next) => {
    console.log("------------------> Entré post Controller")
    console.log("dato", req.body)
    try{
        const fixed = Object.create(req.body);
        console.log("desesperacion", fixed)
        const sesiontoResponse = await sesionesService.saveSesion(req);
        if(sesiontoResponse == false){
            res.status(400).send("sesion not created.")
        }   
        res.send({message:"sesion Created"})

    }catch(err){
        next(err)
    }
}

exports.putSesiones = async (req,res,next) => {
    try{
        const sesionResponse = await sesionesService.putSesion(req,res);
        res.send({sesionResponse}) 

    }catch(error){
        next(error)
    }
}