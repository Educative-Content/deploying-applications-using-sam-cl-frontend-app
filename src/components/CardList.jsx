import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CourseCard from './CourseCard';
import LoaderCard from './loading/LoaderCard';

function CardList({
  data, type, setField, setTitle, setUrl, setImgUrl, setId,
}) {
  let listCards = <div />;
  if (data) {
    listCards = data.data.map((object) => {
      
      const dataObjStr = JSON.stringify(object);
      if (type === 'course') {
        return (
          <React.Fragment key={object.ID}>
            <CourseCard
              courseJSON={dataObjStr}
              setField={setField}
              setTitle={setTitle}
              setUrl={setUrl}
              setImgUrl={setImgUrl}
              setId={setId}
            />
          </React.Fragment>
        );
      }
      if (type === 'loader') {
        return (
          <React.Fragment key={object.id}>
            <LoaderCard />
          </React.Fragment>
        );
      }
      return (<div />);
    });
  } else {
    return (
      <Container fluid>
        <h3 className="header5-design">{`No ${type}s Found`}</h3>
      </Container>
    );
  }
  if (data.length === 0) {
    return (
      <Container fluid>
        <h3 className="header5-design">{`No ${type}s Found`}</h3>
      </Container>
    );
  }
  return (
    <Row className="flex-row">
      { listCards }
    </Row>
  );
}

CardList.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  setField: PropTypes.func,
  setTitle: PropTypes.func,
  setUrl: PropTypes.func,
  setImgUrl: PropTypes.func,
  setId: PropTypes.func,
};

CardList.defaultProps = {
  setField: null,
  setTitle: null,
  setUrl: null,
  setImgUrl: null,
  setId: null,
};

export default CardList;