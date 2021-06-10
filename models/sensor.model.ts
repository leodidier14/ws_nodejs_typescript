import  mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/ws_nodejs_typescript', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', function() {
    console.log('Connection established to MongoDB');
});

interface ISensor {
    id: number
    name?: string;
    metricsPollution?: Array<number>;
    flux?: number;
}

const sensorSchema = new mongoose.Schema<ISensor>({
    id: { type: Number, required: true },
    name: String,
    metricsPollution: Array,
    flux: Number
})

const Sensor = mongoose.model('Sensor', sensorSchema);

 module.exports = Sensor;