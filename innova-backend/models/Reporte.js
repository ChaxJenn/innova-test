const mongoose = require("mongoose");

const reporteSchema = new mongoose.Schema ({
    mes: {type: String, required: true}, // Formato "YYYY-MM"
    totalIngresos: {type: Number, default: 0},
    TotalCitas: {type: Number, default: 0},
    citasCanceladas: {type: Number, default: 0},
}, {timestamps: true});

module.exports = mongoose.model("Reporte", reporteSchema);