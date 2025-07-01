import './NavMobile.css';
import { ButtonMobile } from '@/components/index';
import { useLocation } from 'react-router-dom';

export function NavMobile() {
    const location = useLocation();

    const hideNav = /^\/my-books\/[^/]+$/.test(location.pathname);

    if (hideNav) return null;

    return (
        <div className="nav__mobile">
            <ButtonMobile color="#9C27B0" img="/home.png" url="/" />
            <ButtonMobile color="#0D47A1" img="/reading.png" url="/my-books" />
            <ButtonMobile color="#C43342" img="/books-stack-of-three.png" url="/books" />
        </div>
    );
}