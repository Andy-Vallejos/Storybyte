import { useBookLogic } from "./Logic/useBookLogic";
import "./Books.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function BookCard({ book, rating }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    const imageUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "/cancelar.png";

    return (
        <Link
            to={`/books/${book.key?.replace("/works/", "")}`}
            state={{ title: book.title }}
            className="books__link"
        >
            <div className="card">
                <div className="img" style={{
                    backgroundImage: imgLoaded ? `url('${imageUrl}')` : "none",
                    boxShadow: imgLoaded ? "display" : "none"
                }}>
                    {!imgLoaded && <span>...</span>}
                    <img
                        src={imageUrl}
                        alt={book.title}
                        style={{ display: "none" }}
                        onLoad={() => setImgLoaded(true)}
                    />
                </div>
                <h1 className="books__card--title">{book.title}</h1>
                <footer>
                    <h3>{rating} ⭐</h3>
                    <h3>{book.author_name?.[0] || "Autor desconocido"}</h3>
                </footer>
            </div>
        </Link>
    );
}

export default function Books() {
    const { books, loading, query, setQuery, handleSearch, hasMore, ratings } = useBookLogic();

    return (
        <div className="books">
            <form onSubmit={handleSearch} className="books__form">
                <input className="books__form--input" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="books__form--btn" type="submit">Buscar</button>
            </form>

            {books.map((book) => (
                <BookCard
                    key={book.key}
                    book={book}
                    rating={ratings[book.key] || "0.0"}
                />
            ))}

            {loading && <img url="/public/animation2.gif" />}

            {!hasMore && !loading && (
                <div className="end-message">
                    <p>No hay más libros para mostrar.</p>
                </div>
            )}
        </div>
    );
}
