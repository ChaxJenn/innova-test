// src/pages/CalendarPages.jsx
import React from "react";
import CalendarWithStylists from "../components/CalendarWithStylists";

function CalendarPages() {
  const stylists = [
    { id: 1, name: "Karen", role: "Estilista", img: "https://i.pravatar.cc/50?img=1" },
    { id: 2, name: "Ana", role: "Manicurista", img: "https://i.pravatar.cc/50?img=2" },
    { id: 3, name: "Lucia", role: "Pedicurista", img: "https://i.pravatar.cc/50?img=3" },
    { id: 4, name: "Paula", role: "Colorista", img: "https://i.pravatar.cc/50?img=4" },
    { id: 5, name: "Jenny", role: "Colorista", img: "https://i.pravatar.cc/50?img=4" },
    { id: 6, name: "Fernanda", role: "Colorista", img: "https://i.pravatar.cc/50?img=4" },
    { id: 7, name: "Diana", role: "Colorista", img: "https://i.pravatar.cc/50?img=4" },
    { id: 8, name: "Ximena", role: "Colorista", img: "https://i.pravatar.cc/50?img=4" },
    { id: 9, name: "Paola", role: "Colorista", img: "https://i.pravatar.cc/50?img=4" },
    { id: 10, name: "Sandra", role: "Colorista", img: "https://i.pravatar.cc/50?img=4" },
    { id: 11, name: "Esperanza", role: "Colorista", img: "https://i.pravatar.cc/50?img=4" }
  ];

  // Citas de prueba
  const appointments = [
    { stylistId: 1, time: "16:00", client: "Cliente A", color: "#d63384" },
    { stylistId: 2, time: "10:00", client: "Cliente B", color: "#0d6efd" },
    { stylistId: 3, time: "11:00", client: "Cliente C", color: "#198754" },
    { stylistId: 4, time: "12:00", client: "Cliente D", color: "#fd7e14" },
  ];

  return (
    <div className="container-fluid py-4">
      <h2 className="text-center mb-4">Calendario de Citas - Innova Nails Spa</h2>
      <CalendarWithStylists stylists={stylists} appointments={appointments} />
    </div>
  );
}

export default CalendarPages;
