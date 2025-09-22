import Procedimiento from "../models/Procedimiento.js";

// Crear procedimiento (Solo admin)
export const crearProcedimiento = async (req, res) => {
    try {
        const {
            categoria,
            nombre,
            descripcion,
            duracion,
            precio,
            colorEtiqueta
        } = req.body;

        const nuevo = new Procedimiento({
            categoria,
            nombre,
            descripcion,
            duracion,
            precio,
            colorEtiqueta
        });

        await nuevo.save();
        res.status(201).json({ ok: true, data: nuevo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error al crear procedimiento" });
    }
};

// Obtener todos
export const obtenerProcedimientos = async (req, res) => {
    try {
        const lista = await Procedimiento.find().sort({ categoria: 1, nombre: 1 });
        res.json({ ok: true, data: lista });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error al obtener la lista" });
    }
};

// Obtener por ID
export const obtenerProcedimientoPorId = async (req, res) => {
    try {
        const proc = await Procedimiento.findById(req.params.id);
        if (!proc) return res.status(404).json({ ok: false, msg: "Procedimiento no encontrado" });
        res.json({ ok: true, data: proc });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error al encontrar procedimiento por ID" });
    }
};

// Actualizar (Solo admin)
export const actualizarProcedimiento = async (req, res) => {
    try {
        const { categoria, nombre, descripcion, duracion, precio, colorEtiqueta } = req.body;
        const proc = await Procedimiento.findById(req.params.id);

        if (!proc) return res.status(404).json({ ok: false, msg: "Procedimiento no encontrado" });

        proc.categoria = categoria ?? proc.categoria;
        proc.nombre = nombre ?? proc.nombre;
        proc.descripcion = descripcion ?? proc.descripcion;
        proc.duracion = duracion ?? proc.duracion;
        proc.precio = precio ?? proc.precio;
        proc.colorEtiqueta = colorEtiqueta ?? proc.colorEtiqueta;

        await proc.save();
        res.json({ ok: true, data: proc });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error al actualizar procedimiento" });
    }
};

// Eliminar (Solo admin)
export const eliminarProcedimiento = async (req, res) => {
    try {
        const proc = await Procedimiento.findById(req.params.id);
        if (!proc) return res.status(404).json({ ok: false, msg: "Procedimiento no encontrado" });

        await proc.deleteOne();
        res.json({ ok: true, msg: "Procedimiento eliminado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error al eliminar procedimiento" });
    }
};
