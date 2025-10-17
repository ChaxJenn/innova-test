import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/sidebar.css'

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="p-4">
                <h3>Innova Nails Spa</h3>
            </div>
            <nav className="d-flex flex-column p-3">
                <NavLink to={"/"} element="mb-3 text-decoration-none">Dashboard</NavLink>
                <NavLink to={"/calendario"} element="mb-3 text-decoration-none">Calendario</NavLink>
                <NavLink to={"/inventario"} element="mb-3 text-decoration-none">Servicios</NavLink>
                <NavLink to={"/reservas"} element="mb-3 text-decoration-none">Reservas</NavLink>
                <NavLink to={"/estilistas"} element="mb-3 text-decoration-none">Estilistas</NavLink>

            </nav>
        </aside>
    )
}

export default Sidebar;