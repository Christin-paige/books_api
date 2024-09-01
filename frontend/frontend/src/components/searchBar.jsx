import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

export default function SearchBar({ setResults }) {
    const [filterBooks, setFilterBooks] = useState('');

    const fetchBooks = (value) => {
        fetch('http://localhost:3000/api/v1/books')
        .then((response) => response.json())
        .then((data)=> {
            const results = data.filter((book) => {
                return (
                value && 
                book && 
                book.title && 
                book.title.toLowerCase().includes(value)
                );
            });
            setResults(results);
            
        })
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setFilterBooks(value);
        fetchBooks(value);
    }

    return (
        <>
<Form>
<Row>
  <Col xs="auto">
    <Form.Control
      type="search"
      placeholder="Search"
      id="search-form"
      className="search-input"
      value={filterBooks} 
      onChange={handleChange}
      
    />
  </Col>
 
</Row>
</Form>
        </>
    )
}
SearchBar.propTypes = {
    setResults: PropTypes.func.isRequired,
};