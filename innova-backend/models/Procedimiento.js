import mongoose from "mongoose";

const procedimientoSchema = new mongoose.Schema({
    categoria: {type: String, required: true}, //Ej "Cabello", "Maquillaje"
    nombre: {type: String, required: true},
    descripcion: {type: String},
    duracion: {type: Number, required: true}, // Minutos
    precio: {type: Number, required: true},
    colorEtiqueta: {type: String}, // Codigo Hex para UI
}, {timestamps: true});

const Procedimiento = mongoose.model("Procedimiento", procedimientoSchema);
export default Procedimiento;

