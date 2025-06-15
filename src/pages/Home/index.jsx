import "./home.css"
import { NavMobile, TopBar } from "/src/components"

function Card({ name, color, picture, children }) {
  return (
    <section className={`${name} category home__new__banner`} style={{ background: color, boxShadow: "0px 0px 20px 2px" + color }}>
      {children}
      <img src={picture} alt={`Icono de una imagen de ${name}`} />
    </section>
  )
}

export default function Home() {
  const categorias = [
    { name: 'Terror', color: "#6B8E23", picture: "/public/ghost.png" },
    { name: 'Infantil', color: "#FFD700", picture: "/public/ballons.png" },
    { name: 'Accion', color: "#0D47A1", picture: "/public/soldier.png" },
    { name: 'Romance', color: "#FF69B4", picture: "/public/heart.png" },
    { name: 'Fantasia', color: "#724DE0", picture: "/public/fairy-tale.png" },
    { name: 'Misterio', color: "#2F4F4F", picture: "/public/moon.png" }
  ]
  return (
    <>
      <TopBar></TopBar>
      <div className="home">
        <NavMobile />
        < section className="home__new" >
          <h1>Nuevo</h1>
          <Card name={"libros"} color={"#64A5A6"} picture={"/public/books.png"}>
            <h1>Libros <br /> de la semana</h1>
          </Card>
        </section >
        <section className="home__categories">
          <h1>Categorias</h1>
          <section className="home__categories__wall">
            {categorias.map((el, index) => {
              return <Card name={el.name} color={el.color} picture={el.picture} key={index}>
                <h1>{el.name}</h1>
              </Card>
            })}
          </section>
        </section>
      </div >
      <section className="home__populars">
        <h1>Más populares</h1>
        <section className="home__populars__category">
          <h1>TERROR</h1>
        </section>
      </section>
    </>
  )
}



