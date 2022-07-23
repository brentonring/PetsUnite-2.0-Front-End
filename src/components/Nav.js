import React from 'react'
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './Home';
import AdoptionIndex from './adoption/index_adoption';
import EventIndex from './EventIndex';
import ServiceIndex from './services/index_services';

function NavBar() {
  return (
    <div className="navbar">
      <Router>
        <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/"><img className="d-inline-block align-top" id="logo-img" src="/images/logo/logo50x50.png" width="50px" height="50px" alt="Green house cat and dog logo"></img></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav defaultActiveKey="/" className="me-auto">
                  <Nav.Link eventKey={"Home"}>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link eventKey={"AdoptionIndex"}>
                    <Link to="/adoption">Adoption</Link>
                  </Nav.Link>
                  <Nav.Link eventKey={"ServiceIndex"}>
                    <Link to="/services">Services</Link>
                  </Nav.Link>
                  <Nav.Link eventKey={"EventIndex"}>
                    <Link to="/events">Events</Link>
                  </Nav.Link>
                  <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#login">Log In</NavDropdown.Item>
                    <NavDropdown.Item href="#register">
                      Register
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#contact">
                      Contact Us
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
        <div className="display">
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/adoption" component={AdoptionIndex} />
            <Route path="/events" component={EventIndex} />
            <Route path="/services" component={ServiceIndex} />
            {/* <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact_us" component={ContactUs} /> */}
          </Routes>
        </div>

{/* function NavBar() {
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
        </Navbar> */}
    </div>
  );
}

export default NavBar;