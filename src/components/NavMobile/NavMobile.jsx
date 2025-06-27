import './NavMobile.css'
import { ButtonMobile } from '../index'

export function NavMobile() {
    return (
        <div className="nav__mobile">
            <ButtonMobile color="#9C27B0" img="/public/home.png" url="/" />
            <ButtonMobile color="#0D47A1" img="/public/reading.png" url="/my-books" />
            <ButtonMobile color="#C43342" img="/public/books-stack-of-three.png" url="/books" />
        </div>
    )
}