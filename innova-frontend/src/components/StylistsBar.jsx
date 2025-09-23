import React from "react";
import { Card } from "react-bootstrap";

function StylistsBar({ stylists, cardWidth = 250 }) {
    return (
        <div className="d-flex" style={{ marginBottom: "10px" }}>
        {stylists.map((stylist) => (
            <Card
            key={stylist.id}
            className="flex-shrink-0 text-center shadow-sm"
            style={{
                width: `${cardWidth}px`,
                margin: "0 1px",
            }}
            >
            <Card.Img
                variant="top"
                src={`https://i.pravatar.cc/100?u=${stylist.id}`}
                alt={stylist.title}
                className="rounded-circle mx-auto mt-3"
                style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                }}
            />
            <Card.Body>
                <Card.Title>{stylist.title}</Card.Title>
            </Card.Body>
            </Card>
        ))}
        </div>
    );
}

export default StylistsBar;
