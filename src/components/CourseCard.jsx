import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
export default function CourseCard({
  courseJSON, setField, setTitle, setUrl, setImgUrl, setId,
}) {
  const [editorMode, setEditorMode] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const courseData = JSON.parse(courseJSON);
  // Function to update GraphQL query parameters to trigger API call to delete course
  const deleteCourseMethod = () => {
    setId(courseData.ID);
    setField('removeCourse');
  };
  const enableEditor = () => {
    setEditorMode(true);
  };
  const disableEditor = () => {
    setEditorMode(false);
  };
  // Function to update GraphQL query parameters to trigger API call to edit course
  const confirmEdits = (event) => {
    event.preventDefault();
    if (event.target[0].value
      && event.target[1].value
      && event.target[2].value
    ) {
      setId(courseData.ID);
      setTitle(event.target[0].value);
      setUrl(event.target[1].value);
      setImgUrl(event.target[2].value);
      setField('editCourse');
      disableEditor();
    }
  };
  if (editorMode) {
    return (
      <Col className="col-3" style={{ paddingBottom: '24px' }}>
        <Card>
          <Card.Img
            variant="top"
            src={courseData.ImageURL}
            alt="Image Not Found"
          />
          <Card.Header>{`Editing: ${courseData.CourseName}`}</Card.Header>
          <Card.Body>
            <Form onSubmit={confirmEdits}>
              <Container className="flex">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Course Title"
                    aria-label="Course Title"
                    defaultValue={courseData.CourseName}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Course URL"
                    aria-label="Course URL"
                    defaultValue={courseData.CourseURL}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Course Image URL"
                    aria-label="Course Image URL"
                    defaultValue={courseData.ImageURL}
                  />
                </InputGroup>
                <Button className="button" onClick={disableEditor}>Discard Changes</Button>
                <InputGroup className="mb-3">
                  <Button className="button" type="submit">Save Changes</Button>
                </InputGroup>
              </Container>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  return (
    <Col className="col-3" style={{ paddingBottom: '24px' }}>
      <Card>
        <Card.Img
          variant="top"
          src={courseData.ImageURL}
          alt="Image Not Found"
        />
        <Card.Header>{courseData.CourseName}</Card.Header>
        <Card.Body>
          <Container style={{ padding: '5px' }} />
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip className="custom-tooltip" id="edit-tooltip" style={{ fontSize: '12px' }}>Edit Course</Tooltip>}
          >
            <Button variant="link" onClick={enableEditor} style={{ color: 'white', outline: null }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip className="custom-tooltip" id="edit-tooltip" style={{ fontSize: '12px' }}>Delete Course</Tooltip>}
          >
            <Button variant="link" onClick={handleShow} style={{ color: 'white', outline: null }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip className="custom-tooltip" id="edit-tooltip" style={{ fontSize: '12px' }}>Open Course Link</Tooltip>}
          >
            <Button variant="link" href={`${courseData.CourseURL}`} target="_blank" style={{ color: 'white', outline: null }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
              </svg>
            </Button>
          </OverlayTrigger>
          <Modal
            show={show}
            onHide={handleClose}
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                Delete Course
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {`Are you sure want to delete the course "${courseData.CourseName}"?`}
            </Modal.Body>
            <Modal.Footer>
              <Button className="button" variant="secondary" onClick={handleClose}>No</Button>
              <Button className="button" onClick={deleteCourseMethod}>Yes</Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </Col>
  );
}
CourseCard.propTypes = {
  courseJSON: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired,
  setImgUrl: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired,
};