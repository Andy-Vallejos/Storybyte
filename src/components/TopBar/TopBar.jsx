import './TopBar.css'
import { ButtonMobile } from '../index'
import { useLocation, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider';


export function TopBar() {
    const { user } = useAuth();
    const location = useLocation();
    const stateTitle = location.state?.title;

    const routes = {
        '/': "Storybyte",
        '/my-books': "Mis libros",
        '/user': "Perfil",
        '/books': "Libros"
    }

    function getTitle(pathname, fallbackTitle) {
        return routes[pathname] || fallbackTitle || "Storytime";
    }
    return (
        <div className="topBar">
            <h1>{getTitle(location.pathname, stateTitle)}</h1>
            {location.pathname === "/user" ? "" : <ButtonMobile img={user.img} url={"/user"} name='top' />}
        </div>
    )
}