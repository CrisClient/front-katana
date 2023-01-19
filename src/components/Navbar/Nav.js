import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ImCart, ImUser } from "react-icons/im";
import { BiUser } from "react-icons/bi";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Nombre del Proyecto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          </Nav>
          <div class="d-flex flex-row">
          <Button href="https://www.google.com.mx" variant="warning">Donador!</Button>
          <Button className='bg-transparent border border-0'><ImCart color="gray" size="1rem"/></Button>
          <Button className='bg-transparent border border-0'><BiUser color="gray" size="1.2rem"/></Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;