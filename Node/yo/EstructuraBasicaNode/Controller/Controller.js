const controller=require("../Services/Service");

exports.llamarServicio = async nombre => await controller.Encontrar(nombre);
