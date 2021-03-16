import { connect } from 'react-redux';
import { hideModal } from '../redux/modal';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import {
  StyledModal,
  StyledImage,
  StyledDescription,
  StyledComments,
  StyledComentHeader,
} from '../styled/Modal';

import { RatingStars, Form } from '.';

const Modal = ({ isVisible, data, hideModal }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <StyledModal show={isVisible} onHide={hideModal}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>{data.name}</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body as={Row}>
        <Col lg='auto'>
          <StyledImage src={data.img} />
        </Col>
        <StyledDescription>
          <h5>Description:</h5>
          <p>
            <span>{data.name}</span>
          </p>
        </StyledDescription>
        <StyledComments lg={12}>
          <h5>Comments:</h5>
          <ListGroup>
            <ListGroup.Item as={Container}>
              <StyledComentHeader>
                <h6>Customer Name</h6>
                <RatingStars stars={3} />
              </StyledComentHeader>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                corporis aliquam, inventore sit maiores asperiores provident
                natus debitis quis commodi officiis impedit ipsam expedita porro
                autem veritatis, sapiente, facilis molestiae!
              </p>
            </ListGroup.Item>
            <ListGroup.Item as={Container}>
              <StyledComentHeader>
                <h6>Customer Name</h6>
                <RatingStars stars={2} />
              </StyledComentHeader>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                corporis aliquam, inventore sit maiores asperiores provident
                natus debitis quis commodi officiis impedit ipsam expedita porro
                autem veritatis, sapiente, facilis molestiae!
              </p>
            </ListGroup.Item>
          </ListGroup>
        </StyledComments>
      </StyledModal.Body>
      <StyledModal.Footer>
        <Form />
      </StyledModal.Footer>
    </StyledModal>
  );
};

export default connect(
  ({ modal }) => ({
    isVisible: modal.isVisible,
    data: modal.data,
  }),
  { hideModal },
)(Modal);
