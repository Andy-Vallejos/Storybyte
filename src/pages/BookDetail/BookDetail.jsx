import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './BookDetail.css';

export function BookDetail() {
    const { key } = useParams();
    const [book, setBook] = useState(null);
    const [author, setAuthor] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const getBook = async () => {
            try {
                const responseBook = await axios.get(`https://openlibrary.org/works/${key}.json`);
                setBook(responseBook.data);



                const authorKey = responseBook.data.authors?.[0]?.author?.key;
                if (authorKey) {
                    const responseAuthor = await axios.get(`https://openlibrary.org${authorKey}.json`);
                    setAuthor(responseAuthor.data);
                }
                const covers = responseBook.data.covers;
                if (covers && covers.length > 0) {
                    const imageUrl = `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`;
                    setImageUrl(imageUrl);
                }

            } catch (error) {
                console.error("Error al obtener los datos del libro:", error);
            }
        };
        getBook();
    }, [key]);


    return (
        <div className="bookDetail" >
            <div className="bookDetail__img" style={{ backgroundImage: `url(${imageUrl})` }} >

            </div>
            <section className="bookDetail__info" style={{ backgroundImage: `url(${imageUrl})` }}>
                <h1>
                    By {author?.personal_name || "Autor desconocido"} <br /><br />
                    {typeof book?.description === "string"
                        ? book.description
                        : book?.description?.value || "Sin descripción"}
                </h1>
            </section>
        </div>
    );
}
