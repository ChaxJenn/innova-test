// src/pages/CalendarPages.jsx
import React from "react";
import CalendarWithStylists from "../components/CalendarWithStylists";

function CalendarPages() {

  return (
    <div className="container-fluid py-4">
      <h2 className="text-center mb-4">Calendario de Citas - Innova Nails Spa</h2>
      <CalendarWithStylists />
    </div>
  );
}

export default CalendarPages;
