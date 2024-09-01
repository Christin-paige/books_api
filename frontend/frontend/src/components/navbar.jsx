import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Seneca Reads!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={NavLink} className="nav-link">
                Home
              </Nav.Link>

              <Nav.Link to="/addBooks" as={NavLink} className="nav-link">
                    Add a Book
                </Nav.Link>

              <NavDropdown title="My Stuff" id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <Nav.Link to="/wantToRead" as={NavLink} className="nav-link">
                    Want to Read
                  </Nav.Link>
                </NavDropdown.Item>

               

                <NavDropdown.Item>
                <Nav.Link to="/myBooks" as={NavLink} className="nav-link">
                    Books Read
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      
        </Container>
      </Navbar>
    </>
  );
}
