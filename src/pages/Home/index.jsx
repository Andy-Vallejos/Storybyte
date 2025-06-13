import "./home.css"

function Card({ name, color, children }) {
  return (
    <section className={`${name} category home__new__banner`} style={{ background: color, boxShadow: "0px 0px 20px 2px" + color }}>
      {children}
    </section>
  )
}

export default function Home() {
  const categorias = [
    { name: 'Terror', color: "#6B8E23" },
    { name: 'Infantil', color: "#FFD700" },
    { name: 'Accion', color: "#0D47A1" },
    { name: 'Romance', color: "#FF69B4" },
    { name: 'Fantasia', color: "#724DE0" },
    { name: 'Misterio', color: "#2F4F4F" }
  ]
  return (
    <div className="home">
      < section className="home__new" >
        <h1>Nuevo</h1>
        <Card color={"#64A5A6"}>
          <h1>Libros <br /> de la semana</h1>
          <h1>Para ti</h1>
        </Card>
      </section >
      <section className="home__categories">
        <h1>Categorias</h1>
        <section className="home__categories__wall">
          {categorias.map((category) => {
            return <Card name={category.name} color={category.color}>
              <h1>{category.name}</h1>
            </Card>
          })}
        </section>
      </section>
      <section className="home__populars">
        <h1>Más populares</h1>
        <section className="home__populars__category">
          <h1>TERROR</h1>
        </section>
      </section>
    </div >
  )
}



