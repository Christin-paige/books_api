import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function AddBooks() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    summary: '',
    imageurl: '',
  }); //holds the form data

  //handleChange updates the state when the input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //send a POST request to the server with the form data
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/v1/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => response.json())
      .then((data) => {
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
      .catch((error) => {
        console.error('error adding book:', error);
      });
  };

  return (
    <>
      <h1>Add a book</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="bookTitle">
          <Form.Label>Book Title: </Form.Label>
          <Form.Control
            type="text"
            id="inputTitle"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
          <Form.Text className="text-muted">Remember to capitalize!</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="bookAuthor">
          <Form.Label>Author: </Form.Label>
          <Form.Control
            type="text"
            id="inputAuthor"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            placeholder="Enter author's name"
          />
          <Form.Text className="text-muted">
            Remember to capitalize first and last name
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="bookGenre">
          <Form.Label>Genre: </Form.Label>
          <Form.Control
            type="text"
            id="inputGenre"
            name="genre"
            value={bookData.genre}
            onChange={handleChange}
            placeholder="Enter genre"
          />
          <Form.Text className="text-muted">
            fiction, nonfiction, fantasy, dystopian, historical fiction...
          </Form.Text>
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="bookImage">
          <Form.Label>Image URL: </Form.Label>
          <Form.Control
            type="text"
            id="inputImage"
            name="imageurl"
            value={bookData.imageurl}
            onChange={handleChange}
            placeholder="Paste image url here"
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Add Book
        </Button>
      </Form>
    </>
  );
}
