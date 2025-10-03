
import React, { useState } from "react";
import "../styles/CalendarWithStylists.css";

function CalendarWithStylists({ stylists, appointments }) {

    const [currentDate, setCurrentDate] = useState(new Date());

    const hours = Array.from({ length: 17 }, (_, i) => `${i + 5}:00`);

    const getAppointment = (stylistId, hour) => {
        const dateKey = currentDate.toISOString().split("T")[0] // yyyy-mm-dd
        return appointments.find(
            (a) => a.stylistId === stylistId && a.time === hour && a.date === dateKey
        );
    };

    const handlePrevDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(newDate);
    }

    const handleNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(newDate);
    }

    const handleToday = () => {
        setCurrentDate(new Date());
    }

    const handleDateChange = (e) => {
        setCurrentDate(new Date(e.target.value))
    }


    return (
    <div className="calendar-wrapper">

        {/* Navegacion entre dias*/}
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

            <input 
                type="date" 
                value={currentDate.toDateString().split("T")[0]}
                onChange={handleDateChange}
            />
        </div>
        

        {/* Grid del calendario*/}
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
                <div key={`${s.id}-${hour}`} className="calendar-cell body-cell">
                    {appointment ? (
                    <div
                        className="appointment"
                        style={{ backgroundColor: appointment.color }}
                    >
                        {appointment.client}
                    </div>
                    ) : null}
                </div>
                );
            })}
            </React.Fragment>
        ))}
        </div>
    </div>
    );
}

export default CalendarWithStylists;
