import axios from "axios";

export const fetchBooks = async (searchTerm, page, cancelToken) => {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
    searchTerm
  )}&page=${page}&limit=10`;
  const response = await axios.get(url, { cancelToken });
  return response.data.docs;
};
