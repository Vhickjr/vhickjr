import React from "react";
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
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="lg"
      style={{
        height: "100%",
        fontFamily: "Times New Roman",
        paddingLeft: "30px",
        paddingRight: "20px",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#home"> VM</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler-icon"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="./Aboutme">About Me</Nav.Link>
            <Nav.Link href="./Skills">Skills</Nav.Link>
            <Nav.Link href="./Services">Services</Nav.Link>
            <Nav.Link href="./Myportfolio">My Portfolio</Nav.Link>
            {/*  <Nav.Link href="./Testimonial">Testimonial</Nav.Link>*/}
            <Nav.Link href="./Contactme">Contact Me</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Button variant="outline-light">Hire me</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
