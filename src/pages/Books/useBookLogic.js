import axios from "axios";
import { useEffect, useState } from "react";

export function useBookLogic() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("books");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getBooks(searchTerm, page);
  }, [searchTerm, page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 100 && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  const getBooks = async (search, pageNumber) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${search}&page=${pageNumber}`
      );
      const newBooks = response.data.docs;

      if (newBooks.length === 0) {
        setHasMore(false);
      }
      if (pageNumber === 1) {
        setBooks(newBooks);
      } else {
        setBooks((prev) => [...prev, ...newBooks]);
      }
    } catch (error) {
      console.error("Error al obtener libros:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmed = query.trim();
    if (trimmed) {
      setBooks([]);
      setHasMore(true);
      setSearchTerm(trimmed);
      setPage(1);
    }
  };

  return { books, loading, query, setQuery, handleSearch, hasMore };
}
