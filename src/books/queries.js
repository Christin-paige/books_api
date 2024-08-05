const getBooks = 'SELECT * FROM books';
const getBooksById = 'SELECT * FROM books WHERE id = $1';
const checkTitleExists = 'SELECT s FROM books s WHERE s.title = $1';
const addBook = 'INSERT INTO books (title, author, genre, summary, imageURL) VALUES ($1, $2, $3, $4, $5)';
const deleteBook = 'DELETE FROM books WHERE id = $1';
const updateBook = 'UPDATE books SET title = $1 WHERE id = $2';

module.exports = {
    getBooks,
    getBooksById,
    checkTitleExists,
    addBook,
    deleteBook,
    updateBook,
};