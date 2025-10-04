// src/components/CalendarWithStylists.jsx
import React, { useState } from "react";
import "../styles/CalendarWithStylists.css";
import { Button, Form, Modal } from "react-bootstrap";

const defaultStylists = [
{ id: 1, name: "Karen", role: "Estilista", img: "https://i.pravatar.cc/50?img=1" },
{ id: 2, name: "Ana", role: "Manicurista", img: "https://i.pravatar.cc/50?img=2" },
{ id: 3, name: "Lucia", role: "Pedicurista", img: "https://i.pravatar.cc/50?img=3" },
{ id: 4, name: "Paula", role: "Colorista", img: "https://i.pravatar.cc/50?img=4" },
{ id: 5, name: "Jenny", role: "Colorista", img: "https://i.pravatar.cc/50?img=5" },
{ id: 5, name: "Jenny", role: "Colorista", img: "https://i.pravatar.cc/50?img=5" },
{ id: 5, name: "Jenny", role: "Colorista", img: "https://i.pravatar.cc/50?img=5" },
{ id: 5, name: "Jenny", role: "Colorista", img: "https://i.pravatar.cc/50?img=5" },
{ id: 5, name: "Jenny", role: "Colorista", img: "https://i.pravatar.cc/50?img=5" },
{ id: 5, name: "Jenny", role: "Colorista", img: "https://i.pravatar.cc/50?img=5" },
{ id: 5, name: "Jenny", role: "Colorista", img: "https://i.pravatar.cc/50?img=5" },
{ id: 5, name: "Jenny", role: "Colorista", img: "https://i.pravatar.cc/50?img=5" }
];


function CalendarWithStylists({ stylists = defaultStylists }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newAppointment, setNewAppointment] = useState({
    stylistId: null,
    client: "",
    time: "",
    date: "",
    color: "#0d6efd",
});

  // Generar horas de 7am a 7pm
    const hours = Array.from({ length: 13 }, (_, i) => `${i + 7}:00`);

    const getAppointment = (stylistId, hour) => {
        const dateKey = currentDate.toISOString().split("T")[0];
            return appointments.find(
                (a) => a.stylistId === stylistId && a.time === hour && a.date === dateKey
            );
    };

  // Navegación
    const handlePrevDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(newDate);
    };
    const handleNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(newDate);
    };
    const handleToday = () => setCurrentDate(new Date());
    const handleDateChange = (e) => setCurrentDate(new Date(e.target.value));

    const formattedDate = currentDate.toISOString().split("T")[0];

    // Abrir modal al dar click en celda
    const handleCellClick = (stylistId, hour) => {
        setNewAppointment({
        stylistId,
        client: "",
        process: "",
        time: hour,
        date: formattedDate,
        color: "#0d6efd",
        });
        setShowModal(true);
    };

    // Guardar cita
    const handleSaveAppointment = () => {
        setAppointments([...appointments, newAppointment]);
        setShowModal(false);
    };

    return (
        <div className="calendar-wrapper">
        {/* Navegación entre días */}
        <div className="calendar-nav">
            <button onClick={handlePrevDay}>⬅</button>
            <button onClick={handleToday}>Hoy</button>
            <button onClick={handleNextDay}>➡</button>

            <h3 className="current-date">
            {currentDate.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
            </h3>

            <input type="date" value={formattedDate} onChange={handleDateChange} />
        </div>

        {/* Grid del calendario */}
        <div
            className="calendar-grid"
            style={{
            gridTemplateColumns: `100px repeat(${stylists.length}, 250px)`,
            }}
        >
            {/* Header: columna de horas */}
            <div className="calendar-cell header-cell">Hora</div>

            {/* Header: estilistas */}
            {stylists.map((s) => (
            <div key={s.id} className="calendar-cell header-cell stylist-header">
                <img src={s.img} alt={s.name} className="stylist-avatar" />
                <div className="stylist-info">
                <strong>{s.name}</strong>
                <p className="stylist-role">{s.role}</p>
                </div>
            </div>
            ))}

            {/* Filas de horas */}
            {hours.map((hour) => (
            <React.Fragment key={hour}>
                {/* Columna de hora */}
                <div className="calendar-cell body-cell hour-cell">{hour}</div>

                {/* Celdas de estilistas */}
                {stylists.map((s) => {
                const appointment = getAppointment(s.id, hour);
                return (
                    <div
                    key={`${s.id}-${hour}`}
                    className="calendar-cell body-cell"
                    onClick={() => !appointment && handleCellClick(s.id, hour)} // click solo si está libre
                    style={{ cursor: appointment ? "default" : "pointer" }}
                    >
                    {appointment ? (
                        <div
                        className="appointment d-flex-column m-0 align-items-center justify-content-center text-align-center"
                        style={{ backgroundColor: appointment.color }}
                        >
                            <div className="">
                                <p>{appointment.client}</p>
                                <p>{appointment.process}</p>
                            </div>
                        </div>
                    ) : null}
                    </div>
                );
                })}
            </React.Fragment>
            ))}
        </div>

        {/* Modal de nueva cita */}    
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva Cita</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Cliente:</Form.Label>
                        <Form.Control 
                            type="text"
                            value={newAppointment.client}
                            onChange={(e) => 
                                setNewAppointment({...newAppointment, client: e.target.value})
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Procedimiento:</Form.Label>
                        <Form.Control
                            type="text"
                            value={newAppointment.process}
                            onChange={(e) => 
                                setNewAppointment({...newAppointment, process: e.target.value})
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Hora:</Form.Label>
                        <Form.Control type="text" value={newAppointment.time} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Fecha:</Form.Label>
                        <Form.Control type="text" value={newAppointment.date} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Color:</Form.Label>
                        <Form.Control
                            type="color"
                            value={newAppointment.color}
                            onChange={(e) => 
                                setNewAppointment({...newAppointment, color:e.target.value})
                            }
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => setShowModal(false)}>
                    Cancelar
                </Button>
                <Button variant="success" onClick={handleSaveAppointment}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default CalendarWithStylists;
