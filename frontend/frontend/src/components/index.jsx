import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Index() {
  const [books, setBooks] = useState([]);

  function getBooks() {
    fetch('http://localhost:3000/api/v1/books')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooks(data);
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
      <h1>Seneca Reads</h1>
      <Card style={{ width: '18rem' }}>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id}>
              <Card.Img
                variant="top"
                src={book.imageurl}
                alt={`${book.title} cover`}
              />
              <Card.Body>
                <Card.Title>
                  <strong>{book.title}</strong>
                </Card.Title>
                <Card.Text>{book.author}</Card.Text>
                <Card.Text>{book.genre}</Card.Text>
                <Card.Text>{book.summary}</Card.Text>
                <Button variant="primary">Want to Read</Button>
              </Card.Body>
            </div>
          ))
        ) : (
          <p>There are no books to show!</p>
        )}
      </Card>
    </div>
  );
}
