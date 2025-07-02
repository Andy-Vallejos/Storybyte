export const generateRatings = (books, ratings = {}) => {
  return books.reduce((acc, book) => {
    if (!ratings[book.key]) {
      acc[book.key] = (Math.random() * 5).toFixed(1);
    }
    return acc;
  }, {});
};
