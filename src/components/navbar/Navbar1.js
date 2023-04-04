import React from "react";
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1()
{
    return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">WEBSITE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

        </Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Events
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Offers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Career
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1