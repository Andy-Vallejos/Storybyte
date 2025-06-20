import { useState } from "react";
import "./ButtonMobile.css";
import { Link } from "react-router-dom";

export function ButtonMobile({ name = "default", color, img, url }) {
    const [mode, setMode] = useState(false);

    const handleClick = () => {
        if (name === "mode") {
            setMode(!mode);
        }
    };

    color = mode ? "#0D47A1" : color;
    img = mode ? "/public/moonMode.png" : img;



    return (
        <Link to={url}>
            <div
                className="btn"
                style={{
                    background: color,
                    boxShadow: `0px 0px 10px 2px ${color}`,
                    border: color === "transparent" ? "1px solid white" : "none",
                }}
                onClick={handleClick}
            >
                <img src={img} alt={`Icono de ${name}`} />
            </div>
        </Link>
    );
}
