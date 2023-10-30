import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardList from '../CardList';

function Loading() {
  const list = [];
  let i = 0;
  while (i < 10) {
    list.push({ id: i });
    i += 1;
  }
  const loadData = {
    data: list
  };

  return (
    <Container>
      <Col className="align-items-center">
        <Row style={{ paddingTop: '10px' }}>
          <h1 className="header1-design">Courses on Educative</h1>
        </Row>
        <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <CardList data={loadData} type="loader" />
        </Row>
      </Col>
    </Container>
  );
}

export default Loading;
