import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function NewCourseForm({
  setField, setTitle, setUrl, setImgUrl,
}) {
  // Function to update GraphQL query parameters to trigger API call to add course
  const addCourseMethod = (event) => {
    event.preventDefault();
    if (event.target[0].value
      && event.target[1].value
      && event.target[2].value
    ) {
      setTitle(event.target[0].value);
      setUrl(event.target[1].value);
      setImgUrl(event.target[2].value);
      setField('addCourse');
    }
  };

  return (
    <Col style={{ paddingBottom: '24px' }}>
      <Form onSubmit={addCourseMethod}>
        <Container className="flex">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Course Title"
              aria-label="Course Title"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Course URL"
              aria-label="Course URL"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Course Image URL"
              aria-label="Course Image URL"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Button className="button" type="submit">Add Course</Button>
          </InputGroup>
        </Container>
      </Form>
    </Col>
  );
}

NewCourseForm.propTypes = {
  setField: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired,
  setImgUrl: PropTypes.func.isRequired,
};