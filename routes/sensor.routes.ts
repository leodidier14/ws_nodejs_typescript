const express = require('express');
const SensorController = require("../controllers/sensor.controller");

const router = express.Router();

router.use(express.json());

router.get('/sensors', SensorController.getSensors)
router.get('/sensors/:id', SensorController.getOneSensor)

router.post('/sensors', SensorController.createSensor)
router.put('/sensors/:id', SensorController.updateSensor)
router.delete('/sensors/:id', SensorController.deleteSensor)

module.exports = router;
