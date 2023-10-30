import React from 'react';
import Container from 'react-bootstrap/Container';

function NotFound() {
  return (
    <Container className="center-container">
      <h1 className="text-title-color">404 Error</h1>
      <h1 className="text-title-color">The requested URL does not exist</h1>
    </Container>
  );
}

export default NotFound;
