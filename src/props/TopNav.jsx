import React from 'react';
import{ Navbar, Nav}  from "react-bootstrap";

class TopNav extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="home">DMV Covid Tracker</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="about-covid19">About Covid19</Nav.Link>
                  <Nav.Link href="locations">Testing Locations</Nav.Link>
                  <Nav.Link href="local-data">Local DMV Data</Nav.Link>
                  <Nav.Link href="world">World Info</Nav.Link>
                  <Nav.Link href="vaccine">Vaccine News</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
                );
    }
}
export default TopNav;