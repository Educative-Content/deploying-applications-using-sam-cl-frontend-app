import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import loadingImage from '../../images/Loading.png';

export default function LoaderCard() {
  return (
    <Col className="col-3" style={{ paddingBottom: '24px' }}>
      <Card>
        <Card.Img
          variant="top"
          src={loadingImage}
          alt="Image Loading"
        />
        <Card.Header>
          <Placeholder animation="glow">
            <Placeholder xs={4} size="lg" />
            <Container style={{ padding: '3px' }} />
            <Placeholder xs={6} size="lg" />
          </Placeholder>
        </Card.Header>
        <Placeholder as={Card.Title} animation="glow" />
        <Card.Body>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={7} size="lg" />
          </Placeholder>
          <Placeholder animation="glow">
            <Placeholder.Button variant="danger" xs={6} />
          </Placeholder>
          <Container style={{ padding: '10px' }} />
          <Placeholder animation="glow">
            <Placeholder.Button variant="danger" xs={7} />
          </Placeholder>
        </Card.Body>
      </Card>
    </Col>
  );
}
