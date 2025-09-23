import React from "react";
import '../styles/styilistsBar.css'
import {Card} from "react-bootstrap"

function StylistsBar() {
    const stylists = [
        { id: 1, name: "Maria", img: "https://i.pravatar.cc/50?img=1" },
        { id: 2, name: "Ana", img: "https://i.pravatar.cc/50?img=2" },
        { id: 3, name: "Lucia", img: "https://i.pravatar.cc/50?img=3" },
        { id: 4, name: "Paula", img: "https://i.pravatar.cc/50?img=4" },
        { id: 5, name: "Paula", img: "https://i.pravatar.cc/50?img=5" },
        { id: 6, name: "Paula", img: "https://i.pravatar.cc/50?img=6" },
        { id: 7, name: "Paula", img: "https://i.pravatar.cc/50?img=7" },
        { id: 8, name: "Paula", img: "https://i.pravatar.cc/50?img=8" },
        { id: 9, name: "Paula", img: "https://i.pravatar.cc/50?img=9" },
        { id: 10, name: "Paula", img: "https://i.pravatar.cc/50?img10" },
        { id: 11, name: "Paula", img: "https://i.pravatar.cc/50?img=11" },
    ];

    return (
        <div className="stylists-bar d-flex overflow-auto py-3">
            {stylists.map((stylists) => (
                <div 
                    className="flex-shrink-0 px-2"
                    style={{ width: "250px"}}
                    key={stylists.id}
                >
                    <Card className="h-100 text-center shadow-sm">
                        <Card.Img 
                            variant="top"
                            src={stylists.img}
                            alt={stylists.name}
                            className="rounded-circle mx-auto mt-3"
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        />
                        <Card.Body>
                            <Card.Title>{stylists.name}</Card.Title>
                            <Card.Text className="text-muted">{stylists.name}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default StylistsBar