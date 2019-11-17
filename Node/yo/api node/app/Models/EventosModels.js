const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventosSchema = Schema({
    identificacion : Number,
    nombre : String,
    fechaInicio: Date,
    fechaFin: Date,
    participantes : Array,
    objetivo : String,
    estado : String
})

module.exports = mongoose.model('evento',EventosSchema);