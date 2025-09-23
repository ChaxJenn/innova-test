import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap";

// Estilos
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fullcalendar/common/main.css";

import StylistsBar from "../components/StylistsBar";

function CalendarPages() {
  const stylists = [
    { id: "1", title: "Maria" },
    { id: "2", title: "Ana" },
    { id: "3", title: "Lucia" },
    { id: "4", title: "Paula" },
    { id: "5", title: "Clara" },
    { id: "6", title: "Valeria" },
    { id: "7", title: "Camila" },
    { id: "8", title: "Camila" },
    { id: "9", title: "Camila" },
    { id: "10", title: "Camila" },
    { id: "11", title: "Camila" },
  ];

  const [events] = useState([
    { title: "Corte - María", start: "2025-09-22T10:00:00", resourceId: "1" },
    { title: "Peinado - Ana", start: "2025-09-22T11:00:00", resourceId: "2" },
    { title: "Manicure - Lucia", start: "2025-09-22T13:00:00", resourceId: "3" },
    { title: "Color - Paula", start: "2025-09-22T14:30:00", resourceId: "4" },
  ]);

  const columnWidth = 250;

  return (
    <div className="container-fluid mt-4">
      <h2 className="text-center mb-4">
        Calendario de Citas – Innova Nails Spa
      </h2>

      {/* Scroll ÚNICO: nace en la barra de estilistas */}
      <div
        id="scroll-wrapper"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {/* Contenedor sincronizado */}
        <div
          style={{
            display: "inline-block",
            minWidth: `${stylists.length * columnWidth}px`,
          }}
        >
          {/* StylistsBar arriba */}
          <StylistsBar stylists={stylists} cardWidth={columnWidth} />

          {/* Calendario abajo */}
          <FullCalendar
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            plugins={[
              timeGridPlugin,
              interactionPlugin,
              resourceTimeGridPlugin,
              bootstrap5Plugin,
            ]}
            initialView="resourceTimeGridDay"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "timeGridDay,timeGridWeek",
            }}
            resources={stylists}
            events={events}
            resourceAreaWidth="0px"
            slotMinTime="07:00:00"
            slotMaxTime="19:00:00"
            themeSystem="bootstrap"
            height="auto"
            resourceAreaColumns={[]}
            slotLabelFormat={{
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }}
            // fuerza ancho fijo de columnas
            resourceWidth={`${columnWidth}px`}
          />
        </div>
      </div>
    </div>
  );
}

export default CalendarPages;
