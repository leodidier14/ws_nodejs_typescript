
import express from 'express';
const Sensor = require('../models/sensor.model');

    exports.getSensors = async function(req:express.Request, res:express.Response) {
        try {
            let sensors = await Sensor.find()
            res.status(200).json(sensors)
    
        } catch (error) {
            res.status(404).json({
                "response": "error"
            })
        }
    }

    exports.getOneSensor = async function(req:express.Request, res:express.Response) {
        try {
            let sensor = await Sensor.find({id: req.params.id})
            res.status(200).json(sensor)
    
        } catch (error) {
            res.status(404).json({
                "response": "error"
            })
        }
    }

    exports.createSensor = async function(req:express.Request, res:express.Response) {
        try {
            if (!req.body.id) {
                res.status(400).send({ message: "Id can not be empty!" });
                return;
              }
            let newSensor = new Sensor(req.body)
            newSensor.save(newSensor)
            res.status(200).json(newSensor)
    
        } catch (error) {
            res.status(404).json({
                "response": "error"
            })
        }
    }

    exports.updateSensor = async function(req:express.Request, res:express.Response) {
        try {
            let sensor = await Sensor.updateOne({id: req.params.id} , {name: req.body.name})
            res.status(200).json(sensor)
    
        } catch (error) {
            res.status(404).json({
                "response": "error"
            })
        }
    }

    exports.deleteSensor = async function(req:express.Request, res:express.Response) {
        try {
            let sensor = await Sensor.deleteOne({id: req.params.id})
            res.status(200).json(sensor)
    
        } catch (error) {
            res.status(404).json({
                "response": "error"
            })
        }
    }
