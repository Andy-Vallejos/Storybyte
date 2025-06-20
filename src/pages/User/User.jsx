import { Link } from 'react-router-dom'
import './User.css'

export default function User() {
    return (
        <div className='user'>
            <div className="img"
                style={{
                    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGllJmAI98vgvh4Q3433e9PgvxxMoAdtMv8LTVLXro8K_WtiinYIrIp1reogOa4wl7bQ&usqp=CAU")`,
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