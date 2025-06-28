import { useBookLogic } from "@/pages/Books/Logic/useBookLogic";
import { BookCard } from "@/pages/Books/components/BookCard.jsx";
import "./Books.css";


export function Books() {
    const { books, loading, query, setQuery, handleSearch, hasMore, ratings } = useBookLogic();

    return (
        <div className="books">
            <form onSubmit={handleSearch} className="books__form">
                <input className="books__form--input" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar algo..." />
                <button className="books__form--btn" type="submit">Buscar</button>
            </form>

            {books.map((book) => <BookCard key={book.key} book={book} rating={ratings[book.edition_key]} />)}

            {loading && <img src="/loading.gif"></img>}

            {!hasMore && !loading && (
                <div className="end-message">
                    <span>No hay más libros que mostrar.</span>
                </div>
            )}
        </div>
    );
}
