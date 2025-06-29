import { useInfiniteQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { fetchBooks } from "./bookApi";
import { generateRatings } from "@/pages/Books/Logic/ratings";

export function useBookLogic() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("popular");
  const [ratings, setRatings] = useState({});

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["books", searchTerm],
      queryFn: ({ pageParam = 1 }) => fetchBooks(searchTerm, pageParam),
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length > 0 ? allPages.length + 1 : undefined,
      staleTime: 300000,
    });

  let books = [];
  if (data && data.pages) {
    books = data.pages.flat();
  }

  useEffect(() => {
    if (books.length === 0) return;
    const newRatings = generateRatings(books, ratings);
    if (Object.keys(newRatings).length > 0) {
      setRatings((prev) => ({ ...prev, ...newRatings }));
    }
  }, [books, ratings]);

  useEffect(() => {
    const onScroll = () => {
      if (!hasNextPage || isFetchingNextPage) return;

      const scrollY = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - 100;

      if (scrollY >= threshold) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed && trimmed !== searchTerm) {
      setSearchTerm(trimmed);
    }
  };

  return {
    books,
    loading: isLoading || isFetchingNextPage,
    query,
    setQuery,
    handleSearch,
    hasMore: hasNextPage,
    ratings,
  };
}
