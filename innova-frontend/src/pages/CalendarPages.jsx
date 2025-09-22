// src/pages/CalendarPages.jsx
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap";

// Importar estilos de FullCalendar
import "@fullcalendar/core/index.css";
import "@fullcalendar/daygrid/index.css";
import "@fullcalendar/timegrid/index.css";
import "@fullcalendar/bootstrap5/index.css";

// Importar tu barra de estilistas
import StylistsBar from "../components/StylistsBar";

export default function CalendarPages() {
  const [events, setEvents] = useState([
    { title: "Cita de prueba", date: "2025-09-20" },
  ]);

  return (
    <div className="container py-4">
      {/* Barra de estilistas arriba */}
      <StylistsBar />

      <h2 className="text-center my-4">Calendario de Citas - Innova Nails Spa</h2>

      <div className="card shadow p-3">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin]}
          initialView="dayGridMonth"
          themeSystem="bootstrap5"
          events={events}
          editable={true}
          selectable={true}
          height="auto"
        />
      </div>
    </div>
  );
}
