// src/pages/CalendarPages.jsx
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap";

// Estilos Bootstrap y FontAwesome
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

// Estilos de FullCalendar (v6 -> vienen desde @fullcalendar/common)
import "@fullcalendar/common/main.css";


// Importa tu StylistsBar
import StylistsBar from "../components/StylistsBar";

function CalendarPages() {
  const [events, setEvents] = useState([
    { title: "Cita con María", date: "2025-09-22", backgroundColor: "#d63384" },
    { title: "Cita con Ana", date: "2025-09-23", backgroundColor: "#0d6efd" },
  ]);

  const handleDateClick = (info) => {
    alert(`Has hecho clic en la fecha: ${info.dateStr}`);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Barra lateral de estilistas */}
        <div className="col-md-3 mb-4">
          <StylistsBar />
        </div>

        {/* Calendario */}
        <div className="col-md-9">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <FullCalendar
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  bootstrap5Plugin,
                ]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                events={events}
                dateClick={handleDateClick}
                themeSystem="bootstrap"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPages;
