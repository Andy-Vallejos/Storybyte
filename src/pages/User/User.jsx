import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider';
import './User.css'


export function User() {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
        <div className='user'>
            <div className="img"
                style={{
                    backgroundImage: `url(${user.img})`,
                }}>
            </div>
            <section className='user__info'>
                <h1>
                    {user.name}
                </h1>
                <p> {user.email}</p>
            </section>

            <ul className='user__options'>
                <li>
                    <img src="/user-avatar.png" alt="" />
                    <Link>Editar perfil</Link>
                </li>
                <li>
                    <img src="/key.png" alt="" />
                    <Link>Cambiar contraseña</Link>
                </li>
                <li onClick={handleLogout}>
                    <img src="/logout.png" alt="" />
                    <Link>Cerrar sesion</Link>
                </li>
            </ul>
        </div >
    )
}