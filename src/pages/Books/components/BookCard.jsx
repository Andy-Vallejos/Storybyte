import { useState } from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

export function BookCard({ book, rating }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    const imageUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : "/cancelar.png";

    return (
        <Link to={`/books/${book.key?.replace("/works/", "")}`} state={{ title: book.title }} className="card__link">
            <div className="card">
                <div className="card__img" style={{
                    backgroundImage: `url('${imageUrl}')`,
                }}>
                    {!imgLoaded && <img src="/public/loading.gif"></img>}
                    <img src={imageUrl} alt={book.title} style={{ display: "none" }} onLoad={() => setImgLoaded(true)} />
                </div>
                <h1 className="card__title">{book.title}</h1>
                <footer className="card__footer">
                    <h3>{rating}⭐</h3>
                    <h3>{book.author_name?.[0] || "Autor desconocido"}</h3>
                </footer>
            </div>
        </Link>
    );
}