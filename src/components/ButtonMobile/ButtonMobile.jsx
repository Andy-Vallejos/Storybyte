import { useState } from "react";
import "./ButtonMobile.css";
import { Link } from "react-router-dom";

export function ButtonMobile({ name, color, img, url, children }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <Link to={url}>
            <div className="mobile__btn" style={{ "--btn-backgound": color }}>
                {imgLoaded && img ? <img className="mobile__btn--img" src={img} alt={`Icono de ${name}`} style={name === "top" ? { width: "100%", borderRadius: "50%" } : { width: "50%" }} /> : <img src="/loading.gif" alt="cargando" style={{ width: "100%" }} />}
                <img className="mobile__btn--img" style={{ display: "none" }} src={img} onLoad={() => setImgLoaded(true)} alt={`Icono de ${name}`} />
                {children}
            </div>
        </Link>
    );
}
