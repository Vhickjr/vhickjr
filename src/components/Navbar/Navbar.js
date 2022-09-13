import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbarr() {
  return (
    <Navbar
      className="customcolor"
      variant="dark"
      expand="lg"
      style={{ height: "100%" }}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="vicc4">
          Victor Mathias
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 vicc4"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="./Aboutme">About Me</Nav.Link>
            <Nav.Link href="./Skills">Skills</Nav.Link>
            <Nav.Link href="./Services">Services</Nav.Link>
            <Nav.Link href="./Myportfolio">My Portfolio</Nav.Link>
            <Nav.Link href="./Testimonial">Testimonial</Nav.Link>
            <Nav.Link href="./Contactme">Contact Me</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-light">Hire me</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
