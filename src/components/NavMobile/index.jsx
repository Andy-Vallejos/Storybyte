import './NavMobile.css'

function CustomButton({ name, color, img }) {
    return (
        <div className='btn' style={{ background: color, boxShadow: "0px 0px 20px 2px" + color }}>
            <img src={img} alt={`Icono de ${name}`} />
        </div >
    )
}

export default function NavMobile() {
    return (
        <div className="nav">
            <CustomButton name="home " color="#C43342" img="/public/home.png" />
            <CustomButton color="#0D47A1" img="/public/userBooks.png" />
            <CustomButton color="#C43342" img="/public/home.png" />
            <CustomButton color="#0D47A1" img="/public/userBooks.png" />
        </div>
    )
}