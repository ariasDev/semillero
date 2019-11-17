const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SesionesSchema = Schema({

    identificacion : Number,
    idEvento : Number,
    fecha : Date,
    nombre : String,
    tema : String,
    asistencia : Boolean
})

module.exports = mongoose.model('sesiones',SesionesSchema);