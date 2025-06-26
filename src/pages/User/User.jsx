import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider';
import './User.css'


export default function User() {
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

            <ul>
                <li>
                    <img src="/public/edit-profile.png" alt="" />
                    <Link>Editar perfil</Link>
                </li>
                <li>
                    <img src="/public/padlock.png" alt="" />
                    <Link>Cambiar contraseña</Link>
                </li>
                <button onClick={handleLogout}>Salir</button>

            </ul>
        </div >
    )
}