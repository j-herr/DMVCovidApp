// import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
// import Nav from 'react-bootstrap/Nav'
import{ Navbar, Nav, Button, NavDropdown}  from "react-bootstrap";

const nav = {
    width: '100%',
    height: '100%'
};
class TopNav extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">DMV Covid Tracker</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#locations">Testing Locations</Nav.Link>
                  <Nav.Link href="#local-data">Local DMV Data</Nav.Link>
                  <Nav.Link href="#world">World Info</Nav.Link>
                  <Nav.Link href="#vaccine">Vaccine News</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
                );
    }
}
export default TopNav;