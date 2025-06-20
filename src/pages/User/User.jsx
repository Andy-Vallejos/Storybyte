import { Link } from 'react-router-dom'
import './User.css'

export default function User() {
    return (
        <div className='user'>
            <div className="img"
                style={{
                    backgroundImage: `url("/public/image.png")`,
                }}>
            </div>
            <section className='user__info'>
                <h1>
                    Nombre
                </h1>
                <p>nombre@gmail.com</p>
            </section>

            <ul>
                <li>
                    <img src="/public/edit-profile.png" alt="" />
                    <Link>Editar perfil</Link>
                </li>
                <li>
                    <img src="/public/padlock.png" alt="" />
                    <Link>Cambiar contraseña</Link>
                </li>
                <button >Salir</button>

            </ul>
        </div >
    )
}