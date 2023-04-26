import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg">
      <Container>
        <Navbar.Brand href="#">Mi aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Acerca de</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
