import React from 'react'
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


import Home from './Home';
import AdoptionIndex from './adoption/AdoptionIndex';
import EventIndex from './events/EventIndex';
import ServiceIndex from './services/ServiceIndex';
import NewAdoption from './adoption/NewAdoption';
import NewService from './services/NewService';
import ShowService from './services/ShowService';
import NewEvent from './events/NewEvent';
import ShowEvent from './events/ShowEvent';
import ShowAdoption from './adoption/ShowAdoption';
import EditAdoption from './adoption/EditAdoption';

function NavBar() {


  return (
    <div className="NavBar">
        <Router>
          <Navbar bg="white" expand="lg">
              <Container>
                <Navbar.Brand href="/"><img className="d-inline-block align-top" id="logo-img" src="/images/logo/logo50x50.png" width="50px" height="50px" alt="Green house cat and dog logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav defaultActiveKey="/" className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/adoption">Adoption</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/events">Events</Nav.Link>
                    {/* <NavDropdown title="More" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#login">Log In</NavDropdown.Item>
                      <NavDropdown.Item href="#register">
                        Register
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#contact">
                        Contact Us
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
              <Switch>
                {/* <Route exact path="/adoption"><AdoptionIndex/></Route> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/adoption" component={AdoptionIndex} />
                <Route exact path="/events" component={EventIndex} />
                <Route exact path="/services" component={ServiceIndex} />
                <Route exact path="/adoption/new" component={NewAdoption} />
                <Route exact path="/services/new" component={NewService} />
                <Route exact path="/events/new" component={NewEvent} />
                <Route path="/adoption/:petId" component={ShowAdoption} />
                <Route path="/adoption/:serviceId" component={ShowService} />
                <Route path="/adoption/:eventId" component={ShowEvent} /> 
                {/* <Route path="/adoption/:petId/edit" component={EditAdoption} /> */}
                {/* <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/contact_us" component={ContactUs} /> */}
              </Switch>
        </Router>
    </div>
  );
}

export default NavBar;