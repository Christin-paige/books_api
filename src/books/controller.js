const pool = require('../../db');
const queries = require('./queries');

const getBooks = (req, res) => {
    pool.query(queries.getBooks,(error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};
const getBooksById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getBooksById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}
const addBook = (req, res) => {
    const {title, author, genre, summary, imageURL} = req.body;
    pool.query(queries.checkTitleExists, [title], (error, results) => {
        if(results.rows.length){
            res.send('title already exists')
        }
    pool.query(queries.addBook, [title, author, genre, summary, imageURL], 
        (error, results) => {
            if (error) throw error;
            res.status(201).send('Book added successfully!');
            console.log('book create')
        }
    )
    })
}
const deleteBook = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getBooksById,[id], (error, results) => {
        const noBookFound = !results.rows.length;
        if(noBookFound){
            res.send('Book does not exist in database');
        }
        pool.query(queries.deleteBook, [id], (error, results)=> {
            if(error) throw error;
            res.status(200).send('Book deleted successfully!')
        })
    })
}

const updateBook = (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;

    pool.query(queries.getBooksById,[id], (error, results) => {
        const noBookFound = !results.rows.length;
        if(noBookFound){
            res.send('Book does not exist in database');
        }
        pool.query(queries.updateBook, [title, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('book updated successfully')
        })
        })
        }

    



module.exports = {
    getBooks,
    getBooksById,
    addBook,
    deleteBook,
    updateBook,
   
}