import './TopBar.css'
import { ButtonMobile } from '../index'
import { useLocation, Link } from 'react-router-dom'


export function TopBar() {
    const location = useLocation();

    const routes = {
        '/': "Storytime",
        '/my-books': "Mis libros",
        '/user': "Perfil",
    }

    function getTitle(param) {
        return routes[param]
    }
    return (
        <div className="topBar">
            <h1>{getTitle(location.pathname)}</h1>
            {location.pathname === "/user" ? "" : <ButtonMobile color="transparent" img="/public/user.png" url={"/user"} />}

        </div>
    )
}