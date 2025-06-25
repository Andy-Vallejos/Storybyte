import './TopBar.css'
import { ButtonMobile } from '../index'
import { useLocation, Link } from 'react-router-dom'


export function TopBar() {
    const location = useLocation();
    const stateTitle = location.state?.title;

    const routes = {
        '/': "Storytime",
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
            {location.pathname === "/user" ? "" : <ButtonMobile color="transparent" img="/public/user.png" url={"/user"} />}

        </div>
    )
}