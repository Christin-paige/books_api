import { useContext } from 'react';
import { BookShelfContext } from '../context/bookShelf';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function WantToRead(){

    const { shelfBooks } = useContext(BookShelfContext);

    return (
        <Container className ="want-to-read">

        <h1>Books I Want to Read</h1>

        {shelfBooks.map((book) =>
                book ? (
                    <Card className="books" key={book.id} style={{width: '18rem' }}>
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
                <Button variant="primary">Read!</Button>
                        </Card.Body>
                   </Card>
                ) : null
        )}
        
      
        </Container>
        
    );
}