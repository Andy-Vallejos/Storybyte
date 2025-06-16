import './NavMobile.css'
import { ButtonMobile } from '../Buttons'

export default function NavMobile() {
    return (
        <div className="nav">
            <ButtonMobile name="home " color="#9C27B0" img="/public/home.png" />
            <ButtonMobile color="#0D47A1" img="/public/reading.png" />
            <ButtonMobile color="#C43342" img="/public/books-stack-of-three.png" />
        </div>
    )
}