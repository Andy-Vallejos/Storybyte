import { useBookLogic } from "./useBookLogic";
import "./Books.css";

export default function Books() {
    const { books, loading, query, setQuery, handleSearch, hasMore } = useBookLogic();
    return (
        <div className="books">
            <form onSubmit={handleSearch}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Buscar</button>
            </form>

            {books.map((book) => {
                const rating = (Math.random() * 5).toFixed(1);
                return (
                    <div className="card" key={`${book.key ?? book.title}-${book.cover_i ?? Math.random()}`}>
                        <div className="img" style={{
                            backgroundImage: book.cover_i
                                ? `url('https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg')`
                                : "url(/public/page-not-found.png)",
                        }}
                        ></div>
                        <h1>{book.title}</h1>
                        <footer>
                            <h3>{rating} ⭐</h3>
                            <h3>{book.author_name?.[0] || "Autor desconocido"}</h3>
                        </footer>
                    </div>
                );
            })}
            {loading && (
                <div className="card" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div className="img" style={{
                        backgroundImage: `url("/public/animation2.gif")`,
                        width: "150px",
                        height: "150px",
                    }}></div>
                </div>
            )}
            {!hasMore && !loading && <div className="end-message"> <p>No hay más libros para mostrar.</p> </div>}
        </div>
    );
}
