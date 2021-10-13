import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" className="">
        <Container>
          <Navbar.Brand href="#home">Car Mechanics</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/home#home">Home</Nav.Link>
            <Nav.Link href="/home#services">Services</Nav.Link>
            <Nav.Link href="/home#experts">Experts</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
