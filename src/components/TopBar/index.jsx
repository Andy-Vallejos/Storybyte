import './TopBar.css'
import { ButtonMobile } from '../Buttons'

export default function TopBar() {

    return (
        <div className="topBar">
            <ButtonMobile name="mode" color={"#FFD700"} img="/public/sol 1.png" />
            <h1>Storybyte</h1>
            <ButtonMobile color="#9C27B0" img="/public/userBooks.png" />
        </div>
    )
}