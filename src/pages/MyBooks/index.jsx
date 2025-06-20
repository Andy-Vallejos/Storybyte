import { NavMobile, TopBar } from "/src/components";
import axios from "axios";
import "./MyBooks.css";
import { useEffect, useState } from "react";

export default function MyBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const getBooks = async () => {
        try {
            const response = await axios.get(
                "https://openlibrary.org/search.json?q=book&page=10"
            );
            setBooks(response.data.docs);
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener libros:", error);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className="mybooks">
            {loading ? (
                <div
                    className="card"
                    style={{
                        background: "rgba(0,0,0, .9)",
                        boxShadow: `0 0 20px 2px rgba(0,0,0, .8)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}
                >
                    <div
                        className="img"
                        style={{
                            backgroundImage: `url('/public/animation2.gif')`,
                            width: "150px",
                            height: "150px",
                        }}
                    ></div>
                </div>
            ) : (
                books.map((book, index) => {
                    const rating = (Math.random() * 5).toFixed(1);
                    return (
                        <div className="card" key={index}>
                            <div
                                className="img"
                                style={{
                                    backgroundImage: `url('https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg')`,
                                }}
                            ></div>
                            <h1>{book.title}</h1>

                            <footer>
                                <h3>{rating} ⭐</h3>
                                <h3>{book.author_name?.[0] || "Autor desconocido"}</h3>
                            </footer>
                        </div>
                    );
                })
            )}
        </div>
    );
}
