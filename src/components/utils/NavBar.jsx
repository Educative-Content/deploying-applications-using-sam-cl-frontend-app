import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar className="justify-content-start fixed-top navbar-color" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-navbar-title"><b>Courses on Educative</b></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
