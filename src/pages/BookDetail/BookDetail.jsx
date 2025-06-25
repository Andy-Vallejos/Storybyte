import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './BookDetail.css'

export default function BookDetail() {
    const { key } = useParams();
    const [book, setBook] = useState(null);

    const getBook = async () => {
        try {
            const response = await axios.get(`https://openlibrary.org/works/${key}.json`);
            setBook(response.data);
        } catch (error) {
            console.error("Error al obtener el libro:", error);
        }
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div className="bookDetail">
            <p></p>
        </div>
    );
}
