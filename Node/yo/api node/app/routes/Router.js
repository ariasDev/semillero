const express = require("express");
const router = express.Router();
const EventosController = require("../controllers/EventosController");
const SesionesController = require("../controllers/SesionesController");
const participantesService = require("../controllers/ParticipantesController");

router.get('/sesiones',SesionesController.getSesiones);
router.post('/sesiones/insertar',SesionesController.postSesiones);
router.put('/sesiones/modificar',SesionesController.putSesiones);

router.get('/eventos',EventosController.getEventos);
router.post('/eventos/insertar',EventosController.postEvento);

router.get('/participantes',participantesService.getParticipantes);
router.get('/participantes/insertar',participantesService.postParticipantes);


module.exports = router;