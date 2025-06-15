import { useState } from 'react'
import './ButtonMobile.css'
export default function ButtonMobile({ name = "default", color, img }) {
    const [mode, setMode] = useState(false)

    const handleClick = () => {
        if (name === "mode") {
            setMode(!mode);
        } else {
            console.log("Redireccionando");
        }
    }

    color = mode ? "#0D47A1" : color;
    img = mode ? "/public/moonMode.png" : img

    return (
        <div className='btn' style={{ background: color, boxShadow: `0px 0px 10px 2px ${color}` }} onClick={handleClick}>
            <img src={img} alt={`Icono de ${name}`} />
        </div >
    )
}
