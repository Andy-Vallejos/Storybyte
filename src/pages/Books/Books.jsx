import { useBookLogic } from "./useBookLogic";
import "./Books.css";
import { Link } from "react-router-dom";

export default function Books() {
    const { books, loading, query, setQuery, handleSearch, hasMore, ratings } = useBookLogic();
    return (
        <div className="books">
            <form onSubmit={handleSearch}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Buscar</button>
            </form>

            {books.map((book) => {
                return (
                    <Link to={`/books/${book.key?.replace("/works/", "")}`} state={{ title: book.title }} className="books__link">
                        <div className="card" key={book.key}>
                            <div className="img" style={{
                                backgroundImage: book.cover_i
                                    ? `url('https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg')`
                                    : "url(/public/cancelar.png)",
                                boxShadow: book.cover_i ? "display" : "none",
                            }}
                            ></div>
                            <h1 className="books__card--title">{book.title}</h1>
                            <footer>
                                <h3>{ratings[book.key] || "0.0"} ⭐</h3>
                                <h3>{book.author_name?.[0] || "Autor desconocido"}</h3>
                            </footer>
                        </div>
                    </Link>
                );
            })}
            {loading && (
                <h1 style={{ color: "black" }}>Cargando...</h1>
            )
            }
            {!hasMore && !loading && <div className="end-message"> <p>No hay más libros para mostrar.</p> </div>}
        </div >
    );
}
