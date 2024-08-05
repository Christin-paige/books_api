import { useState, } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function AddBooks(){
const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    summary: '',
    imageurl: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData(prevState => ({
        ...prevState,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/v1/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('book added:', data);
        //clear for after successful submission
        setBookData({
            title: '',
            author: '',
            genre: '',
            summary: '',
            imageurl: '',
        });
      })
      .catch(error => {
        console.error('error adding book:', error)
      })
}


    return (
        <>
        <h1>Add a book</h1>
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="bookTitle">
        <Form.Label>Book Title: </Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
        <Form.Text className="text-muted">
          Remember to capitalize!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="bookAuthor">
        <Form.Label>Author: </Form.Label>
        <Form.Control type="text" placeholder="Enter author's name" />
        <Form.Text className="text-muted">
          Remember to capitalize first and last name
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="bookGenre">
        <Form.Label>Genre: </Form.Label>
        {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`fiction`}
          />
           <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`nonfiction`}
          />
           <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`fantasy`}
          />
           <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`historical fiction`}
          />
           <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`dystopian/sci-fi`}
          />
    <InputGroup className="mb-3">
          <InputGroup.Text>Summary</InputGroup.Text>
          <Form.Control
            as="textarea"
            name="summary"
            value={bookData.summary}
            onChange={handleChange}
            aria-label="With textarea"
          />
        </InputGroup>
         
        </div>
      ))}
      </Form.Group>
        </Form>
        </>
    )
}