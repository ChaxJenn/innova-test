const mongoose = require("mongoose");

const citaSchema = new mongoose.Schema ({
    clienteNombre: {type: String, required: true},
    telefonoCliente: {type: String},
    estilistaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario", 
        required: true
    },
    procedimientoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Procedimiento",
        required: true
    },
    fecha: {type: Date, required: true},
    estado: {
        type: String,
        enum: ["pendiente", "confirmada", "cancelada", "finalizada"],
        default: "pendiente",
    },
    notas: {type: String},
    creadoPor: {
        type: String, 
        enum: ["admin", "estilistas"],
        required: true,
    },
}, {timestamps: true});

module.exports - mongoose.model("Cita", citaSchema);