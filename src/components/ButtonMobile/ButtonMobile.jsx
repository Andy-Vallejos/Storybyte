import { useState } from "react";
import "./ButtonMobile.css";
import { Link } from "react-router-dom";

export function ButtonMobile({ name = "default", color, img, url }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <Link to={url}>
            <div className="mobile__btn" style={{ "--btn-backgound": color }}>
                {imgLoaded ? <img className="mobile__btn--img" src={img} onLoad={() => setImgLoaded(true)} alt={`Icono de ${name}`} style={{ width: name === "top" ? "100%" : "50%", borderRadius: name === "top" ? "50%" : "none" }} /> : <img src="/loading.gif" alt="" style={{ width: "100%" }} />}
                <img className="mobile__btn--img" style={{ display: "none" }} src={img} onLoad={() => setImgLoaded(true)} alt={`Icono de ${name}`} />
            </div>
        </Link>
    );
}
