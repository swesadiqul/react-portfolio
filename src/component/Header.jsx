import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.png'



function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#webdesign">Web Design</NavDropdown.Item>
              <NavDropdown.Item href="#webdevelopment">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#marketing">Marketing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#appdevelopment">
                App Development
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;