import "./ButtonMobile.css";
import { Link } from "react-router-dom";

export function ButtonMobile({ name = "default", color, img, url }) {

    return (
        <Link to={url}>
            <div className="mobile__btn" style={{ "--btn-backgound": color }}>
                <img className="mobile__btn--img" src={img} alt={`Icono de ${name}`} style={{ width: name === "top" ? "100%" : "50%", borderRadius: name === "top" ? "50%" : "none" }} />
            </div>
        </Link>
    );
}
