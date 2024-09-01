import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const BookShelfContext = createContext();

export const BookProvider = ({ children }) => {
    const [shelfBooks, setShelfBooks] = useState(
        localStorage.getItem('shelfBooks')
        ? JSON.parse(localStorage.getItem('shelfBooks'))
        : []
    );

    const addToShelf = (book) => {
        const isBookOnShelf = shelfBooks.find((shelfBook) => shelfBook.id === book.id);

        if(isBookOnShelf) {
            setShelfBooks(
                shelfBooks.map((shelfBook) =>
                shelfBook.id === book.id
            ? {...shelfBook, quantity: shelfBook.quantity + 1}
        : shelfBook
            )
        );
    
        }else {
            setShelfBooks([...shelfBooks, { ...book, quantity: 1}])
        }
    };

    useEffect(() => {
        localStorage.setItem('shelfBooks', JSON.stringify(shelfBooks)); 
    }, [shelfBooks]);


    return (
        <BookShelfContext.Provider
        value={{
            shelfBooks,
            addToShelf,
        }}
        >
            {children}
        </BookShelfContext.Provider>
    );
};
BookProvider.propTypes = {
    children: PropTypes.node.isRequired,
}