import express from "express";
import {
    crearProcedimiento,
    obtenerProcedimientos,
    obtenerProcedimientoPorId,
    actualizarProcedimiento,
    eliminarProcedimiento
} from "../controllers/procedimientoController.js";

import auth from "../middlewares/auth.js";

const router = express.Router();

// ✅ Obtener todos los procedimientos (acceso libre o con auth según decidas)
router.get("/", obtenerProcedimientos);

// ✅ Obtener un procedimiento por ID
router.get("/:id", obtenerProcedimientoPorId);

// 🔒 Crear procedimiento (Solo con token válido, luego validaremos si es admin)
router.post("/", auth, crearProcedimiento);

// 🔒 Actualizar procedimiento (Solo con token válido, luego validaremos si es admin)
router.put("/:id", auth, actualizarProcedimiento);

// 🔒 Eliminar procedimiento (Solo con token válido, luego validaremos si es admin)
router.delete("/:id", auth, eliminarProcedimiento);

export default router;
