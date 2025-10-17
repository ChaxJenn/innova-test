import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

function Inventario() {
const [procedimientos, setProcedimientos] = useState([]);
const [showModal, setShowModal] = useState(false);
const [nuevoProc, setNuevoProc] = useState({
    categoria: "",
    nombre: "",
    descripcion: "",
    duracion: "",
    precio: "",
    colorEtiqueta: "#ffc107",
});

// 🔹 Cargar lista de procedimientos al montar
useEffect(() => {
    obtenerProcedimientos();
}, []);

// Obtener lista desde el backend

const obtenerProcedimientos = async () => {
    const token = localStorage.getItem("token");
    if(!token) {
        console.warn("No hay token, usuario no autenticado");
        return;
    }

    try {
        const res = await fetch("http://localhost:5000/api/procedimientos", {
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`,
            },
        });

        if (!res.ok) {
            console.error("Error HTTTP:", res.status);
            return;
        }

        const data = await res.json();
        setProcedimientos(data);
    } catch (error) {
        console.error("Error al obtener procedimientos", error);
    }
};

// Guardar nuevo procedimiento
const handleGuardar = async () => {
    const token = localStorage.getItem("token");

    if(!token) {
        alert("No hay token. Inicia sesi[on para crear procedimientos")
        return;
    }

    try {
    const res = await fetch("http://localhost:5000/api/procedimientos", {
        method: "POST",
        headers: { 
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`,
        },
        body: JSON.stringify(nuevoProc),
    });

    if (res.ok) {
        obtenerProcedimientos();
        setShowModal(false);
        setNuevoProc({
            categoria: "",
            nombre: "",
            descripcion: "",
            duracion: "",
            precio: "",
            colorEtiqueta: "#ffc107",
        });
    } else {
        const errData = await res.json();
        console.error("Error al guardar", errData);
        alert(`Error: ${errData.msg || "No autorizado"}`);
    }
    } catch (error) {
        console.error("Error al guardar procedimiento", error);
    }
};

return (
    <div className="container py-4">
    <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Inventario de Procedimientos</h3>
        <Button variant="primary" onClick={() => setShowModal(true)}>
        + Nuevo Procedimiento
        </Button>
    </div>

    <Table bordered hover responsive>
        <thead className="table-dark">
        <tr>
            <th>Categoría</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Duración</th>
            <th>Precio</th>
            <th>Color</th>
        </tr>
        </thead>
        <tbody>
            {Array.isArray(procedimientos) && procedimientos.length > 0 ? (
                procedimientos.map((p) => (
                <tr key={p._id}>
                    <td>{p.categoria}</td>
                    <td>{p.nombre}</td>
                    <td>{p.descripcion}</td>
                    <td>{p.duracion} min</td>
                    <td>${p.precio}</td>
                    <td>
                        <span
                        style={{
                            backgroundColor: p.colorEtiqueta,
                            display: "inline-block",
                            width: "25px",
                            height: "25px",
                            borderRadius: "50%",
                        }}
                        ></span>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={6} className="text-center text-muted">
                        {typeof procedimientos === "object" ? "No autorizado o sin datos" : "Cargando..."}
                    </td>
                </tr>
            )}
        </tbody>
    </Table>

    {/* Modal para nuevo procedimiento */}
    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Nuevo Procedimiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-2">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
                type="text"
                value={nuevoProc.categoria}
                onChange={(e) =>
                setNuevoProc({ ...nuevoProc, categoria: e.target.value })
                }
            />
            </Form.Group>
            <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
                type="text"
                value={nuevoProc.nombre}
                onChange={(e) =>
                setNuevoProc({ ...nuevoProc, nombre: e.target.value })
                }
            />
            </Form.Group>
            <Form.Group className="mb-2">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
                as="textarea"
                rows={2}
                value={nuevoProc.descripcion}
                onChange={(e) =>
                setNuevoProc({ ...nuevoProc, descripcion: e.target.value })
                }
            />
            </Form.Group>
            <Form.Group className="mb-2">
            <Form.Label>Duración (minutos)</Form.Label>
            <Form.Control
                type="number"
                value={nuevoProc.duracion}
                onChange={(e) =>
                setNuevoProc({ ...nuevoProc, duracion: e.target.value })
                }
            />
            </Form.Group>
            <Form.Group className="mb-2">
            <Form.Label>Precio</Form.Label>
            <Form.Control
                type="number"
                value={nuevoProc.precio}
                onChange={(e) =>
                setNuevoProc({ ...nuevoProc, precio: e.target.value })
                }
            />
            </Form.Group>
            <Form.Group className="mb-2">
            <Form.Label>Color de etiqueta</Form.Label>
            <Form.Control
                type="color"
                value={nuevoProc.colorEtiqueta}
                onChange={(e) =>
                setNuevoProc({ ...nuevoProc, colorEtiqueta: e.target.value })
                }
            />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
        </Button>
        <Button variant="primary" onClick={handleGuardar}>
            Guardar
        </Button>
        </Modal.Footer>
    </Modal>
    </div>
);
}

export default Inventario;
