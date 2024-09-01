import { useState, useEffect, useContext } from 'react';
import { BookShelfContext } from '../context/bookShelf';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SearchBar from './searchBar';


export default function Index() {
  const [books, setBooks] = useState([]);
  const [results, setResults] = useState([]);
  const { addToShelf } = useContext(BookShelfContext);
  const [isFlipped, setIsFlipped] = useState([]);

  const handleClick = (index) => {
    if(isFlipped.includes(index)){
        setIsFlipped(isFlipped.filter((item) => item !== index));
    }else{
        setIsFlipped([...isFlipped, index])
    }
    
};

  function getBooks() {
    fetch('http://localhost:3000/api/v1/books')
      .then((response) => response.json())
      .then((data) => {
        setBooks(books);
        setResults(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
   <div>
    <SearchBar setResults={setResults}/>
    <div className="index-container">
       
      <h1>Seneca Reads</h1>
      <div className="card-container">
      {results.length > 0 ? (
                     results.map((book, index) => (
       
            <Card 
            key={book.id} 
            className= {`card ${isFlipped.includes(index) ? "isFlipped" : ""}`} 
            style={{ width: '18rem' }}
            onClick={() => handleClick(index)}
            >
              <div className="card-front">
              <Card.Img
                variant="top"
                src={book.imageurl}
                alt={`${book.title} cover`}
              />
              </div>
             
              <div className="card-back">
              <Card.Body>
                <Card.Title>
                  <strong>{book.title}</strong>
                </Card.Title>
                <Card.Text>{book.author}</Card.Text>
                <Card.Text>{book.genre}</Card.Text>
                <Card.Text>{book.summary}</Card.Text>
                <Button variant="primary" onClick={() => addToShelf(book)}>
                  Want to Read
                  </Button>
                  
              </Card.Body>
              </div>
              

           </Card>
          ))
        ) : (
          <p>There are no books to show!</p>
        )}
    
      </div>
    </div>
    </div>
   
  );
}
