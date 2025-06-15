import './NavMobile.css'
import { ButtonMobile } from '../Buttons'

export default function NavMobile() {
    return (
        <div className="nav">
            <ButtonMobile name="home " color="#C43342" img="/public/home.png" />
            <ButtonMobile color="#0D47A1" img="/public/userBooks.png" />
            <ButtonMobile color="#FFD54F" img="/public/home.png" />
            <ButtonMobile color="#9C27B0" img="/public/userBooks.png" />
        </div>
    )
}