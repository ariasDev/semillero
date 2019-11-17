const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParticipantesSchema = Schema({
    identificacion : Number,
    nombre : String, 
    careo : String,
    estado : String
})

module.exports = mongoose.model('participantes',ParticipantesSchema);