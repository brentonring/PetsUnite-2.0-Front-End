import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home"><img className="d-inline-block align-top" id="logo-img" src="/images/logo/logo50x50.png" width="50px" height="50px" alt="Green house cat and dog logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                <Nav.Link className="nav-link" href="#adoption">Adoption</Nav.Link>
                <Nav.Link className="nav-link" href="#services">Services</Nav.Link>
                <Nav.Link className="nav-link" href="#events">Events</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item className="nav-link" href="#login">Log In</NavDropdown.Item>
                  <NavDropdown.Item className="nav-link" href="#register">
                    Register
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="nav-link" href="#contact">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavBar