import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './BookDetail.css';

export default function BookDetail() {
    const { key } = useParams();
    const [book, setBook] = useState(null);
    const [authors, setAuthors] = useState([]);
    const [pageCount, setPageCount] = useState(null);

    const getBook = async () => {
        try {
            // Obtener detalles de la obra
            const response = await axios.get(`https://openlibrary.org/works/${key}.json`);
            setBook(response.data);

            // Obtener nombres de autores
            if (response.data.authors && response.data.authors.length > 0) {
                const authorPromises = response.data.authors.map(async (authorObj) => {
                    const authorKey = authorObj.author.key;
                    const authorRes = await axios.get(`https://openlibrary.org${authorKey}.json`);
                    return authorRes.data.name;
                });
                const authorNames = await Promise.all(authorPromises);
                setAuthors(authorNames);
            }

            // Obtener número de páginas desde la primera edición
            const editionsRes = await axios.get(`https://openlibrary.org/works/${key}/editions.json?limit=1`);
            const edition = editionsRes.data.entries[0];
            if (edition && edition.number_of_pages) {
                setPageCount(edition.number_of_pages);
            }
        } catch (error) {
            console.error("Error al obtener los datos del libro:", error);
        }
    };

    useEffect(() => {
        getBook();
    }, [key]);

    const imageUrl = book?.covers?.[0]
        ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
        : "/cancelar.png";

    return (
        <div className="bookDetail">
            <img src={imageUrl} alt={book?.title || "Portada"} />
            <section className="bookDetail__info">
                <h1>{book?.title}</h1>
                <h2>Autor: {authors.length > 0 ? authors.join(", ") : "Autor desconocido"}</h2>
                <p><strong>Descripción:</strong> {book?.description ? (typeof book.description === "string" ? book.description : book.description.value) : "No disponible"}</p>
                <p><strong>Fecha de creación:</strong> {book?.created?.value ? new Date(book.created.value).toLocaleDateString() : "No disponible"}</p>
                <p><strong>Temas:</strong> {book?.subjects?.slice(0, 5).join(", ") || "No disponibles"}</p>
                <p><strong>Número de páginas:</strong> {pageCount ?? "No disponible"}</p>
            </section>
        </div>
    );
}
